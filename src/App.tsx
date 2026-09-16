import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TravelPackagesSection } from './components/TravelPackagesSection';
import { WhyWanderlySection } from './components/WhyWanderlySection';
import { StoriesSection } from './components/StoriesSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { PlanTripModal } from './components/PlanTripModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { StoryModal } from './components/StoryModal';
import { ItineraryModal } from './components/ItineraryModal';
import { DESTINATIONS } from './data/travelData';
import { Destination, FloatingDestination, TravelPackage, TravelStory } from './types';

export default function App() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [selectedDestinationName, setSelectedDestinationName] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedItineraryDestination, setSelectedItineraryDestination] = useState<FloatingDestination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [selectedStory, setSelectedStory] = useState<TravelStory | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for navbar highlight
  useEffect(() => {
    const sections = ['home', 'destinations', 'experiences', 'packages', 'why-us', 'stories', 'footer'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to destinations section
  const handleExploreClick = () => {
    const el = document.getElementById('destinations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open modal from floating bubble or card
  const handleSelectDestinationById = (destId: string) => {
    const found = DESTINATIONS.find((d) => d.id === destId);
    if (found) {
      setSelectedDestination(found);
    } else {
      // Smoothly scroll to the section if not matched
      handleExploreClick();
    }
  };

  const handleOpenPlanModalFor = (name?: string) => {
    setSelectedDestinationName(name || '');
    setIsPlanModalOpen(true);
  };

  return (
    <div className="relative bg-[#0B0F0E] text-white min-h-screen selection:bg-[#D9C7A2]/30 selection:text-white">
      {/* Vertical Desktop Scroll Progress Bar */}
      <ScrollProgress />

      {/* Primary Fixed Navbar */}
      <Navbar
        onOpenPlanModal={() => handleOpenPlanModalFor()}
        activeSection={activeSection}
      />

      {/* Main Sections Flow */}
      <main id="main-content">
        {/* 1. Full-screen Cinematic Hero */}
        <Hero
          onExploreClick={handleExploreClick}
          onSelectDestination={handleSelectDestinationById}
          onViewItinerary={(dest) => setSelectedItineraryDestination(dest)}
        />

        {/* 2. Bento Destinations Section */}
        <DestinationsSection
          onOpenDetails={(dest) => setSelectedDestination(dest)}
        />

        {/* 3. Featured Storytelling Experience */}
        <ExperienceSection
          onOpenPlanModal={() => handleOpenPlanModalFor()}
        />

        {/* 4. Travel Packages Section */}
        <TravelPackagesSection
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenPlanModal={() => handleOpenPlanModalFor()}
        />

        {/* 5. Why Wanderly Benefits */}
        <WhyWanderlySection />

        {/* 6. Travel Stories & Editorial Section */}
        <StoriesSection
          onReadStory={(story) => setSelectedStory(story)}
        />

        {/* 7. Full-Bleed Cinematic CTA */}
        <CTASection
          onOpenPlanModal={() => handleOpenPlanModalFor()}
        />
      </main>

      {/* 8. Luxury Dark Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Interactive Modals */}
      <PlanTripModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        initialDestination={selectedDestinationName}
      />

      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookDestination={(name) => handleOpenPlanModalFor(name)}
      />

      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookPackage={(name) => handleOpenPlanModalFor(name)}
      />

      <ItineraryModal
        destination={selectedItineraryDestination}
        onClose={() => setSelectedItineraryDestination(null)}
        onBookItinerary={(name) => handleOpenPlanModalFor(name)}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />
    </div>
  );
}
