import {
  Destination,
  FloatingDestination,
  TravelExperience,
  TravelPackage,
  BrandBenefit,
  TravelStory,
} from '../types';

/* =========================================================================
   WANDERLY — CENTRAL CONTENT & MEDIA REPOSITORY
   -------------------------------------------------------------------------
   All text, copy, image URLs, badges, itineraries, packages, links,
   and descriptions across the entire website are defined in this single file.
   Edit any text or image below to immediately update the site.
   ========================================================================= */

// -------------------------------------------------------------------------
// 1. BRAND & SITEWIDE CONFIGURATION
// -------------------------------------------------------------------------
export const SITE_CONFIG = {
  brandName: 'Wanderly',
  brandSuffix: '.',
  tagline: 'Travel beyond the ordinary.',
  description:
    'Crafting bespoke global expeditions, secluded island escapes, and private alpine journeys for thoughtful wanderers worldwide.',
  email: 'hello@wanderly.travel',
  phone: '+1 800 123 4567',
  hours: 'Monday — Sunday\n24-Hour VIP Concierge',
  copyrightYear: 2026,
};

// -------------------------------------------------------------------------
// 2. NAVIGATION BAR
// -------------------------------------------------------------------------
export const NAV_DATA = {
  brandName: 'Wanderly',
  navLinks: [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Destinations', href: '#destinations', id: 'destinations' },
    { label: 'Experiences', href: '#experiences', id: 'experiences' },
    { label: 'Travel Packages', href: '#packages', id: 'packages' },
    { label: 'About Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#footer', id: 'footer' },
  ],
  ctaButtonText: 'Plan a Trip',
  mobileExploreBadge: 'Luxury Bespoke Travel',
  mobileEmailPrompt: 'Need instant concierge guidance?',
};

// -------------------------------------------------------------------------
// 3. HERO SECTION & FLOATING BUBBLE DESTINATIONS
// -------------------------------------------------------------------------
export const HERO_BACKGROUND_IMAGE =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400&auto=format&fit=crop';

export const FLOATING_DESTINATIONS: FloatingDestination[] = [
  {
    id: 'cameo-island',
    title: 'Cameo Island',
    subtitle: 'Zakynthos, Greece',
    badge: 'Ionian Sea Sanctuary',
    tag: 'Zakynthos, Greece',
    headlineMain: 'The Wooden Bridge',
    headlineSub: 'to Paradise',
    description:
      'Cross the iconic wooden footbridge over crystalline waters to a private pine-fringed islet. Snorkel alongside loggerhead Caretta turtles, swim into luminous sea caves, and toast the sunset over limestone cliffs.',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2400&auto=format&fit=crop',
    targetDestinationId: 'santorini',
    isActive: false,
    itinerary: {
      duration: '4 Days',
      nights: '3 Nights',
      route: ['Agios Sostis', 'Cameo Footbridge', 'Keri Sea Caves', 'Navagio Cove'],
      startingPrice: 1380,
      bestSeason: 'May – October',
      highlights: [
        'Private Cameo Bridge Pass',
        'Loggerhead Turtle Safari',
        'Catamaran Sunset Cruise',
        'Cliffside Suite',
      ],
      days: [
        {
          day: 1,
          title: 'Arrival & Sunset on Cameo Bridge',
          timeSlot: 'Day 1 • Welcome to Zakynthos',
          description:
            'Private airport transfer to Agios Sostis bay. Cross the illuminated wooden rope bridge for sunset champagne and welcome seafood dinner overlooking the bay.',
          highlight: 'Private Footbridge Evening Access',
        },
        {
          day: 2,
          title: 'Caretta Turtle Haven & Keri Sea Caves',
          timeSlot: 'Day 2 • Marine Sanctuary',
          description:
            'Embark on a private solar-powered boat to Marathonisi turtle sanctuary. Snorkel through the glowing turquoise Keri limestone arches and sea caves.',
          highlight: 'Swimming with Wild Sea Turtles',
        },
        {
          day: 3,
          title: 'Navagio Shipwreck Sail & Local Wineries',
          timeSlot: 'Day 3 • High Seas & Vineyards',
          description:
            'Panoramic catamaran cruise beneath the colossal 200m white cliffs of Shipwreck Beach, followed by an artisanal Robola vineyard tasting.',
          highlight: 'Navagio Beach Catamaran Charter',
        },
        {
          day: 4,
          title: 'Bohali Castle Panoramic Farewell',
          timeSlot: 'Day 4 • Venetian Heritage',
          description:
            'Morning espresso amidst the pine-shaded ruins of Venetian Bohali Castle, taking in 360-degree views of Zakynthos town before private departure.',
          highlight: 'Panoramic Castle Vista',
        },
      ],
    },
  },
  {
    id: 'koh-phi-phi',
    title: 'Koh Phi Phi Don',
    subtitle: 'Islands, Thailand',
    badge: 'Andaman Archipelago',
    tag: 'Islands, Thailand',
    headlineMain: 'Emerald Lagoons &',
    headlineSub: 'Soaring Karsts',
    description:
      'Towering limestone karsts rising dramatically from jade-green waters. Glide across tranquil lagoons aboard handcrafted longtails, snorkel vibrant bioluminescent coral gardens, and unwind in clifftop sanctuaries.',
    image:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2400&auto=format&fit=crop',
    targetDestinationId: 'bali',
    isActive: false,
    itinerary: {
      duration: '5 Days',
      nights: '4 Nights',
      route: ['Phuket Pier', 'Laem Tong Bay', 'Maya Lagoon', 'Bamboo Island'],
      startingPrice: 1450,
      bestSeason: 'November – April',
      highlights: [
        'Private Sunrise Longtail',
        'Bioluminescent Night Dive',
        'Beachfront Pool Villa',
        'Thai Culinary Class',
      ],
      days: [
        {
          day: 1,
          title: 'Private Speedboat & Clifftop Check-in',
          timeSlot: 'Day 1 • Island Arrival',
          description:
            'Luxury speedboat transfer across the Andaman Sea to Laem Tong Beach. Welcome cocktails at your private cliffside infinity pool villa.',
          highlight: 'Private Speedboat Transfer',
        },
        {
          day: 2,
          title: 'Dawn Maya Bay & Pileh Lagoon',
          timeSlot: 'Day 2 • Emerald Waters',
          description:
            'Beat the crowds with a 6:00 AM private longtail charter into Maya Bay. Drift into Pileh Lagoon’s sheer limestone bowl for quiet emerald swims.',
          highlight: 'Exclusive Dawn Lagoon Charter',
        },
        {
          day: 3,
          title: 'Bamboo Island & Glowing Plankton',
          timeSlot: 'Day 3 • Coral & Starlight',
          description:
            'Snorkel outer reef bommies with sea turtles, followed by a twilight boat excursion to swim among sparkling bioluminescent waters.',
          highlight: 'Bioluminescent Night Snorkel',
        },
        {
          day: 4,
          title: 'Phi Phi Isthmus Viewpoint & Feast',
          timeSlot: 'Day 4 • Summit & Cuisine',
          description:
            'Hike to the iconic Viewpoint 3 overlooking the twin bays of Tonsai and Loh Dalum, followed by a private five-course Thai seafood banquet on the sand.',
          highlight: '360° Isthmus Vista',
        },
        {
          day: 5,
          title: 'Sunrise Yoga & Farewell Sail',
          timeSlot: 'Day 5 • Gentle Departure',
          description:
            'Open-air morning yoga overlooking the Andaman waves, tropical artisan breakfast, and chauffeured ocean crossing back to Phuket.',
          highlight: 'Cliffside Morning Yoga',
        },
      ],
    },
  },
  {
    id: 'vernazza',
    title: 'Vernazza',
    subtitle: 'Cinque Terre, Italy',
    badge: 'Ligurian Riviera',
    tag: 'Cinque Terre, Italy',
    headlineMain: 'Pastel Cliffs &',
    headlineSub: 'Coastal Romance',
    description:
      'Centuries of Italian heritage carved into sheer Ligurian cliffs. Wander labyrinthine cobbled alleys scented with lemon blossoms, sip chilled Sciacchetrà wine by the harbor, and sail past dramatic coastal promontories.',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2400&auto=format&fit=crop',
    targetDestinationId: 'amalfi',
    isActive: true, // Featured initial active bubble
    itinerary: {
      duration: '4 Days',
      nights: '3 Nights',
      route: ['Vernazza Harbor', 'Sentiero Azzurro', 'Castello Doria', 'Monterosso'],
      startingPrice: 1620,
      bestSeason: 'April – October',
      highlights: [
        'Private Sunset Gozzo Cruise',
        'Artisanal Pesto Masterclass',
        'Historic Watchtower Suite',
        'Sentiero Azzurro Pass',
      ],
      days: [
        {
          day: 1,
          title: 'Arrival by Sea & Harbor Welcome',
          timeSlot: 'Day 1 • Coastal Grandeur',
          description:
            'Private wooden boat arrival into Vernazza harbor. Settle into a restored 16th-century clifftop watchtower suite overlooking the waves.',
          highlight: 'Arrive in Harbor by Private Boat',
        },
        {
          day: 2,
          title: 'Sentiero Azzurro Cliff Hike & Pesto',
          timeSlot: 'Day 2 • High Trails',
          description:
            'Guided morning hike through terraced vineyards along Sentiero Azzurro to Monterosso, followed by a private mortared pesto making workshop.',
          highlight: 'Terraced Vineyard Cliff Trek',
        },
        {
          day: 3,
          title: 'Sunset Gozzo Sail Across the 5 Lands',
          timeSlot: 'Day 3 • Maritime Sunset',
          description:
            'Charter a classic mahogany Gozzo boat to glide beneath Corniglia and Manarola, accompanied by local Cinque Terre DOC wines and focaccia.',
          highlight: '5 Villages Sunset Cruise',
        },
        {
          day: 4,
          title: 'Castello Doria Watchtower & Departure',
          timeSlot: 'Day 4 • Italian Farewell',
          description:
            'Private dawn access to Castello Doria tower for espresso above the waking village before the panoramic coastal train departure.',
          highlight: 'Doria Tower Dawn Espresso',
        },
      ],
    },
  },
  {
    id: 'grand-canal',
    title: 'Grand Canal',
    subtitle: 'Venice, Italy',
    badge: 'Serene Lagoon',
    tag: 'Venice, Italy',
    headlineMain: 'Timeless Palazzos &',
    headlineSub: 'Floating Dreams',
    description:
      'Glide past Byzantine and Gothic marble facades mirrored in tranquil waters. Experience private dawn gondola passages, after-hours museum entries, and secluded island artisan workshops across the Venetian lagoon.',
    image:
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=800&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2400&auto=format&fit=crop',
    targetDestinationId: 'amalfi',
    isActive: false,
    itinerary: {
      duration: '4 Days',
      nights: '3 Nights',
      route: ['Grand Canal', 'Doge’s Palace', 'Murano Ateliers', 'Burano Lagoon'],
      startingPrice: 1850,
      bestSeason: 'March – June & Sept – Nov',
      highlights: [
        'Mahogany Water Taxi',
        'After-Hours Doge’s Secret Rooms',
        'Private Murano Glass Master',
        'Grand Canal Balcony Suite',
      ],
      days: [
        {
          day: 1,
          title: 'Mahogany Water Taxi & Palazzo Check-in',
          timeSlot: 'Day 1 • Aristocratic Arrival',
          description:
            'Private wooden Riva water taxi from airport to your Grand Canal Palazzo suite. Twilight Bellini on the private canal-side balcony.',
          highlight: 'Private Mahogany Water Taxi',
        },
        {
          day: 2,
          title: 'Silent Dawn Gondola & Doge’s Palace',
          timeSlot: 'Day 2 • Hidden Venice',
          description:
            'Private gondola ride through misty secret back canals at sunrise, followed by VIP after-hours access to the Doge’s Palace secret archives.',
          highlight: 'Sunrise Gondola Through Quiet Canals',
        },
        {
          day: 3,
          title: 'Murano Master Glass & Burano Colors',
          timeSlot: 'Day 3 • Lagoon Artisans',
          description:
            'Private lagoon boat to an exclusive closed-door Murano glassblower studio, followed by lunch on the rainbow-hued island of Burano.',
          highlight: 'Private Maestro Glassblowing Session',
        },
        {
          day: 4,
          title: 'Teatro La Fenice & Gourmet Cicchetti',
          timeSlot: 'Day 4 • Venetian Epilogue',
          description:
            'Curated tour of La Fenice opera house followed by a guided culinary journey through Cannaregio’s traditional bacari wine bars.',
          highlight: 'Historic Bacari Food Tour',
        },
      ],
    },
  },
  {
    id: 'amalfi-coast',
    title: 'Amalfi Coast',
    subtitle: 'Amalfi, Italy',
    badge: 'Mediterranean Elegance',
    tag: 'Campania, Italy',
    headlineMain: 'Dramatic Cliffs &',
    headlineSub: 'Golden Horizons',
    description:
      'Spectacular vertical towns clinging to sun-drenched coastal rock above the azure Tyrrhenian Sea. Cruise to Capri on private yachts, savor chilled limoncello on Positano terraces, and walk ancient paths above the clouds.',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
    heroImage:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2400&auto=format&fit=crop',
    targetDestinationId: 'amalfi',
    isActive: false,
    itinerary: {
      duration: '5 Days',
      nights: '4 Nights',
      route: ['Positano', 'Capri & Faraglioni', 'Ravello Gardens', 'Path of the Gods'],
      startingPrice: 1980,
      bestSeason: 'May – September',
      highlights: [
        'Private Riva Yacht to Capri',
        'Villa Cimbrone Infinity Terrace',
        'Michelin Star Cliffside Dinner',
        'Luxury Positano Villa',
      ],
      days: [
        {
          day: 1,
          title: 'Chauffeured Coastal Drive to Positano',
          timeSlot: 'Day 1 • La Dolce Vita',
          description:
            'Private scenic Mercedes drive along the cliffside corniche to Positano. Welcome prosecco and organic lemon pastries on your cliffside terrace.',
          highlight: 'Panoramic Positano Check-in',
        },
        {
          day: 2,
          title: 'Capri Yacht Charter & Faraglioni Sea',
          timeSlot: 'Day 2 • Isle of Capri',
          description:
            'Full-day private Italian yacht cruise around Capri, swimming through the Green and White Grottos with lunch at a seaside cove.',
          highlight: 'Private Capri Island Yacht Cruise',
        },
        {
          day: 3,
          title: 'Ravello Infinity Gardens & Music',
          timeSlot: 'Day 3 • Above the Clouds',
          description:
            'Ascend into tranquil Ravello to wander the legendary infinity terrace of Villa Cimbrone, followed by an evening classical concert.',
          highlight: 'Villa Cimbrone Infinity Terrace',
        },
        {
          day: 4,
          title: 'Path of the Gods Ridge Hike & Vineyard',
          timeSlot: 'Day 4 • Celestial Trails',
          description:
            'Panoramic clifftop trek along the famed Sentiero degli Dei with sweeping sea views, culminating in an organic vineyard lunch in Furore.',
          highlight: 'Sentiero degli Dei Ridge Hike',
        },
        {
          day: 5,
          title: 'Amalfi Duomo & Coastal Farewell',
          timeSlot: 'Day 5 • Mediterranean Farewell',
          description:
            'Stroll through Amalfi’s 9th-century Arab-Norman cathedral plaza, artisan ceramics shopping, and private departure transfer.',
          highlight: 'Historic Cathedral & Seaside Lunch',
        },
      ],
    },
  },
];

export const HERO_SECTION_DATA = {
  exploreButtonText: 'Explore Destinations',
  itineraryButtonPrefix: 'View',
  itineraryButtonSuffix: 'Itinerary',
  scrollPromptText: 'Scroll to explore',
  footerExpeditionText: 'Cinematic Expeditions 2026',
  mobilePreviewLabel: 'Tap Bubbles to Preview',
  mobileSwipePrompt: 'Swipe to explore →',
  bubbles: FLOATING_DESTINATIONS,
};

// -------------------------------------------------------------------------
// 4. DESTINATIONS SECTION (BENTO GRID & UNLISTED RETREAT BANNER)
// -------------------------------------------------------------------------
export const DESTINATIONS: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    location: 'Cyclades',
    country: 'Greece',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1400&auto=format&fit=crop',
    category: 'coastal',
    categoryLabel: 'Coastal Sanctuary',
    tagline: 'Sun-drenched whitewashed cliffs suspended over the sapphire Aegean.',
    description:
      'Carved into dramatic volcanic caldera cliffs, Santorini blends world-class culinary excellence, private infinity plunge pools, and the Mediterranean’s most evocative golden-hour sunsets.',
    highlights: [
      'Sunset catamaran sail around Oia',
      'Private volcanic caldera wine tasting',
      'Secluded black sand beaches in Perissa',
      'Cliffside cliff walk to Fira',
    ],
    bestTimeToVisit: 'May – October',
    recommendedDuration: '5 – 7 Days',
    averageRating: 4.96,
    startingPrice: 1299,
    gridSpan: 'wide',
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    location: 'Kansai Region',
    country: 'Japan',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    category: 'cultural',
    categoryLabel: 'Timeless Heritage',
    tagline: 'Ancient cedar bamboo groves, contemplative Zen gardens, and quiet tea pavilions.',
    description:
      'Immerse yourself in centuries of preserved artisanal mastery. Wander historic Gion cobblestones at dusk, experience private chanoyu tea ceremonies, and reside in authentic luxury ryokans.',
    highlights: [
      'Early morning Arashiyama bamboo path',
      'Exclusive Kaiseki dinner in Gion',
      'Kinkaku-ji golden pavilion reflection',
      'Fushimi Inari dawn shrine hike',
    ],
    bestTimeToVisit: 'March – May & Oct – Nov',
    recommendedDuration: '4 – 6 Days',
    averageRating: 4.94,
    startingPrice: 2299,
    gridSpan: 'normal',
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    location: 'Bernese Oberland',
    country: 'Switzerland',
    image:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    category: 'alpine',
    categoryLabel: 'Alpine Majesty',
    tagline: 'Jagged snow-crowned summits mirrored in glacier-fed emerald lakes.',
    description:
      'Experience alpine tranquility at its most elevated. Ride vintage cogwheel trains through Lauterbrunnen waterfalls, hike pristine meadows under the Eiger, and unwind in thermal mineral baths.',
    highlights: [
      'Glacier Express panoramic rail journey',
      'Matterhorn sunrise vista from Zermatt',
      'Private chalet with panoramic terrace',
      'St. Moritz alpine wellness retreats',
    ],
    bestTimeToVisit: 'June – Sept & Dec – March',
    recommendedDuration: '7 – 10 Days',
    averageRating: 4.98,
    startingPrice: 1899,
    gridSpan: 'normal',
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Ubud & Uluwatu',
    country: 'Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    category: 'island',
    categoryLabel: 'Tropical Haven',
    tagline: 'Tiered emerald rice terraces, cliffside ocean temples, and sacred stillness.',
    description:
      'Discover the island of healing and spiritual wonder. From mist-shrouded jungle river suites in Ubud to clifftop oceanfront pavilions overlooking the Indian Ocean surf breaks in Uluwatu.',
    highlights: [
      'Sunrise yoga above Tegallalang terraces',
      'Private speedboat to Nusa Penida',
      'Holistic Ayurvedic spa therapies',
      'Sunset seafood feast on Jimbaran beach',
    ],
    bestTimeToVisit: 'April – October',
    recommendedDuration: '8 – 12 Days',
    averageRating: 4.91,
    startingPrice: 1450,
    gridSpan: 'normal',
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    location: 'Campania',
    country: 'Italy',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1400&auto=format&fit=crop',
    category: 'coastal',
    categoryLabel: 'Mediterranean Elegance',
    tagline: 'Pastel cliff villages tumbling toward crystalline turquoise coves.',
    description:
      'Few coastlines match the dramatic grandeur of the Amalfi drive. Savor chilled limoncello on sun-drenched Positano verandas, charter vintage wooden Gozzo boats to Capri, and walk the Path of the Gods.',
    highlights: [
      'Capri private boat charter & Blue Grotto',
      'Ravello cliffside gardens at Villa Cimbrone',
      'Michelin-starred seaside dining in Positano',
      'Artisanal ceramics workshop in Vietri',
    ],
    bestTimeToVisit: 'May – September',
    recommendedDuration: '6 – 8 Days',
    averageRating: 4.97,
    startingPrice: 1499,
    gridSpan: 'wide',
  },
  {
    id: 'banff',
    name: 'Banff',
    location: 'Canadian Rockies',
    country: 'Canada',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    category: 'alpine',
    categoryLabel: 'Pristine Wilderness',
    tagline: 'Vibrant turquoise glacial waters framed by soaring limestone peaks.',
    description:
      'Where true wilderness meets sublime luxury. Paddle red canoes on Lake Louise before dawn, traverse the Icefields Parkway alongside roaming elk, and soak in historic mineral hot springs beneath snowcaps.',
    highlights: [
      'Canoeing Lake Louise at first light',
      'Icefields Parkway Columbia Glacier walk',
      'Helicopter tour over Assiniboine',
      'Stargazing in Jasper Dark Sky preserve',
    ],
    bestTimeToVisit: 'June – September & Dec – April',
    recommendedDuration: '5 – 8 Days',
    averageRating: 4.95,
    startingPrice: 1650,
    gridSpan: 'normal',
  },
];

export const DESTINATIONS_SECTION_DATA = {
  badge: 'Curated Portfolios',
  titleMain: 'Where Will You',
  titleSub: 'Go Next?',
  description:
    'From hidden islands to iconic cities, discover places worth remembering. Handpicked escapes tailored for discerning wanderers.',
  filterOptions: [
    { id: 'all', label: 'All Destinations' },
    { id: 'coastal', label: 'Coastal & Islands' },
    { id: 'alpine', label: 'Alpine Summits' },
    { id: 'cultural', label: 'Cultural Cities' },
  ],
  unlistedBanner: {
    title: 'Seeking an unlisted private retreat?',
    description:
      'Our travel architects arrange private islands, chartered yachts, and unlisted historic villas upon request.',
    buttonText: 'Bespoke Request',
  },
  items: DESTINATIONS,
};

// -------------------------------------------------------------------------
// 5. FEATURED EXPERIENCES SECTION
// -------------------------------------------------------------------------
export const FEATURED_EXPERIENCES: TravelExperience[] = [
  {
    id: 'island-escapes',
    title: 'Island Escapes',
    tagline: 'Private beaches, crystal-clear waters and slow mornings.',
    description:
      'Awaken to the rhythmic cadence of turquoise waters lapping against private stilts. Spend afternoons drifting between secluded sandbars and evenings savoring locally caught seafood under starlit skies.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    accent: '#82C3D2',
    features: [
      'Private yacht day charters to uninhabited atolls',
      'Overwater villa sanctuaries with private plunge pools',
      'Sunset wine tastings with indigenous sommeliers',
    ],
    stats: [
      { label: 'Destinations', value: '18+' },
      { label: 'Private Islands', value: '12' },
      { label: 'Guest Satisfaction', value: '99.4%' },
    ],
  },
  {
    id: 'mountain-adventures',
    title: 'Mountain Adventures',
    tagline: 'Wild landscapes, scenic trails and unforgettable views.',
    description:
      'Ascend beyond the tree line where crisp thin air meets endless horizons. Whether trekking high alpine ridges or gazing out from fireside chalets, find unmatched clarity in nature’s greatest monuments.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    accent: '#D9C7A2',
    features: [
      'Certified mountain UIAGM guides on every trail',
      'Helicopter transfers to remote alpine retreats',
      'Fireside tasting menus pairing mountain botanicals',
    ],
    stats: [
      { label: 'Elevation Peaks', value: '4,000m+' },
      { label: 'Curated Trails', value: '45' },
      { label: 'Guided Safaris', value: '100%' },
    ],
  },
  {
    id: 'european-getaways',
    title: 'European Getaways',
    tagline: 'Culture, architecture, food and timeless cities.',
    description:
      'Wander grand boulevards and quiet medieval alleys where history breathes through stone arches. Access after-hours museum tours, private vineyard cellars, and boutique hotels steeped in legacy.',
    image:
      'https://images.unsplash.com/photo-1520939817895-060bdef4dc1a?q=80&w=1600&auto=format&fit=crop',
    accent: '#E0A899',
    features: [
      'Exclusive private access to historic palaces & vaults',
      'Curated dining at family-run Michelin secret tables',
      'Dedicated personal concierge and chauffeured transport',
    ],
    stats: [
      { label: 'Historic Cities', value: '24' },
      { label: 'Michelin Partners', value: '60+' },
      { label: 'VIP Privileges', value: 'Unlimited' },
    ],
  },
];

export const EXPERIENCES_SECTION_DATA = {
  badge: 'Storytelling Journeys',
  titleMain: 'Journeys Designed',
  titleSub: 'Around You',
  description:
    'Travel is not merely about reaching a destination—it is how the voyage reshapes your perspective.',
  featuredCollectionLabel: 'Featured Collection',
  planButtonText: 'Plan This Experience',
  items: FEATURED_EXPERIENCES,
};

// -------------------------------------------------------------------------
// 6. TRAVEL PACKAGES SECTION
// -------------------------------------------------------------------------
export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: 'greek-island-escape',
    title: 'Greek Island Escape',
    duration: '7 Days',
    destination: 'Santorini & Mykonos',
    country: 'Greece',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
    description:
      'Drift between sun-drenched Cycladic isles aboard luxury catamarans, staying in boutique cliffside suites overlooking caldera blues.',
    rating: 4.95,
    reviewsCount: 128,
    badge: 'Popular Choice',
    included: [
      '6 nights in luxury caldera suites',
      'Private sunset catamaran cruise with dinner',
      'Daily artisan breakfasts and wine tastings',
      'All high-speed inter-island ferry transfers',
    ],
  },
  {
    id: 'swiss-alpine-journey',
    title: 'Swiss Alpine Journey',
    duration: '8 Days',
    destination: 'Zermatt & Lauterbrunnen',
    country: 'Switzerland',
    price: 1899,
    image:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
    description:
      'Traverse snow-capped passes on the Glacier Express, stay in high-altitude luxury chalets, and rejuvenate in thermal alpine spas.',
    rating: 4.98,
    reviewsCount: 94,
    badge: 'Featured Route',
    included: [
      '7 nights in premier 5-star mountain chalets',
      'First-class Glacier Express scenic train pass',
      'Private guided Matterhorn viewpoint trek',
      'Thermal bath access in Leukerbad and Zermatt',
    ],
  },
  {
    id: 'japanese-discovery',
    title: 'Japanese Discovery',
    duration: '10 Days',
    destination: 'Tokyo, Kyoto & Hakone',
    country: 'Japan',
    price: 2299,
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
    description:
      'A seamless journey from Tokyo’s neon modernism to Kyoto’s serene moss temples and Hakone’s secluded Mount Fuji hot-spring onsens.',
    rating: 4.97,
    reviewsCount: 156,
    badge: 'Cultural Masterpiece',
    included: [
      '9 nights in luxury hotels and traditional Ryokan',
      'Shinkansen bullet train green-car passes',
      'Private chanoyu tea ceremony & Kaiseki dinners',
      'Bilingual private cultural guide throughout',
    ],
  },
  {
    id: 'amalfi-summer',
    title: 'Amalfi Summer',
    duration: '6 Days',
    destination: 'Positano, Capri & Ravello',
    country: 'Italy',
    price: 1499,
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
    description:
      'Live la dolce vita along Italy’s most cinematic coastal drive, chartering private wooden Gozzo yachts to secluded grottos.',
    rating: 4.93,
    reviewsCount: 88,
    badge: 'Best Seller',
    included: [
      '5 nights in panoramic cliffside Positano hotel',
      'Private day charter to Capri & Blue Grotto',
      'Guided culinary walking tour in Sorrento',
      'Chauffeured Mercedes transfers along the coast',
    ],
  },
];

export const PACKAGES_SECTION_DATA = {
  badge: 'Tailored Expeditions',
  titleMain: 'Find Your',
  titleSub: 'Perfect Escape',
  description:
    'Complete boutique itineraries with private transfers, 5-star handpicked sanctuaries, and insider cultural privileges included.',
  customItineraryButtonText: 'Request Custom Itinerary',
  items: TRAVEL_PACKAGES,
};

// -------------------------------------------------------------------------
// 7. WHY WANDERLY (BENEFITS & VALUES) SECTION
// -------------------------------------------------------------------------
export const BRAND_BENEFITS: BrandBenefit[] = [
  {
    number: '01',
    title: 'Curated Journeys',
    description:
      'Carefully selected destinations and experiences designed by travel architects who seek rare beauty.',
    iconName: 'Compass',
  },
  {
    number: '02',
    title: 'Local Expertise',
    description:
      'Travel insights, hidden addresses, and cultural access from trusted residents who know each destination intimately.',
    iconName: 'ShieldCheck',
  },
  {
    number: '03',
    title: 'Flexible Planning',
    description:
      'Trips designed around your preferences with bespoke modifications, private dates, and stress-free flexibility.',
    iconName: 'Sliders',
  },
  {
    number: '04',
    title: '24/7 Support',
    description:
      'We’re with you before, during and after your journey. Dedicated personal concierges ready across time zones.',
    iconName: 'Headphones',
  },
];

export const WHY_US_SECTION_DATA = {
  badge: 'The Wanderly Standard',
  titleMain: 'Travel With',
  titleSub: 'Confidence',
  description:
    'We reject mass tourism in favor of deep immersion, authentic connections, and effortless bespoke precision.',
  items: BRAND_BENEFITS,
};

// -------------------------------------------------------------------------
// 8. STORIES & TRAVEL JOURNAL SECTION
// -------------------------------------------------------------------------
export const TRAVEL_STORIES: TravelStory[] = [
  {
    id: 'hidden-places-europe',
    title: '5 Hidden Places in Europe You Should See',
    excerpt:
      'Beyond crowded capitals lie forgotten fishing villages, mist-laden pine valleys, and coastal sanctuaries untouched by mass tourism.',
    readTime: '6 min read',
    category: 'Hidden Gems',
    author: 'Elena Rostova',
    date: 'Sep 12, 2026',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'art-of-slow-travel',
    title: 'The Art of Slow Travel',
    excerpt:
      'Why lingering in a single village for two weeks offers richer memories than sprinting across four countries in seven days.',
    readTime: '8 min read',
    category: 'Philosophy',
    author: 'Marcus Vance',
    date: 'Aug 29, 2026',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'plan-island-escape',
    title: 'How to Plan Your Perfect Island Escape',
    excerpt:
      'A seasoned traveler’s guide to selecting the right tides, balancing secluded relaxation with local culture, and choosing boutique stays.',
    readTime: '5 min read',
    category: 'Travel Guide',
    author: 'Chloe Laurent',
    date: 'Aug 14, 2026',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop',
  },
];

export const STORIES_SECTION_DATA = {
  badge: 'The Wanderly Journal',
  titleMain: 'Stories From',
  titleSub: 'The Road',
  description:
    'Perspectives, cultural guides, and quiet essays gathered from trails, isles, and ancient towns across the globe.',
  sideLabel: 'Curated Dispatches',
  items: TRAVEL_STORIES,
};

// -------------------------------------------------------------------------
// 9. CALL TO ACTION (CTA) SECTION
// -------------------------------------------------------------------------
export const CTA_SECTION_DATA = {
  badge: 'Begin Your Bespoke Voyage',
  titleMain: 'Your Next Adventure',
  titleSub: 'Is Waiting.',
  description:
    'Tell us where you want to go. We’ll help you turn the idea into an unforgettable journey.',
  image:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop',
  primaryButtonText: 'Start Planning',
  secondaryButtonText: 'Browse All Destinations',
};

// -------------------------------------------------------------------------
// 10. FOOTER & CONTACT DESK
// -------------------------------------------------------------------------
export const FOOTER_DATA = {
  brandName: 'Wanderly',
  brandSuffix: '.',
  tagline: 'Travel beyond the ordinary.',
  description:
    'Crafting bespoke global expeditions, secluded island escapes, and private alpine journeys for thoughtful wanderers worldwide.',
  navTitle: 'Explore Wanderly',
  contactTitle: 'Private Desk',
  email: 'hello@wanderly.travel',
  phone: '+1 800 123 4567',
  hours: 'Monday — Sunday\n24-Hour VIP Concierge',
  newsletterTitle: 'The Wanderly Dispatch',
  newsletterDescription:
    'Quarterly private dispatches featuring unlisted destinations, seasonal access, and travel essays. No spam, ever.',
  newsletterPlaceholder: 'Enter your email address',
  newsletterButtonText: 'Join',
  newsletterSuccessText: 'Thank you for joining our private circle. Welcome to Wanderly.',
  copyrightText: '© 2026 Wanderly Expeditions Ltd. All rights reserved.',
  legalLinks: [
    { label: 'Privacy Policy', href: '#footer' },
    { label: 'Terms of Service', href: '#footer' },
    { label: 'Cookie Preferences', href: '#footer' },
  ],
  socialLinks: [
    { platform: 'Instagram', href: '#footer' },
    { platform: 'Facebook', href: '#footer' },
    { platform: 'YouTube', href: '#footer' },
  ],
};

// -------------------------------------------------------------------------
// 11. TRIP PLANNING MODAL DATA
// -------------------------------------------------------------------------
export const PLAN_MODAL_DATA = {
  badge: 'Bespoke Travel Inquiry',
  title: 'Design Your Custom Journey',
  subtitle:
    'Share your vision with our private travel architects. We will curate a bespoke proposal within 24 hours.',
  travelStyleOptions: [
    'Coastal Sanctuary',
    'Alpine Majesty',
    'Cultural Heritage',
    'Tropical Haven',
    'Culinary & Wine Safari',
    'Active Trekking & Expedition',
  ],
  monthOptions: [
    'May 2026',
    'June 2026',
    'July 2026',
    'August 2026',
    'September 2026',
    'October 2026',
    'Flexible Dates',
  ],
  travelerOptions: ['1 Solo Traveler', '2 Travelers (Couple)', '3-4 Small Group', '5+ Family / Private Party'],
  submitButtonText: 'Submit Private Inquiry',
  successTitle: 'Inquiry Received with Pleasure',
  successMessage:
    'One of our lead travel architects will review your preferences and contact you within 24 hours with a personalized proposal.',
  guaranteeText: 'All inquiries handled with strict privacy. No obligation.',
};

// -------------------------------------------------------------------------
// 12. MASTER AGGREGATED EXPORT
// -------------------------------------------------------------------------
export const SITE_CONTENT = {
  brand: SITE_CONFIG,
  navigation: NAV_DATA,
  hero: HERO_SECTION_DATA,
  destinations: DESTINATIONS_SECTION_DATA,
  experiences: EXPERIENCES_SECTION_DATA,
  packages: PACKAGES_SECTION_DATA,
  whyUs: WHY_US_SECTION_DATA,
  stories: STORIES_SECTION_DATA,
  cta: CTA_SECTION_DATA,
  footer: FOOTER_DATA,
  planModal: PLAN_MODAL_DATA,
};
