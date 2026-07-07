export const filterPills = [
  { label: "All Experiences", filter: "all" },
  { label: "✨ Honeymoon", filter: "honeymoon" },
  { label: "🏄 Adventure", filter: "adventure" },
  { label: "👨‍👩‍👧 Family Tours", filter: "family" },
  { label: "💼 Corporate", filter: "corporate" },
];

export const homePackages = [
  {
    category: "city-explore",
    image: "https://ik.imagekit.io/abiiiio/Bangkok%20City%20Tour.png",
    alt: "Ornate spires and golden roofs of the Grand Palace temple complex in Bangkok, Thailand",
    badgeCategory: "🇹🇭 Bangkok",
    title: "Bangkok City Exploration",
    description:
      "Discover the majestic Grand Palace, ride an iconic tuk-tuk through vibrant streets, shop at floating markets, and taste world-famous street food.",
    badge: "Best Seller",
  },
  {
    category: "city-break",
    image: "https://ik.imagekit.io/abiiiio/Malaysia%20Website%20images%20%20-%201920X1080.png",
    alt: "The iconic Petronas Twin Towers towering over the modern Kuala Lumpur skyline at dusk",
    badgeCategory: "🇲🇾 Kuala Lumpur",
    title: "Kuala Lumpur Escapes",
    description:
      "Explore the iconic Petronas Twin Towers, vibrant street food markets, historic Batu Caves, and world-class rooftop bars.",
    badge: "Trending",
  },
  {
    category: "corporate",
    image: "https://ik.imagekit.io/abiiiio/Malaysia%20Website%20images%20%20-%201920X1080.png",
    alt: "Traditional Thai longtail boat floating on crystal clear turquoise water with dramatic limestone cliffs in Phuket",
    badgeCategory: "🇹🇭 Phuket",
    title: "Phuket Paradise",
    description:
      "Relax on pristine white-sand beaches, cruise through the breathtaking Phi Phi Islands, and immerse yourself in vibrant night markets.",
    badge: "Trending",
  },
  {
    category: "honeymoon",
    image: "https://ik.imagekit.io/abiiiio/Langkawi%20Website%20images%20%20-%201920X1080.png",
    alt: "Scenic aerial view of tropical islands and turquoise ocean waters in Langkawi, Malaysia",
    badgeCategory: "🇲🇾 Langkawi",
    title: "Langkawi Island Retreat",
    description:
      "Discover the breathtaking Sky Bridge, cruise through lush coastal mangroves, and unwind on duty-free paradise beaches.",
    badge: "Trending",
  },
  {
    category: "honeymoon",
    image: "https://ik.imagekit.io/abiiiio/Hua%20Hin%20Thailand.png",
    alt: "Luxury beachfront resort swimming pool lined with palm trees overlooking the ocean in Hua Hin",
    badgeCategory: "🇹🇭 Hua Hin",
    title: "Hua Hin Getaways",
    description:
      "Experience a seamless blend of seaside relaxation, vibrant night markets, historic royal palaces, and premier golf courses.",
    badge: "Trending",
  },
  {
    category: "family",
    image: "https://ik.imagekit.io/abiiiio/Singapore%203%20Website%20images%20%20-%201920X1080%20px.png",
    alt: "Futuristic modern architectural structures of Marina Bay Sands skyline illuminated during sunset in Singapore",
    badgeCategory: "🇸🇬 Singapore",
    title: "Singapore Modernity",
    description:
      "Discover futuristic attractions, luxury shopping, theme parks, and world-famous experiences.",
    badge: "Family Favorite",
  },
];

export const heroSlides = [
  {
    image: "https://ik.imagekit.io/abiiiio/Thailand%20Website%20images%20%20-%201920X1080%20px.png",
    alt: "Beautiful temple in Thailand",
    tagline: "Welcome to Malee Hospitality",
    title: "Experience Thailand",
    subtitle:
      "Unforgettable journeys across exotic landscapes, ornate temples, and vibrant cities.",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Malaysia%20Website%20images%20%20-%201920X1080.png",
    alt: "Iconic Twin Towers in Malaysia",
    tagline: "Tailor-Made Dynamic Escapes",
    title: "Vibrant Malaysia",
    subtitle: "Traverse through lush rainforests, modern skyscrapers, and diverse cultural history.",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Singapore%202%20Website%20images%20%20-%201920X1080%20px.png",
    alt: "Iconic Twin Towers in Malaysia",
    tagline: "Bespoke Escapes",
    title: "Sophisticated Singapore Getaways",
    subtitle:
      "Experience iconic skylines, luxury shopping, and world-class dining in the heart of Southeast Asia.",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Bangkok%20Website%20images%20%20-%201920X1080.png",
    alt: "Luxury Bangkok Skyline and Riverside Views",
    tagline: "Luxury Urban Escapes",
    title: "Bangkok Exclusive Getaways",
    subtitle:
      "Discover world-class hotels, vibrant culture, exquisite dining, and unforgettable experiences in Thailand's dynamic capital.",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Singapore%202%20Website%20images%20%20-%201920X1080.png",
    alt: "Iconic Twin Towers in Malaysia",
    tagline: "Exclusive City Retreats",
    title: "Singapore Luxury Getaways",
    subtitle: "Experience sophisticated hotels, gourmet cuisine, and exceptional attractions tailored to your style.",
  },
  {
    image: "https://ik.imagekit.io/abiiiio/Langkawi%20Website%20images%20%20-%201920X1080.png",
    alt: "Tropical Villa Resort in Malaysia",
    tagline: "Exclusive Island Escapes",
    title: "Luxury Langkawi Experiences",
    subtitle: "From pristine beaches to world-class resorts, immerse yourself in Malaysia's tropical paradise.",
  },
];

/* ==========================================================================
   PACKAGES PAGE DATA (pages/packages.js)
   Ported from package.html — destination tabs + flyer cards per panel.
   ========================================================================== */

export const whatsappNumber = "918077605404";
export const whatsappLink = `https://wa.me/${whatsappNumber}`;

export const packageDestinationTabs = [
  { label: "All Packages", target: "all-packages" },
  { label: "Thailand", target: "thailand" },
  { label: "Singapore", target: "singapore" },
  { label: "Malaysia", target: "malaysia" },
  { label: "Combo Packages", target: "combos" },
];

// Flyer image filenames live in /public/images/<n>.png
const flyer = (file, badge, badgeClass) => ({
  image: `/images/${file}`,
  badge,
  badgeClass,
});

export const packageFlyers = {
  "all-packages": [
    flyer("1.png", "Active Package", "text-combo"),
    flyer("2.png", "Active Package", "text-thailand"),
    flyer("3.png", "Active Package", "text-thailand"),
    flyer("4.png", "Active Package", "text-thailand"),
    flyer("5.png", "Active Package", "text-thailand"),
    flyer("8.png", "Active Package", "text-thailand"),
    flyer("9.png", "Active Package", "text-thailand"),
    flyer("10.png", "Active Package", "text-singapore"),
    flyer("12.png", "Active Package", "text-singapore"),
  ],
  thailand: [
    flyer("2.png", "Thailand B2B", "text-thailand"),
    flyer("3.png", "Thailand B2B", "text-thailand"),
    flyer("4.png", "Thailand B2B", "text-thailand"),
    flyer("5.png", "Thailand B2B", "text-thailand"),
    flyer("8.png", "Thailand B2B", "text-thailand"),
    flyer("9.png", "Thailand B2B", "text-thailand"),
  ],
  singapore: [
    flyer("10.png", "Singapore Fixed", "text-singapore"),
    flyer("12.png", "Singapore Fixed", "text-singapore"),
    flyer("17.png", "Singapore Fixed", "text-singapore"),
    flyer("18.png", "Singapore Fixed", "text-singapore"),
    flyer("20.png", "Singapore Fixed", "text-singapore"),
  ],
  malaysia: [
    flyer("4.png", "Malaysia Land", "text-combo"),
    flyer("8.png", "Malaysia Land", "text-combo"),
    flyer("12.png", "Malaysia Land", "text-combo"),
  ],
  combos: [
    flyer("1.png", "Multi Nation", "text-combo"),
    flyer("22.png", "Multi Nation", "text-combo"),
    flyer("23.png", "Multi Nation", "text-combo"),
    flyer("27.png", "Multi Nation", "text-combo"),
    flyer("28.png", "Multi Nation", "text-combo"),
    flyer("31.png", "Multi Nation", "text-combo"),
    flyer("183.png", "Multi Nation", "text-combo"),
    flyer("185.png", "Multi Nation", "text-combo"),
  ],
};
