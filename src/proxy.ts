import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import {
  NextResponse,
  type NextRequest,
  type NextFetchEvent,
} from "next/server";

const APP_PATH_PREFIXES = [
  "/today",
  "/devotional",
  "/journal",
  "/bible-study",
  "/sign-in",
  "/sign-up",
  "/api/prayer",
];

// Marketing-only hosts. Currently only used for local-dev preview of the
// (marketing) route group. In production the app lives on e320.app directly.
const MARKETING_HOSTS = new Set([
  "lvh.me",
  "localhost",
]);

const APP_HOSTS = new Set([
  "e320.app",
  "www.e320.app",
  "app.e320.app",
  "app.lvh.me",
  "app.localhost",
]);

const isProtectedRoute = createRouteMatcher([
  "/today(.*)",
  "/devotional(.*)",
  "/journal(.*)",
  "/bible-study(.*)",
  "/api/prayer(.*)",
]);

function getHostname(host: string | null): string {
  if (!host) return "";
  return host.split(":")[0].toLowerCase();
}

function getPort(host: string | null): string {
  if (!host) return "";
  const port = host.split(":")[1];
  return port ? `:${port}` : "";
}

function isAppPath(pathname: string): boolean {
  return APP_PATH_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

function hostRouting(request: NextRequest): NextResponse | null {
  const url = request.nextUrl.clone();
  const hostHeader = request.headers.get("host");
  const host = getHostname(hostHeader);
  const port = getPort(hostHeader);
  const proto = url.protocol;
  const { pathname } = url;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return null;
  }

  if (APP_HOSTS.has(host)) {
    if (pathname === "/") {
      url.pathname = "/today";
      return NextResponse.rewrite(url);
    }
    if (!isAppPath(pathname)) {
      const target = host.replace(/^app\./, "");
      return NextResponse.redirect(
        `${proto}//${target}${port}${pathname}${url.search}`,
      );
    }
    return null;
  }

  if (MARKETING_HOSTS.has(host)) {
    if (isAppPath(pathname)) {
      const target = `app.${host}`;
      return NextResponse.redirect(
        `${proto}//${target}${port}${pathname}${url.search}`,
      );
    }
    return null;
  }

  return null;
}

// Accept either standard or Vercel-Marketplace-prefixed Clerk keys.
const clerkSecretKey =
  process.env.CLERK_SECRET_KEY ?? process.env.E320_CLERK_SECRET_KEY;
const clerkPublishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_E320_CLERK_PUBLISHABLE_KEY;

const clerkAuth = clerkMiddleware(
  async (auth, request) => {
    if (isProtectedRoute(request)) {
      await auth.protect();
    }
  },
  {
    secretKey: clerkSecretKey,
    publishableKey: clerkPublishableKey,
  },
);

export default async function proxy(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const hostResponse = hostRouting(request);
  if (hostResponse) return hostResponse;
  return clerkAuth(request, event);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|pdf)).*)",
    "/(api|trpc)(.*)",
  ],
};
