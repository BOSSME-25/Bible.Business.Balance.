import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import QuizSection from "@/components/QuizSection";
import TransparencySection from "@/components/TransparencySection";
import PodcastSection from "@/components/PodcastSection";
import BookSection from "@/components/BookSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider variant="botanical" bgFrom="charcoal" bgTo="off-white" />
        <MissionSection />
        <SectionDivider variant="torn" bgFrom="off-white" bgTo="charcoal" />
        <QuizSection />
        <SectionDivider variant="wave" bgFrom="charcoal" bgTo="warm-cream" />
        <TransparencySection />
        <SectionDivider variant="botanical" bgFrom="warm-cream" bgTo="charcoal" />
        <PodcastSection />
        <SectionDivider variant="torn" bgFrom="charcoal" bgTo="off-white" />
        <BookSection />
        <SectionDivider variant="wave" bgFrom="off-white" bgTo="warm-cream" />
        <AboutSection />
        <TestimonialSection />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
