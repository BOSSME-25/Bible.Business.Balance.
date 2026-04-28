import { Pool } from "pg";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

let _db: NodePgDatabase<typeof schema> | null = null;

function getDb(): NodePgDatabase<typeof schema> {
  if (_db) return _db;
  // Accept either the standard env var or the Vercel Marketplace
  // integration's prefixed version (set during install).
  const databaseUrl =
    process.env.DATABASE_URL ?? process.env.BibleBizBal_DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL is not set. Provision Neon via the Vercel Marketplace and run `vercel env pull .env.local`.",
    );
  }
  // Strip sslmode from the URL so pg's parser doesn't emit the v9 deprecation
  // warning, then configure SSL explicitly. Neon requires TLS; cert validation
  // is opt-in (we leave it off for compatibility with their pooler).
  const sanitized = (() => {
    try {
      const u = new URL(databaseUrl);
      u.searchParams.delete("sslmode");
      return u.toString();
    } catch {
      return databaseUrl;
    }
  })();
  const pool = new Pool({
    connectionString: sanitized,
    ssl: { rejectUnauthorized: false },
  });
  _db = drizzle(pool, { schema });
  return _db;
}

// Proxy so callers can use `db.select(...)` while we resolve lazily.
export const db = new Proxy({} as NodePgDatabase<typeof schema>, {
  get(_target, prop) {
    const target = getDb() as unknown as Record<string | symbol, unknown>;
    const value = target[prop];
    return typeof value === "function" ? value.bind(target) : value;
  },
});

export { schema };
