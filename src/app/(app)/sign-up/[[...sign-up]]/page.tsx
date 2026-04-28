import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="max-w-md mx-auto px-6 py-16 lg:py-24 flex justify-center">
      <SignUp />
    </section>
  );
}
