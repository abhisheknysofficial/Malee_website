import { faqs } from "@/data/siteData";

// Full FAQs page dataset (18 items total).
// The first 8 items are the same items used on the homepage (imported from
// siteData so both pages stay in sync), followed by the 10 additional items
// that only appear on the dedicated /faqs page in the original static site.
export const faqsFull = [
  ...faqs,
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank wire transfers, and secure online payment gateways. A detailed payment schedule and invoice will be provided upon itinerary approval.",
  },
  {
    q: "Is travel insurance included in your packages?",
    a: "Travel insurance is generally not included in our base packages to allow you flexibility, but we highly recommend purchasing comprehensive coverage. We can assist in adding this to your booking upon request.",
  },
  {
    q: "How far in advance should I book my trip?",
    a: "We recommend booking at least 45 to 60 days in advance for standard trips, and 3 to 4 months ahead for peak holiday seasons to secure the best availability and pricing.",
  },
  {
    q: "Do you cater to specific dietary requirements?",
    a: "Yes, we closely coordinate with our hotel partners, cruise operators, and local restaurants to accommodate specific dietary needs, including vegetarian, vegan, halal, and gluten-free requirements.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "Cancellations are subject to the policies of individual airlines, hotels, and local suppliers. Our overarching terms are clearly outlined in your booking agreement, and our team works diligently to maximize eligible refunds.",
  },
  {
    q: "Are the guided tours private or shared?",
    a: "We offer both completely private tours for exclusive experiences and Shared/Seat-In-Coach (SIC) options for more budget-conscious travelers. You can mix and match these based on your preference.",
  },
  {
    q: "Do you provide English-speaking guides?",
    a: "Yes, all of our packages include certified, fluent English-speaking local guides. Guides proficient in other languages can also be arranged with advanced notice.",
  },
  {
    q: "Can I book only ground services without flights?",
    a: "Absolutely. If you prefer to use your air miles or arrange your own international flights, we can provide seamless ground-only DMC packages covering your hotels, transfers, and sightseeing.",
  },
  {
    q: "What happens in case of a medical emergency during the trip?",
    a: "Our 24/7 on-ground support team and local destination coordinators are immediately available to assist with medical coordination, hospital transfers, and liaising with your travel insurance provider.",
  },
  {
    q: "Are there any hidden fees or taxes not included in the quote?",
    a: "Transparency is our core value. All standard taxes, tolls, and service charges are explicitly detailed in your initial quote, ensuring no surprise structural expenses during your travel.",
  },
];
