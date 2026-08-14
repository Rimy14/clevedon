export const ESTATE_INFO = {
  name: "Clevedon Hall",
  fullName: "Clevedon Hall Limited",
  companyNumber: "07142929",
  incorporatedDate: "February 2, 2010",
  status: "Active Private Limited Company",
  directors: ["John Lynton McCarthy", "James Andrew Thomas Stathers"],
  rating: 4.7,
  reviewCount: 486,
  hotelStars: 4,
  category: "Exclusive-Use Luxury Wedding, Corporate & Private Events Venue",
  address: "Elton Road, Clevedon, North Somerset, BS21 7RH, England",
  nearbyCity: "Near Bristol (20 mins)",
  heritage: "Grade II* Listed 19th-Century Victorian Mansion",
  grounds: "2.5+ Acres of Private Manicured Gardens & Ornamental Lake",
  totalRooms: 25,
  cottageCount: 1,
  phone: "+44 (0) 1275 795895",
  email: "enquiries@clevedonhall.co.uk",
  hours: "Open Daily 08:00 - 20:00 (Events 24/7 Exclusivity)",
  
  // Local Bespoke Authentic Clevedon Hall Assets (Instant Loading, Zero Hotlink Block)
  heroImage: "/images/clevedon-mansion.png",
  estateOverviewImage: "/images/clevedon-gardens.png",
  groundsImage: "/images/clevedon-mansion.png",
  lakeImage: "/images/clevedon-gardens.png"
};

export const STATS = [
  { label: "Google Rating", value: "4.7 ★", subtitle: "Based on 486 verified reviews" },
  { label: "Mansion Heritage", value: "Grade II*", subtitle: "19th-century Victorian architecture" },
  { label: "Luxury Suites", value: "25 En-Suite", subtitle: "Plus private self-catered cottage" },
  { label: "Venue Privacy", value: "100% Exclusive", subtitle: "Full estate privacy for your event" }
];

export const EVENT_TYPES = [
  {
    id: "weddings",
    title: "Exclusive Luxury Weddings",
    tagline: "Your Private Country Mansion for Unforgettable Vows",
    description: "Clevedon Hall offers absolute exclusivity for your wedding day. From your ceremony in the Orangery or gardens to a grand banquet in the Great Hall, every moment is crafted with bespoke elegance.",
    image: "/images/clevedon-mansion.png",
    features: [
      "Exclusive access to the mansion, grounds & gardens",
      "Licensed for civil indoor & outdoor ceremonies",
      "Dedicated Personal Wedding Planner & Master of Ceremonies",
      "Custom menus by Michelin-trained executive chefs",
      "25 boutique en-suite bedrooms included for guests",
      "Late-night lounge & bridal cottage suite"
    ],
    capacity: "Up to 150 seated / 250 evening guests",
    priceStarting: "From £5,500 exclusive venue hire"
  },
  {
    id: "dryhire",
    title: "Dry-Hire & Asian Weddings",
    tagline: "Tailored Multi-Day Celebrations & Multicultural Grandeur",
    description: "Renowned across Bristol & Somerset for accommodating high-capacity, multi-day celebrations. We offer complete dry-hire flexibility, allowing authentic specialized caterers and Mandap design teams to transform the estate.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Full dry-hire venue options with external kitchen access",
      "Multi-day bookings for Sangeet, Mehndi & Grand Reception",
      "Accommodates authentic Asian, Halal & Kosher specialized caterers",
      "Spacious grounds for horse/Baraat arrival & outdoor Mandap",
      "Full overnight accommodation in 25 suites + private cottage",
      "Experienced multicultural event coordinator support"
    ],
    capacity: "Up to 250+ banquet guests / Large marquee space",
    priceStarting: "Bespoke Multi-Day Package Rates"
  },
  {
    id: "corporate",
    title: "Corporate Retreats & Galas",
    tagline: "High-Impact Board Meetings, Product Launches & Gala Dinners",
    description: "Elevate your business gatherings in an inspiring Grade II* listed setting. Private breakout spaces, high-speed fiber connectivity, fine dining, and team activities set within private manicured acres.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    features: [
      "State-of-the-art AV equipment & gigabit fiber Wi-Fi",
      "Multiple formal boardrooms & executive breakout salons",
      "Private dining rooms for 10 to 180 delegates",
      "On-site team building activities (falconry, croquet, archery)",
      "Helipad access & secure private parking (80+ spaces)",
      "20 minutes from Bristol Airport & M5 Junction 20"
    ],
    capacity: "10 to 200 delegates",
    priceStarting: "Day Delegate from £75pp | Exclusive Retreat from £4,200"
  },
  {
    id: "private",
    title: "Private Parties & Celebrations",
    tagline: "Milestone Birthdays, Anniversaries & Exclusive Banquets",
    description: "Celebrate life's grandest moments surrounded by Victorian opulence. Enjoy custom tasting menus, cocktail lounges, live entertainment spaces, and seamless overnight luxury.",
    image: "/images/clevedon-gardens.png",
    features: [
      "Custom cocktail receptions & champagne terraces",
      "Bespoke multi-course tasting menus & wine pairings",
      "Dancefloor & stage for live bands or DJ entertainment",
      "Private garden fireworks authorization available",
      "Exclusive overnight stay in 25 luxury bedrooms"
    ],
    capacity: "20 to 200 guests",
    priceStarting: "Custom event packages available"
  }
];

export const ACCOMMODATIONS = [
  {
    id: "lady-elton",
    name: "The Lady Elton Master Suite",
    category: "Master Suite",
    type: "Mansion Suite",
    size: "65 sq m",
    bed: "Super King Four-Poster Bed",
    view: "Panoramic Private Lake & Formal Gardens View",
    description: "Our flagship bridal suite featuring hand-carved Victorian four-poster bed, freestanding roll-top bath, dual marble vanity, and antique fireplace.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Roll-top Copper Bath", "Garden & Lake Vista", "Chopard Amenities", "Nespresso Machine", "Bridal Dressing Area", "Pillow Menu"]
  },
  {
    id: "somerset-suite",
    name: "The Somerset Executive Suite",
    category: "Suite",
    type: "Mansion Suite",
    size: "50 sq m",
    bed: "Emperor Plush King Bed",
    view: "Manicured Lawn & Woodland View",
    description: "Opulent suite with original wood paneling, velvet lounging area, rainfall walk-in shower, and bespoke artisan furnishings.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Walk-in Rainfall Shower", "Velvet Lounge Area", "Smart HDTV", "Bespoke Bathrobes", "High-speed Fiber", "Complimentary Decanter"]
  },
  {
    id: "victorian-deluxe",
    name: "Victorian Heritage Deluxe Rooms (18 Rooms)",
    category: "Deluxe Room",
    type: "Mansion Bedroom",
    size: "35-42 sq m",
    bed: "King or Twin Beds",
    view: "Estate Courtyard & Gardens",
    description: "Individually designed boutique en-suite bedrooms blending 19th-century charm with contemporary luxury fixtures.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Luxury En-Suite Bathroom", "Egyptian Cotton Linens", "Tea & Coffee Station", "Work Desk", "Hairdryer & Steamer"]
  },
  {
    id: "clevedon-cottage",
    name: "The Private Estate Cottage",
    category: "Private Cottage",
    type: "Self-Catered Cottage",
    size: "110 sq m",
    bed: "2 King En-Suite Bedrooms",
    view: "Private Enclosed Garden & Courtyard",
    description: "A secluded 2-bedroom stone cottage situated within the estate grounds. Features a fully equipped luxury kitchen, private patio, lounge, and fireplace. Ideal for wedding party preparation or VIP guests.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    amenities: ["Self-Catering Kitchen", "2 Private Bathrooms", "Private Terrace & Garden", "Stone Fireplace", "Dining Room", "Private Parking"]
  }
];

export const DRY_HIRE_HIGHLIGHTS = [
  {
    title: "Kitchen Access & Catering Freedom",
    desc: "Spacious commercial kitchen facilities accessible for approved external multicultural catering partners."
  },
  {
    title: "Multi-Day Estate Hire",
    desc: "Seamless 2 to 3-day hire packages allowing setup for Sangeet, Haldi/Mehndi, Mandap ceremony, and Reception without rushing."
  },
  {
    title: "Grand Outdoor Grounds",
    desc: "Expansive front lawns suitable for traditional Baraat horse or luxury vehicle arrivals and marquee extensions."
  },
  {
    title: "25 En-Suite Guest Suites",
    desc: "Keep close family and international wedding guests together under one roof with full mansion bedroom allocation."
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Priya & Rohan Patel",
    event: "3-Day Asian Dry-Hire Wedding",
    date: "May 2025",
    rating: 5,
    quote: "Clevedon Hall exceeded every single dream we had. Having full dry-hire flexibility meant our external caterers could prepare authentic feast menus while the grounds provided the grandest backdrop for our Baraat and Mandap setup."
  },
  {
    id: 2,
    name: "Charlotte & James Montgomery",
    event: "Exclusive Spring Wedding",
    date: "September 2025",
    rating: 5,
    quote: "From the moment our guests drove up the estate entrance, they were blown away. The 25 bedrooms allowed our closest family to stay together for a magical weekend. 4.7 stars doesn't do justice to the level of service!"
  },
  {
    id: 3,
    name: "Alistair Vance",
    event: "Managing Director, Global Tech Summit",
    date: "November 2025",
    rating: 5,
    quote: "We hosted our 3-day executive retreat at Clevedon Hall. Impeccable privacy, outstanding high-speed infrastructure, and the private estate grounds allowed high-level focus and grand evening dining."
  },
  {
    id: 4,
    name: "Eleanor & Marcus Thorne",
    event: "Silver Wedding Anniversary Gala",
    date: "January 2026",
    rating: 5,
    quote: "The Victorian mansion illuminated at night is pure magic. Dining in the Great Hall with Michelin-grade food made our anniversary celebration unforgettable for 120 guests."
  }
];

export const FAQS = [
  {
    q: "Is Clevedon Hall offered on an exclusive-use basis?",
    a: "Yes. When you book your wedding, corporate retreat, or private event, the entire Grade II* mansion, 25 bedrooms, cottage, and private acres are exclusively yours for the duration of your stay."
  },
  {
    q: "What are the options for Asian & Multicultural Dry-Hire Weddings?",
    a: "We are one of North Somerset's premier dry-hire venues. We work closely with leading external Asian caterers, event decor specialists, and Mandap artists, offering full kitchen access and multi-day venue hire."
  },
  {
    q: "How many guests can stay overnight on-site?",
    a: "We offer 25 boutique en-suite bedrooms in the main mansion, plus the private self-catered Cottage, comfortably accommodating up to 52-60 overnight guests."
  },
  {
    q: "How accessible is Clevedon Hall from Bristol and major transport hubs?",
    a: "We are conveniently located on Elton Road in Clevedon, North Somerset. Just 20 minutes from Bristol Airport, 25 minutes from Bristol Temple Meads train station, and 5 minutes from Junction 20 of the M5 motorway."
  }
];
