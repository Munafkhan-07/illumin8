// Data definitions for illumin8 Blinds & Curtains

export const BRAND_INFO = {
  name: "illumin8",
  tagline: "blinds & curtains",
  foundingYear: "1998",
  headline: "Sculpting Light, Defining Space",
  subheadline: "Handcrafted luxury curtains, precision blinds, and intelligent Somfy motorization tailored for architectural living.",
  description: "At illumin8, we consider natural light to be the most transformative material in interior architecture. For over two decades, our ateliers have united time-honored artisanal tailoring with cutting-edge optical engineering. Every sheer wave drape, tailored Roman fold, and precision-milled Fifty TM blind is bespoke-made to modulate privacy, daylight, and acoustic warmth with effortless sophistication.",
  stats: [
    { label: "Bespoke Installations", value: "85,000+" },
    { label: "Designer Fabrics", value: "3,200+" },
    { label: "Craftsmanship Guarantee", value: "10 Years" },
    { label: "Child Safe & Cordless", value: "100%" }
  ]
};

export const PRODUCTS = [
  {
    id: "curtains",
    title: "Curtains",
    subtitle: "Artisanal Drapes & Flowing Sheers",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Signature Craft",
    shortDesc: "Floor-to-ceiling drapes featuring wave heading, pencil pleats, French triple pleats, and thermal blackout linings tailored in pure Belgian linens and opulent velvets.",
    description: "Our bespoke curtains are mastercrafted in our specialized UK ateliers. From ethereal linen sheers that soften piercing midday glare into warm diffused radiance, to multi-layered velvet drapes with acoustic interlinings that lock in thermal energy, every panel is hand-weighted for immaculate cascade and fluid movement. Compatible with manual architectural track systems or whisper-quiet Somfy Glydea motorized rails.",
    features: [
      "Custom wave, pinch pleat, pencil pleat, and eyelet headings",
      "Choice of premium blackout, thermal fleece, or translucent voile linings",
      "Hand-finished double-fold bottom hems with discreet brass corner weights",
      "Seamless integration with Somfy Glydea Ultra motorized curtain tracks"
    ],
    specs: {
      lightControl: "Translucent to 100% Total Blackout",
      material: "Pure Belgian Linen, Bouclé, Cotton Velvet, Recycled Silk Weave",
      motorization: "Somfy Glydea Ultra RTS / Zigbee 3.0 / Apple Home",
      idealRooms: "Master Suites, Formal Drawing Rooms, High-Ceiling Lounges"
    },
    swatches: ["Champagne Bouclé", "Smoked Pearl Linen", "Midnight Velvet", "Raw Oatmeal Wool"]
  },
  {
    id: "roman-blinds",
    title: "Roman Blinds",
    subtitle: "Architectural Fabric Folds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Timeless Elegance",
    shortDesc: "Sculpted cascading or flat-fold roman shades crafted from rich woven textiles, finished with invisible stitching and precision sidewinder or motorized lift.",
    description: "illumin8 Roman Blinds combine the sumptuous warmth of drapes with the tailored minimalism of blinds. When raised, the horizontal fabric folds stack in disciplined, harmonious tiers; when lowered, they showcase the unbroken beauty of luxury jacquards, botanicals, and crisp linens. Hand-stitched without surface punctures to ensure optimal light blocking and immaculate drape retention.",
    features: [
      "Waterfall cascade or traditional flat front fold styles",
      "Interlined blackout options for complete bedroom light exclusion",
      "Silent gear-reduction chain mechanisms or rechargeable motorized lift",
      "Child-safe breakaway rear cord clips conforming to BS EN 13120"
    ],
    specs: {
      lightControl: "Gentle Filtered Glow to Deep Blackout",
      material: "Jacquard Weaves, Brushed Twills, Natural Linen-Cotton Blends",
      motorization: "Somfy Roll Up 28 WireFree Li-ion Rechargeable",
      idealRooms: "Dining Rooms, Master Bedrooms, Bay Windows, Home Libraries"
    },
    swatches: ["Sandstone Twill", "Heather Herringbone", "Chalk Voile", "Terracotta Weave"]
  },
  {
    id: "roller-blinds",
    title: "Roller Blinds",
    subtitle: "Modernist Precision & Solar Shading",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Minimalist Essential",
    shortDesc: "Sleek, ultra-clean aesthetic with engineered cassettes, solar screen fabrics, moisture-proof kitchen coatings, and high-performance sun-filtering weaves.",
    description: "Designed for contemporary open-plan spaces and expansive glass apertures, illumin8 Roller Blinds offer razor-sharp lines and flawless roll-up mechanics. Our technical solar screens reject up to 88% of solar heat gain while preserving external views without interior reflections. Available with powder-coated aluminum fascia cassettes that discreetly conceal the fabric roll.",
    features: [
      "Square or curved aluminum matching fascia cassettes with fabric insert",
      "Solar screen openness factors of 1%, 3%, 5%, and 10% for glare control",
      "Stain-resistant and water-repellent wipes-clean performance weaves",
      "Precision laser-cut edges preventing edge fraying for the lifetime of blind"
    ],
    specs: {
      lightControl: "Solar Screen (View-Through), Semi-Opaque, Thermal Blockout",
      material: "Anti-UV Woven Fiberglass, Polyester Blend, Metallised Backing",
      motorization: "Somfy Sonesse 30 WireFree RTS / TaHoma Zigbee",
      idealRooms: "Modern Kitchens, Home Offices, Bi-Fold Door Expanses, Bathrooms"
    },
    swatches: ["Optic White Solar 3%", "Charcoal Slate 1%", "Warm Greige", "Concrete Textured Weave"]
  },
  {
    id: "vertical-blinds",
    title: "Vertical Blinds",
    subtitle: "Architectural Light Regulation for Large Glazing",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Expansive Spans",
    shortDesc: "Reimagined with tactile architectural fabrics, chainless sewn-in weights, and 180-degree smooth tilt control engineered specifically for sliding and patio doors.",
    description: "We have elevated the vertical blind into a high-design architectural statement. Gone are flimsy PVC slats and tangled bottom chains. illumin8 Verticals feature 89mm or 127mm wide premium textured louvers with sealed ultrasonic bottom weights. They rotate through 180 degrees to guide directional daylight into your living spaces while preventing pedestrian sightlines from outside.",
    features: [
      "Chainless design with sealed sonic bottom weights for pristine pets & child safety",
      "Slimline architectural headrails in anodized matte black, brushed silver, or polar white",
      "Available in curved and sloping window configurations for gable-end glass",
      "Single draw, split center-opening, or motorized traversing options"
    ],
    specs: {
      lightControl: "180° Directional Rotation with Day/Night Tilt",
      material: "Textured Architectural Woven Fabrics, Jacquard Dimout, Flame Retardant",
      motorization: "Somfy Tilt & Lift Vertical System with Wand Touch Control",
      idealRooms: "Patio Glazing, Bifold Glass Walls, Glass Conservatories, Penthouse Studios"
    },
    swatches: ["Alabaster Textured Rib", "Onyx Modern Weave", "Misty Ash Louver", "Camelot Linen Vane"]
  },
  {
    id: "venetian-blinds",
    title: "Venetian Blinds",
    subtitle: "Pure Hardwood, Faux Wood & Brushed Aluminium",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Artisan Woodcraft",
    shortDesc: "Finely calibrated horizontal slats crafted from FSC-certified sustainable basswood, moisture-impervious faux wood, and architectural perforated aluminium.",
    description: "A testament to enduring design, illumin8 Venetian Blinds give you precise millimetric control over privacy and shadows. Our Basswood collection is milled from slow-grown northern hardwood, kiln-dried to eliminate warping, and finished with satin UV-inhibiting lacquers. Complement your slats with decorative herringbone cloth tapes for an opulent boutique hotel ambiance.",
    features: [
      "25mm, 35mm, and 50mm slat options with custom matching valance fascias",
      "Optional luxury woven cotton ladder tapes in 22 bespoke contrasting colors",
      "Privacy-slat routing without visible holes for superior light reduction",
      "100% moisture-resistant composite faux wood option engineered for humid wet rooms"
    ],
    specs: {
      lightControl: "Precision Angle Tilting with Full Privacy Lock",
      material: "FSC Northern Basswood, Faux Wood Poly-Resin, Anodized Aluminium",
      motorization: "Somfy Tilt-Only WireFree Motor with Telis 4 Remote",
      idealRooms: "Bathrooms, Kitchen Islands, Studies, Victorian Sash Windows"
    },
    swatches: ["Natural Smoked Oak", "Pure Gloss Cottonwood", "Matte Gunmetal Aluminium", "Distressed Walnut"]
  },
  {
    id: "fifty-tm-blinds",
    title: "Fifty TM Blinds",
    subtitle: "Signature 50mm Architectural Slat System",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    tag: "Proprietary Innovation",
    shortDesc: "Our flagship 50mm wide studio slat engineered with reinforced composite durability, whisper-light lift ratios, and contemporary low-profile headrails.",
    description: "The Fifty TM is illumin8’s crowning achievement in horizontal window mechanics. Designed specifically for contemporary interiors seeking bolder architectural depth, the 50mm wide slats create striking horizontal shadow patterns while offering an expansive view-through when tilted open. Equipped with our proprietary high-tensile internal cord cores and smooth gear-reduction controls that reduce lift effort by 45%.",
    features: [
      "Generous 50mm profile slat creating dramatic architectural shadow lines",
      "Ergonomic low-profile headbox designed to fit snugly inside shallow window recesses",
      "Reinforced core impervious to humidity, steam, and direct thermal solar exposure",
      "Bespoke wide tape detailing with metallic brass and burnished nickel endcaps"
    ],
    specs: {
      lightControl: "Full Optical Tilt Range (0° to 180°)",
      material: "Fifty TM Proprietary Lightweight Engineered Hardwood Composite",
      motorization: "Somfy Tilt & Lift 50 RTS Ultra-Quiet Concealed Drive",
      idealRooms: "Living Spaces, Loft Conversions, Modern Home Theatres, Executive Offices"
    },
    swatches: ["FiftyTM Pure Matte Chalk", "FiftyTM Deep Carbon", "FiftyTM Bleached Ash", "FiftyTM Warm Teak"]
  }
];

export const COLLECTIONS = [
  {
    id: "see-my-collection",
    title: "See My Collection",
    subtitle: "Interactive Bespoke Curation",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    tag: "Personalized Moodboard",
    description: "A tailored digital atelier experience where your curated swatches, room measurements, and favorite illumin8 blind styles live in one interactive design suite. Build and export specification boards for your architect or interior designer.",
    highlights: ["Custom Moodboard Builder", "High-Resolution 3D Swatch Visualizer", "Instant Trade Spec PDF Export"]
  },
  {
    id: "simply-softs",
    title: "Simply Softs",
    subtitle: "Tactile Organic Neutrals & Linens",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
    tag: "Natural Luxury",
    description: "Celebrates the raw beauty of natural textiles. Simply Softs weaves together washed Belgian flax, slubbed organic cottons, and breathable wool blends in muted earthen tones of alabaster, stone, sage, and warm terracotta.",
    highlights: ["100% GOTS Certified Organic Cotton", "Relaxed Fluid Drape", "Non-Toxic Plant-Based Dyes"]
  },
  {
    id: "simply-rollers",
    title: "Simply Rollers",
    subtitle: "Clean Lines for Modern Urban Living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80",
    tag: "Contemporary Core",
    description: "Effortless, durable, and understated. Simply Rollers delivers versatile day-to-night shading with textured plains, anti-glare screens, and moisture-sealed fabrics engineered to withstand the rigors of family kitchens and active bathrooms.",
    highlights: ["Wipe-Clean Nanotech Coating", "Precision Anti-Fray Weave", "Quick-Install Cassette System"]
  },
  {
    id: "edit-roller",
    title: "Edit Roller",
    subtitle: "Curated Designer Patterns & Finishes",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    tag: "Haute Couture",
    description: "An exclusive capsule of modern decorative roller blinds. Featuring geometric jacquards, subtle metallic filament threads, and sculpted bottom bars in brushed brass, antique bronze, and matte gunmetal.",
    highlights: ["Metallic Filament Weaves", "Sculpted Architectural Bottom Bars", "Limited Run Seasonal Prints"]
  },
  {
    id: "edit-verticals",
    title: "Edit Verticals",
    subtitle: "Sculpted Architectural Louver Weaves",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    tag: "Modernist Form",
    description: "Redefining the vertical silhouette with heavy-weight tactile upholstery fabrics, ribbed textures, and deep slub weaves. Designed to turn expansive glass sliding doors into dynamic fabric walls.",
    highlights: ["Acoustic Sound Dampening", "Seamless Ultrasonic Hemming", "Wide-Angle Light Steering"]
  },
  {
    id: "edit-50tm",
    title: "Edit 50TM",
    subtitle: "Studio Finish Venetian Series",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    tag: "Industrial Chic",
    description: "The pinnacle of 50mm venetian refinement. Edit 50TM showcases deep tactile wood grains, midnight carbon finishes, and bespoke herringbone woven cloth tapes crafted in collaboration with heritage textile mills.",
    highlights: ["Signature 50mm Slat Profile", "Luxury Contrasting Cloth Tapes", "Deep Grain Brushed Finishes"]
  },
  {
    id: "edit-soft-vol-2",
    title: "Edit Soft Vol. 2",
    subtitle: "Opulent Velours & Dramatic Drapes",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    tag: "Maximalist Opulence",
    description: "Volume 2 delves into rich decadence with heavyweight crushed chenilles, jewel-toned cotton velvets, and double-sided thermal interlinings. Designed for grand statement windows, theatrical drawing rooms, and boutique bedrooms.",
    highlights: ["Heavyweight 480gsm Velvet", "Superior Sound & Heat Insulation", "Deep Saturated Jewel Colorways"]
  }
];

export const BRANDS = [
  {
    id: "see-all-brands",
    title: "See All Brands",
    subtitle: "Our Prestigious Design Partnerships",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1000&q=80",
    tag: "Design Portfolio",
    description: "illumin8 is proud to partner with the world's most venerated design houses and heritage textile archives. Every pattern is authenticated, licenced, and meticulously scaled to fit our bespoke window treatments.",
    highlights: ["Official Licenced Heritage Archives", "Made in Great Britain", "Museum-Grade Pattern Fidelity"]
  },
  {
    id: "laura-ashley",
    title: "Laura Ashley",
    subtitle: "Quintessential British Romantic Florals",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    tag: "Heritage Romance",
    description: "Embodying nostalgic British country charm, Laura Ashley blinds and curtains bring timeless botanical grace to the home. Featuring iconic archival motifs such as Josette, Belvedere Peony, and Summer Palace rendered in soft blush, duck egg, and dove grey.",
    highlights: ["Iconic Josette Damask & Belvedere Florals", "Pure Cotton & Crisp Linen Grounds", "Subtle Romantic Color Palettes"]
  },
  {
    id: "william-morris-at-home",
    title: "William Morris at Home",
    subtitle: "Masterpieces of the Arts & Crafts Movement",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
    tag: "Arts & Crafts Icon",
    description: "Rooted in nature and artisanal integrity, our William Morris at Home collection transforms historic hand-carved woodblock designs into luxury curtains and roman shades. Signature patterns include Strawberry Thief, Willow Boughs, and Pimpernel.",
    highlights: ["Archival Strawberry Thief & Willow Boughs", "Intricate Botanical Flora & Fauna", "Deep Earthy Pigments and Rich Weaves"]
  },
  {
    id: "emily-bond",
    title: "Emily Bond",
    subtitle: "Classic Countryside Animal Motifs & Ticking Stripes",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    tag: "Country Charm",
    description: "Famous for her endearing Dachshund, Labrador, and gamebird prints set against crisp linen and rustic ticking stripes. Emily Bond creates a joyful, comforting country aesthetic perfect for kitchens, boot rooms, and cozy snugs.",
    highlights: ["Charming Illustrated Animal Silhouettes", "Classic Ticking Stripe Coordinates", "Natural Unbleached Linen Grounds"]
  },
  {
    id: "orla-kiely",
    title: "Orla Kiely",
    subtitle: "Mid-Century Graphic Retro Modernism",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    tag: "Retro Modern",
    description: "Known affectionately as the 'Queen of Prints', Orla Kiely’s signature Linear Stem, Multi Stem, and stylized floral repeat patterns bring infectious optimism, mid-century Scandinavian flair, and bold graphic color to blinds and curtains.",
    highlights: ["Signature Multi Stem & Linear Stem Repeats", "Mid-Century Olive, Dandelion & Ochre", "High-Fidelity Screen Printing"]
  },
  {
    id: "sophie-allport",
    title: "Sophie Allport",
    subtitle: "Delicate Nature-Inspired Wildlife Watercolors",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
    tag: "British Wildlife",
    description: "Capturing the serene beauty of the British countryside, Sophie Allport features delicate, hand-painted watercolor motifs including Busy Bees, Swallow silhouettes, and woodland wildlife printed on durable 100% natural cotton.",
    highlights: ["Beloved Busy Bee & Flying Swallow Prints", "Gentle Soft Duck Egg & Chalk Backgrounds", "Durable Machine-Friendly Weaves"]
  },
  {
    id: "historic-royal-palaces",
    title: "Historic Royal Palaces",
    subtitle: "Regal Elegance Inspired by Royal Residences",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    tag: "Crown Archive",
    description: "In an exclusive independent collaboration, this prestigious collection draws direct inspiration from the architectural splendors and royal tapestries of Hampton Court Palace, Kensington Palace, and the Tower of London.",
    highlights: ["Tudor Heraldic Motifs & Baroque Damasks", "Metallic Thread Jacquard Accents", "Royalty-Grade Heavyweight Drapes"]
  }
];

export const SERVICES = [
  {
    id: "fabric-collections",
    title: "Fabric Collections",
    subtitle: "Over 3,200 Curated Architectural Textiles",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
    tag: "Material Library",
    description: "We provide trade designers, commercial developers, and private homeowners with comprehensive physical pattern books and textile sample boxes. Every fabric is rigorously tested for light fastness, thermal deflection, acoustic NRC rating, and fire retardancy (BS 5867 / Crib 5).",
    features: ["Physical luxury presenter cases with real fabric feelers", "Fire-rated Crib 5 certifications for hospitality contracts", "Acoustic absorption lab reports for commercial studios", "Next-day complimentary swatch delivery dispatch"]
  },
  {
    id: "marketing",
    title: "Marketing & Showroom Support",
    subtitle: "Point of Sale & 3D Digital Assets",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1000&q=80",
    tag: "Retail Excellence",
    description: "For retail studios, boutique showrooms, and trade stockists, illumin8 delivers turnkey marketing ecosystems. This includes working motorized display towers, luxury fabric swatch carousels, branded consumer brochures, and photorealistic 3D CGI window visualizer software.",
    features: ["Modular plug-and-play showroom display stands", "Custom white-label lookbooks with retailer branding", "Interactive web visualizers for client consultations", "Comprehensive digital marketing and social media asset kits"]
  },
  {
    id: "company-support",
    title: "Company Support",
    subtitle: "Dedicated Engineering & Technical Consultation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    tag: "Concierge Service",
    description: "Our dedicated technical support team partners with you from laser site surveys to post-installation programming. With over 25 certified Somfy automation technicians on call, we resolve complex recess measurements, structural bay window angles, and BMS integration challenges.",
    features: ["Dedicated Trade Account Managers on direct dial", "Free virtual CAD measuring and bracket clearance reviews", "Professional nationwide measuring & installation crews", "10-year comprehensive warranty and motor replacement service"]
  },
  {
    id: "online-platforms",
    title: "Online Platforms",
    subtitle: "B2B Trade Portal & Instant Configurator",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    tag: "Digital Ecosystem",
    description: "Experience effortless procurement with our proprietary cloud portal. Trade partners can configure custom curtains, roman blinds, and motorized systems down to the millimeter, receive instant transparent pricing, verify real-time fabric stock, and track live manufacturing progress.",
    features: ["Millimeter-accurate online product configurator", "Real-time automated PDF quotations with client markups", "ERP API integration for bulk commercial ordering", "Live barcoded production tracking from cutting to dispatch"]
  }
];

export const SMART_HOME = {
  title: "Intelligent Living: Blinds & Somfy",
  subtitle: "Effortless Automation Powered by World-Leading Somfy Motorization",
  image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  description: "At illumin8, we have pioneered the marriage of bespoke luxury window dressings with the cutting-edge motorization of Somfy. With whisper-quiet motors, wire-free rechargeable lithium battery drives, and seamless TaHoma switch integration, you can orchestrate your home's natural illumination effortlessly.",
  features: [
    {
      title: "Somfy TaHoma Smart Switch",
      desc: "Connect and centralize up to 200 motorized devices. Control blinds and curtains simultaneously via iOS and Android apps with customizable lifestyle scenarios.",
      icon: "wifi"
    },
    {
      title: "Voice & Smart Home Integration",
      desc: "Fully compatible with Apple HomeKit, Amazon Alexa, Google Home, Control4, and Crestron. Simply command: 'Hey Siri, set living room to movie mode'.",
      icon: "mic"
    },
    {
      title: "Sun-Tracking Solar Automations",
      desc: "Smart thermal sensors automatically close your blinds during intense summer sun to prevent heat buildup, and tilt them open in winter to capture passive solar warmth.",
      icon: "sun"
    },
    {
      title: "WireFree™ Eco-Solar Charging",
      desc: "No electrician required. Discreet rechargeable battery wands paired with miniature sill-mounted photovoltaic solar panels keep your blinds perpetually powered by sunlight.",
      icon: "battery-charging"
    }
  ],
  somfySpecs: [
    { label: "Motor Sound Level", value: "< 38 dB (Whisper Silent)" },
    { label: "Radio Protocol", value: "Somfy RTS & Zigbee 3.0" },
    { label: "Battery Life", value: "Up to 12 Months per Charge" },
    { label: "Warranty", value: "5-Year Somfy Motor Guarantee" }
  ]
};

export const ABOUT_US = {
  heritage: {
    title: "The Art of illumin8",
    subtitle: "Over Two Decades of Crafting Light & Textile Grandeur",
    text1: "Founded on the belief that a home's atmosphere is defined by how it dialogues with sunlight, illumin8 has grown from an artisanal bespoke workshop into a premier British window treatment atelier. We hand-tailor every curtain pleat and precision-calibrate every blind slat to bring harmonious balance to modern living.",
    text2: "Our master craftspeople combine centuries-old hand-stitching traditions with computer-guided laser cutting. We partner exclusively with accredited European fabric mills, sustainably managed timber reserves, and Somfy motion engineers to deliver window furnishings that endure for generations."
  },
  contact: {
    title: "Contact & Consultations",
    address: "illumin8 Ateliers, 14 St. James's Square, Mayfair, London, SW1Y 4LG",
    phone: "+44 (0) 20 7946 0888",
    email: "concierge@illumin8blinds.com",
    hours: "Monday – Friday: 08:30 – 18:00 | Saturday: 10:00 – 16:00"
  },
  lookbooks: [
    {
      id: "lookbook-2026",
      title: "The 2026 Architectural Volume",
      subtitle: "Spring / Summer Light Sculpting",
      cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      pages: 48,
      season: "SS 2026"
    },
    {
      id: "lookbook-winter",
      title: "Winter Textures & Thermal Drapes",
      subtitle: "Autumn / Winter Velvet & Bouclé Edit",
      cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      pages: 64,
      season: "AW 2025/26"
    },
    {
      id: "lookbook-smart",
      title: "Smart Motorization & Somfy Guide",
      subtitle: "The Complete Architectural Specifier",
      cover: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      pages: 36,
      season: "Smart Tech"
    }
  ],
  news: [
    {
      id: "news-1",
      date: "October 2026",
      title: "Biophilic Design: Enhancing Circadian Rhythms Through Automated Shading",
      summary: "How scheduled sunrise curtain openings and soft noon solar filtering align human biology with nature inside urban apartments.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      date: "September 2026",
      title: "Sustainable Textiles: The Rise of 100% Recycled Ocean Yarns in Curtains",
      summary: "An inside look at our partnership with European weaving houses transforming marine plastic polymers into gossamer-soft drapery sheers.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      date: "August 2026",
      title: "Fifty TM: Why 50mm Venetian Slats Dominate High-End Interior Architecture",
      summary: "Why leading interior designers are moving away from narrow 25mm blinds in favor of dramatic 50mm depth profiles.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    }
  ],
  esg: {
    title: "Environmental, Social & Governance (ESG)",
    subtitle: "Sustainable Craftsmanship with Zero Compromise on Elegance",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    commitments: [
      {
        title: "100% FSC-Certified Basswood",
        desc: "All timbers used in our wooden venetian and 50TM blinds are sourced from sustainably replanted Northern American and European managed forests."
      },
      {
        title: "Recycled Marine & GOTS Organic Yarns",
        desc: "Over 65% of our current curtain and roller fabrics utilize OEKO-TEX certified yarns spun from post-consumer recycled plastic bottles and certified organic cotton."
      },
      {
        title: "Zero-Landfill Packaging & Local Craft",
        desc: "Shipped in 100% compostable cardboard packaging with water-activated tape. Over 90% of our products are tailored within our domestic workshops to minimize carbon footprint."
      },
      {
        title: "Passive Thermal Energy Reduction",
        desc: "Our thermal-lined curtains and cellular blinds insulate windows, reducing household heat loss by up to 43% and lowering air conditioning loads in summer."
      }
    ]
  },
  childSafety: {
    title: "Child Safety: Make It Safe Priority",
    subtitle: "Complete Peace of Mind with 100% Cordless & Safe Innovations",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    description: "At illumin8, child safety is not merely a legal compliance standard—it is an uncompromising design principle. We strictly adhere to and exceed BS EN 13120 European safety regulations by engineering inherently safe, cordless, and motorized window furnishings.",
    standards: [
      {
        title: "Motorized Touch & App Control",
        desc: "Motorized blinds have zero dangling cords or loops, creating the safest possible environment for children, toddlers, and pets."
      },
      {
        title: "Spring-Assisted Cordless Glide",
        desc: "Blinds easily raise and lower with a gentle touch on the bottom rail, completely eliminating cord hazards."
      },
      {
        title: "Safe-Wand Mechanics",
        desc: "Rigid ergonomic wands tilt and draw vertical and venetian slats smoothly without strings, cords, or loops."
      },
      {
        title: "Certified Breakaway Connectors & Cleats",
        desc: "Where traditional chains are requested, quick-release tensioners and breakaway safety connectors snap open instantly under minimal pressure."
      }
    ]
  }
};

export const EMPLOYEE_DATA = {
  demoUser: {
    username: "staff@illumin8.com",
    password: "illumin8staff2026",
    name: "Elena Vance",
    role: "Senior Design & Technical Consultant",
    store: "London Mayfair Flagship",
    badgeNumber: "IL-8842"
  },
  stats: {
    activeOrders: 18,
    pendingMeasurements: 6,
    swatchesDispatchedToday: 42,
    inventoryAlerts: 2
  },
  recentOrders: [
    { id: "ORD-9281", client: "Lord & Lady Harrington", product: "Motorized Wave Curtains (Belgian Linen)", value: "£8,450", status: "In Weaving (Atelier 2)" },
    { id: "ORD-9279", client: "Studio K Architects", product: "Fifty TM Blinds (Matte Carbon 50mm)", value: "£4,200", status: "Quality Check" },
    { id: "ORD-9274", client: "Dr. Julian Croft", product: "Somfy WireFree Roman Blinds (William Morris)", value: "£3,180", status: "Ready for Dispatch" },
    { id: "ORD-9268", client: "The Sloane Club Hotel", product: "Bespoke Acoustic Drapes (Edit Soft Vol. 2)", value: "£14,800", status: "Laser Site Measured" }
  ],
  warehouseStock: [
    { item: "Fifty TM Matte Carbon Slat Rolls (50mm)", stock: "1,450 meters", status: "Optimal" },
    { item: "Somfy Sonesse 30 WireFree Li-ion Motors", stock: "68 units", status: "Low Stock Alert" },
    { item: "Belgian Natural Oatmeal Linen (300cm wide)", stock: "820 meters", status: "Optimal" },
    { item: "Laura Ashley Josette Chalk Ground Fabric", stock: "340 meters", status: "Optimal" },
    { item: "TaHoma Smart Hub Switch Gateway", stock: "94 units", status: "Optimal" }
  ]
};
