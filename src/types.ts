export interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  image: string;
  category: 'coastal' | 'alpine' | 'cultural' | 'island';
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  recommendedDuration: string;
  averageRating: number;
  startingPrice: number;
  gridSpan?: 'normal' | 'wide' | 'tall';
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  timeSlot?: string;
  highlight?: string;
}

export interface DestinationItinerary {
  duration: string;
  nights: string;
  route: string[];
  startingPrice: number;
  bestSeason: string;
  highlights: string[];
  days: ItineraryDay[];
}

export interface FloatingDestination {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tag: string;
  headlineMain: string;
  headlineSub: string;
  description: string;
  image: string;
  heroImage: string;
  targetDestinationId: string;
  isActive?: boolean;
  itinerary: DestinationItinerary;
}

export interface TravelExperience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  features: string[];
  stats: { label: string; value: string }[];
}

export interface TravelPackage {
  id: string;
  title: string;
  duration: string;
  destination: string;
  country: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  included: string[];
}

export interface BrandBenefit {
  number: string;
  title: string;
  description: string;
  iconName: 'Compass' | 'ShieldCheck' | 'Sliders' | 'Headphones';
}

export interface TravelStory {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

export interface TripInquiry {
  destination: string;
  travelStyle: string;
  departureMonth: string;
  travelers: number;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
}
