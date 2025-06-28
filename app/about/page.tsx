import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { HowToUseSection } from "./components/how-to-use-section";
import { ProblemSolvingSection } from "./components/problem-solving-section";

export default function AboutPage() {
  return (
    <div className="bg-stone-50 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12">
        <HeroSection />
        <FeaturesSection />
        <HowToUseSection />
        <ProblemSolvingSection />
      </main>
      <Footer />
    </div>
  );
}