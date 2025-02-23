import NavigationBar from "./components/NavigationBar";
import MainComponent from "./components/MainComponent";
import Hero from "./components/hero";
import DashBoard from "./components/Dashboard";
import LogoCarousel from "./components/LogoCarousel";
import PersonalizedLearning from "./components/PersonalizedLearning";
import { HowItWorks } from "./components/HowItWorks";
import NewSection from "./components/NewSection";
import AdaptiveLearningFeatures from "./components/AdaptiveLearningFeatures";
import ChooseGradius from "./components/ChooseGradius";
import ChoseGradius from "./components/ChoseGradius";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-fit w-full relative">
      {/* Background container */}
      <div className="absolute inset-0 w-full h-full bg-red-500">
        <Image
          src="/Frame 1216259520.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main content */}
      <main className="relative z-10">
        <NavigationBar />
        <Hero />
        <DashBoard />
        <LogoCarousel />
        <PersonalizedLearning />
        <HowItWorks />
        <AdaptiveLearningFeatures />
        <ChooseGradius />
      </main>
    </div>
  );
}