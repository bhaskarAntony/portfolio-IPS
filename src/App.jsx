import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import AchievementsSection from './components/AchievementsSection';
import LeadershipSection from './components/LeadershipSection';
import MediaSection from './components/MediaSection';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light dark:bg-dark transition-all duration-300 overflow-x-hidden">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <TimelineSection />
          <AchievementsSection />
          <LeadershipSection />
          {/* <MediaSection /> */}
          <GallerySection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;