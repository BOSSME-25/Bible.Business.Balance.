import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="max-w-md mx-auto px-6 py-16 lg:py-24 flex justify-center">
      <SignIn />
    </section>
  );
}
