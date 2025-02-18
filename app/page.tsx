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
    <div className="relative h-screen">
      {/* Background layer - fills entire screen */}
      <div className="fixed inset-0 -z-10">
        <MainComponent className="w-full" />
      </div>
      
      {/* Foreground content */}
      <NavigationBar />
      <Hero/>
      <DashBoard />
      <LogoCarousel />
      <PersonalizedLearning />
      <NewSection />
      <HowItWorks />
      <AdaptiveLearningFeatures />
      <ChooseGradius />
      
      {/* Main content area */}
      <main className="relative z-20"> 
        {/* Your additional page content here, if any */}
      </main>
    </div>
  )
}
