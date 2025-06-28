import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { HowToUseSection } from "./components/how-to-use-section";
import { ProblemSolvingSection } from "./components/problem-solving-section";

export default function AboutPage() {
  return (
    <div className="text-gray-900">
      <Header />
      <main>
        <div className="bg-white">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <HeroSection />
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <FeaturesSection />
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <HowToUseSection />
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <ProblemSolvingSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}