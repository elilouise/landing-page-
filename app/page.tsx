import NavigationBar from './components/NavigationBar'
import MainComponent from './components/MainComponent'
import Hero from './components/hero'
import DashBoard from './components/Dashboard'
import LogoCarousel from './components/LogoCarousel';
import PersonalizedLearning from './components/PersonalizedLearning';
import { HowItWorks } from './components/HowItWorks';
import NewSection from './components/NewSection';
import AdaptiveLearningFeatures from './components/AdaptiveLearningFeatures';
import ChooseGradius from './components/ChooseGradius';


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background gradient component */}
      <div className="fixed inset-0 -z-10">
        <MainComponent className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-0">
        <NavigationBar />
        <Hero />
        <DashBoard />
        <LogoCarousel />
        <PersonalizedLearning />
        <NewSection />
        <HowItWorks />
        <AdaptiveLearningFeatures />
        <ChooseGradius />
      </div>
    </main>
  );
}