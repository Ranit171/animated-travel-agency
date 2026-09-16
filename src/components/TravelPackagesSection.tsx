import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { TRAVEL_PACKAGES, PACKAGES_SECTION_DATA } from '../data/travelData';
import { PackageCard } from './PackageCard';
import { TravelPackage } from '../types';

interface TravelPackagesSectionProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenPlanModal: () => void;
}

export const TravelPackagesSection: React.FC<TravelPackagesSectionProps> = ({
  onSelectPackage,
  onOpenPlanModal,
}) => {
  return (
    <section id="packages" className="relative py-28 md:py-36 bg-[#0B0F0E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9C7A2]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PACKAGES_SECTION_DATA.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              {PACKAGES_SECTION_DATA.titleMain} <br className="hidden sm:inline" />
              <span className="italic font-normal">{PACKAGES_SECTION_DATA.titleSub}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#B8BFBB] font-light max-w-xl">
              {PACKAGES_SECTION_DATA.description}
            </p>
          </div>

          <button
            onClick={onOpenPlanModal}
            className="self-start md:self-auto px-5 py-2.5 rounded-full glass-button text-xs sm:text-sm font-medium text-white flex items-center gap-2 hover:border-[#D9C7A2] cursor-pointer"
          >
            <span>{PACKAGES_SECTION_DATA.customItineraryButtonText}</span>
            <ArrowRight className="w-4 h-4 text-[#D9C7A2]" />
          </button>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVEL_PACKAGES.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={index}
              onSelectPackage={onSelectPackage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
