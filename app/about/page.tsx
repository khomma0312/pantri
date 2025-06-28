import { Header } from "@/shared/components/layout/header";
import { Footer } from "@/shared/components/layout/footer";
import { HeroSection } from "@/features/about/components/hero-section";
import { FeaturesSection } from "@/features/about/components/features-section";
import { HowToUseSection } from "@/features/about/components/how-to-use-section";
import { ProblemSolvingSection } from "@/features/about/components/problem-solving-section";

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