export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Destinations",
    href: "/destinations",
    dropdown: [
      { label: "Thailand", href: "/destinations/thailand" },
      { label: "Singapore", href: "/destinations/singapore" },
      { label: "Malaysia", href: "/destinations/malaysia" },
      { label: "More", href: "/destinations" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact", isButton: true },
];

export const business = {
  name: "Malee Hospitality",
  logo: "/logo.svg",
  officeAddress:
    "02nd Floor, Next To Chamnan Phenjati Business Centre, Rama IX Rd, Huai Khwang, Bangkok 10310",
  phones: {
    thailand: "+66 63 836 0210",
    india: "+91 80776 05404",
  },
  emails: ["Ops@maleehospitality.asia", "Delops2@maleehospitality.asia"],
  website: "www.maleehospitality.asia",
  whatsapp: "918077605404",
  socials: {
    facebook: "https://www.facebook.com/malee.hospitality.7/",
    instagram: "https://www.instagram.com/maleehospitality_/",
    linkedin: "https://in.linkedin.com/company/malee-hospitality-dmc",
    pinterest: "https://in.pinterest.com/maleehospitalityofficial/",
  },
  googleReviewUrl: "https://maps.app.goo.gl/WV6Yzzr171Yu3ysLA",
};

export const legacyStats = [
  { target: 20000, label: "Happy Guests", icon: "guests" },
  { target: 18, label: "Years of Experience", icon: "calendar" },
  { target: 3000, label: "Tours Completed", icon: "briefcase" },
  { target: 30, label: "Tour Destinations", icon: "pin" },
  { target: 40, label: "Tour Leaders", icon: "flag" },
];

export const reviews = [
  {
    initial: "S",
    avatarClass: "avatar-l",
    name: "Sarvesh Gupta",
    date: "1 Year ago",
    text: "Great trip planner. I enjoyed a lot in my vacation…it's my 3rd trip with Malee hospitality, thanks to Malee and specially Ms Simran who did all the efforts to make my Singapore family vacation best. Their pricing is best always as I compare with many known travel agency before finalise. On time and quick response throughout journey, well taken care.",
    link: "https://maps.app.goo.gl/LqKE5gYc9Sbikj1N6",
  },
  {
    initial: "A",
    avatarClass: "avatar-k",
    name: "Dr Aparna Sharma",
    date: "6 Months ago",
    text: "Incredible Phuket and Krabi trip organised by Malee....everything nd every minute was pre planned....they looked after us, took care of our needs and supported each nd every member of the group...Special thanks goes to Mr Harsh Wardhan...never seen a trip advisor and guide like him before though we are frequent travellers and have travelled around the world...i convey my sincere thanks to Thai group managers too (JoyJoy nd others) extremely helpful, jovious and best coordinators I should say...thanks once again nd would like to travel more countries with you",
    link: "https://maps.app.goo.gl/hadLAMs7BDKHaM8z7",
  },
  {
    initial: "A",
    avatarClass: "avatar-k",
    name: "Ajeet Kumar Jain",
    date: "2 Months ago",
    text: "It was amazing they are very cooperative & each every thing they have done completely as per given itinerary make's lots of fun with good memories.",
    link: "https://maps.app.goo.gl/8RiCoFJPRueSk5657",
  },
  {
    initial: "J",
    avatarClass: "avatar-k",
    name: "Jyoti verma",
    date: "3 months ago",
    text: "The first time with this tours really safe with the driver my next trip will be booked again",
    link: "https://maps.app.goo.gl/hadLAMs7BDKHaM8z7",
  },
  {
    initial: "V",
    avatarClass: "avatar-s",
    name: "Vikas Gandhi",
    date: "9 months ago",
    text: "Excellent coordination and great hospitality.  Keep it up...",
    link: "https://maps.app.goo.gl/8MMzzP4ELd62MuU7A",
  },
];

export const faqs = [
  {
    q: "Do you offer customized tour packages?",
    a: "Yes, we create personalized itineraries based on your budget, destination, and travel preferences.",
  },
  {
    q: "Do you provide visa assistance?",
    a: "Absolutely. Our team guides you through documentation and visa requirements for supported destinations.",
  },
  {
    q: "Can you arrange hotel and flight bookings?",
    a: "Yes, we provide complete travel solutions including hotels, flights, airport transfers, and sightseeing tours.",
  },
  {
    q: "What destinations do you specialize in?",
    a: "We specialize in Thailand, Singapore, Malaysia and other popular international holiday destinations.",
  },
  {
    q: "Do you offer group tour packages?",
    a: "Yes, we organize family trips, corporate tours, honeymoon packages, student groups, and customized group departures.",
  },
  {
    q: "Are your tour packages budget-friendly?",
    a: "We offer packages for every budget, from affordable holidays to luxury travel experiences with premium services.",
  },
  {
    q: "Can I make changes to my booking after confirmation?",
    a: "Yes, changes can be made depending on hotel, airline, and supplier policies. Our team will assist you throughout the process.",
  },
  {
    q: "How can I contact your support team during my trip?",
    a: "Our customer support team is available via phone, WhatsApp, and email to assist you during your journey.",
  },
];

export const footerLinks = {
  destinations: [
    { label: "Thailand", href: "/destinations/thailand" },
    { label: "Singapore", href: "/destinations/singapore" },
    { label: "Malaysia", href: "/destinations/malaysia" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Contact", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cancellation Policy", href: "/legal/cancellation-refund" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
};
