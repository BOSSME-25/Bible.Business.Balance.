import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import AppHeader from "@/components/app/AppHeader";

export const metadata: Metadata = {
  title: "B.B.B App | Bible, Business & Balance",
  description:
    "Daily devotionals, SOAP journaling, and live Bible studies in one place.",
};

// All app routes are per-user and depend on Clerk auth + DB. They must render at
// request time, not at build time.
export const dynamic = "force-dynamic";

// Accept either standard or Vercel-Marketplace-prefixed Clerk publishable key.
const clerkPublishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_E320_CLERK_PUBLISHABLE_KEY;

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      appearance={{
        variables: {
          colorPrimary: "#c17c56",
          colorBackground: "#faf8f4",
          colorText: "#1a1a1a",
          fontFamily: "Montserrat, system-ui, sans-serif",
          borderRadius: "0",
        },
      }}
    >
      <div className="min-h-screen bg-off-white text-charcoal flex flex-col">
        <AppHeader />
        <main className="flex-1">{children}</main>
      </div>
    </ClerkProvider>
  );
}
