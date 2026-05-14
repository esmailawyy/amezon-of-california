const products = [
  // ===== T-SHIRTS (5) =====
  {
    id: 1,
    title: "Premium Black Oversized Tee",
    description: "Heavyweight cotton oversized t-shirt with a luxurious drape. Crafted from 100% Egyptian cotton for unmatched softness.",
    price: 75.00,
    originalPrice: 101.00,
    category: "tshirts",
    colors: ["Black", "White", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviews: 124,
    badge: "SALE",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "Minimal Logo Crew Neck",
    description: "Clean-cut crew neck tee with subtle embossed branding. Perfect for a refined casual look.",
    price: 64.00,
    originalPrice: null,
    category: "tshirts",
    colors: ["White", "Navy", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviews: 89,
    badge: null,
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 3,
    title: "Textured Stripe Premium Tee",
    description: "Jacquard-knit striped tee with a contemporary boxy fit. Elevated streetwear meets tailored precision.",
    price: 87.00,
    originalPrice: null,
    category: "tshirts",
    colors: ["Navy/White", "Black/Grey", "Cream/Tan"],
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviews: 67,
    badge: "NEW",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 4,
    title: "Pima Cotton V-Neck",
    description: "Ultra-soft Pima cotton v-neck with a tailored silhouette. The everyday essential redefined.",
    price: 58.00,
    originalPrice: 80.00,
    category: "tshirts",
    colors: ["White", "Black", "Heather Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.4,
    reviews: 201,
    badge: "SALE",
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 5,
    title: "Graphic Art Print Tee",
    description: "Artist collaboration limited edition tee. High-definition print on premium ringspun cotton.",
    price: 92.00,
    originalPrice: null,
    category: "tshirts",
    colors: ["Black", "Off-White"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviews: 43,
    badge: "LIMITED",
    inStock: true,
    featured: true,
    trending: true
  },

  // ===== PANTS (5) =====
  {
    id: 6,
    title: "Slim Fit Selvedge Denim",
    description: "Japanese selvedge denim with a slim tapered leg. Raw indigo wash with natural fading potential.",
    price: 150.00,
    originalPrice: 202.00,
    category: "pants",
    colors: ["Indigo", "Black Wash", "Stone"],
    sizes: ["28", "30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1624378439575-d1ead6bb2463?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviews: 156,
    badge: "SALE",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 7,
    title: "Tailored Chino Trousers",
    description: "Wrinkle-resistant stretch chinos with a modern tapered cut. From boardroom to brunch.",
    price: 121.00,
    originalPrice: null,
    category: "pants",
    colors: ["Khaki", "Navy", "Olive", "Black"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviews: 98,
    badge: null,
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 8,
    title: "Technical Cargo Joggers",
    description: "Utility-inspired cargo joggers with zip pockets and elasticated cuffs. Ripstop nylon blend.",
    price: 109.00,
    originalPrice: null,
    category: "pants",
    colors: ["Black", "Olive", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1624378439575-d1ead6bb2463?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d1ead6bb2463?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.3,
    reviews: 72,
    badge: "NEW",
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: 9,
    title: "Wide Leg Pleated Trousers",
    description: "Relaxed wide-leg trousers with front pleats. Italian wool-blend fabric for a luxurious drape.",
    price: 165.00,
    originalPrice: null,
    category: "pants",
    colors: ["Charcoal", "Cream", "Navy"],
    sizes: ["30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviews: 34,
    badge: null,
    inStock: true,
    featured: true,
    trending: false
  },
  {
    id: 10,
    title: "Relaxed Fit Corduroy Pants",
    description: "Vintage-inspired corduroy with a relaxed straight leg. Soft-touch wide-wale cotton.",
    price: 131.00,
    originalPrice: 160.00,
    category: "pants",
    colors: ["Tan", "Forest Green", "Burgundy"],
    sizes: ["30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.4,
    reviews: 61,
    badge: "SALE",
    inStock: true,
    featured: false,
    trending: false
  },

  // ===== SHOES (5) =====
  {
    id: 11,
    title: "Urban Leather Sneakers",
    description: "Handcrafted Italian leather sneakers with cushioned insoles. Minimalist design, maximum comfort.",
    price: 227.00,
    originalPrice: 295.00,
    category: "shoes",
    colors: ["White", "Black", "Tan"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviews: 210,
    badge: "SALE",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 12,
    title: "Performance Running Shoes",
    description: "Lightweight mesh upper with responsive foam midsole. Engineered for speed and style.",
    price: 185.00,
    originalPrice: null,
    category: "shoes",
    colors: ["Black/Red", "Grey/Neon", "White/Blue"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviews: 178,
    badge: null,
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: 13,
    title: "Heritage Leather Boots",
    description: "Premium full-grain leather boots with Goodyear welt construction. Built to last generations.",
    price: 312.00,
    originalPrice: null,
    category: "shoes",
    colors: ["Brown", "Black", "Tan"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviews: 95,
    badge: "BEST SELLER",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 14,
    title: "Canvas Slip-On Loafers",
    description: "Effortless slip-on loafers in premium washed canvas. Padded collar for all-day comfort.",
    price: 114.00,
    originalPrice: null,
    category: "shoes",
    colors: ["Navy", "Cream", "Olive"],
    sizes: ["40", "41", "42", "43", "44"],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.3,
    reviews: 47,
    badge: null,
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 15,
    title: "Suede Chelsea Boots",
    description: "Classic Chelsea silhouette in brushed suede. Elastic side panels and pull tab for easy wear.",
    price: 261.00,
    originalPrice: 328.00,
    category: "shoes",
    colors: ["Sand", "Black", "Chocolate"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviews: 82,
    badge: "SALE",
    inStock: true,
    featured: true,
    trending: false
  },

  // ===== HOODIES (5) =====
  {
    id: 16,
    title: "Heavyweight French Terry Hoodie",
    description: "500 GSM French terry hoodie with kangaroo pocket. Double-lined hood for structure and warmth.",
    price: 143.00,
    originalPrice: null,
    category: "hoodies",
    colors: ["Black", "Heather Grey", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviews: 143,
    badge: "BEST SELLER",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 17,
    title: "Zip-Up Technical Hoodie",
    description: "Performance zip hoodie with moisture-wicking fabric. Thumb holes and reflective details.",
    price: 155.00,
    originalPrice: 193.00,
    category: "hoodies",
    colors: ["Black", "Charcoal", "Dark Green"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviews: 76,
    badge: "SALE",
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: 18,
    title: "Oversized Drop Shoulder Hoodie",
    description: "Relaxed oversized fit with dropped shoulders. Ultra-soft brushed fleece interior.",
    price: 131.00,
    originalPrice: null,
    category: "hoodies",
    colors: ["Cream", "Dusty Pink", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviews: 91,
    badge: "NEW",
    inStock: true,
    featured: true,
    trending: false
  },
  {
    id: 19,
    title: "Varsity Color Block Hoodie",
    description: "Retro-inspired color block hoodie with chenille lettering. Premium heavyweight construction.",
    price: 160.00,
    originalPrice: null,
    category: "hoodies",
    colors: ["Navy/Cream", "Black/Red", "Green/White"],
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.4,
    reviews: 38,
    badge: null,
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 20,
    title: "Cashmere Blend Pullover Hoodie",
    description: "Luxurious cashmere-cotton blend hoodie. Ribbed cuffs and hem for a refined finish.",
    price: 244.00,
    originalPrice: null,
    category: "hoodies",
    colors: ["Camel", "Light Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviews: 27,
    badge: "LIMITED",
    inStock: true,
    featured: true,
    trending: true
  },

  // ===== ACCESSORIES (5) =====
  {
    id: 21,
    title: "Italian Leather Belt",
    description: "Full-grain Italian leather belt with brushed nickel buckle. Hand-stitched edges.",
    price: 97.00,
    originalPrice: 126.00,
    category: "accessories",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviews: 134,
    badge: "SALE",
    inStock: true,
    featured: true,
    trending: false
  },
  {
    id: 22,
    title: "Aviator Sunglasses",
    description: "Polarized aviator sunglasses with titanium frame. UV400 protection with anti-glare coating.",
    price: 70.00,
    originalPrice: null,
    category: "accessories",
    colors: ["Gold/Green", "Silver/Blue", "Black/Grey"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.5,
    reviews: 89,
    badge: null,
    inStock: true,
    featured: false,
    trending: true
  },
  {
    id: 23,
    title: "Canvas Weekender Bag",
    description: "Waxed canvas weekender with leather accents. Brass hardware and padded laptop sleeve.",
    price: 202.00,
    originalPrice: null,
    category: "accessories",
    colors: ["Olive", "Navy", "Charcoal"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviews: 56,
    badge: "NEW",
    inStock: true,
    featured: true,
    trending: true
  },
  {
    id: 24,
    title: "Merino Wool Beanie",
    description: "Fine merino wool beanie with a ribbed knit pattern. Lightweight warmth for every season.",
    price: 53.00,
    originalPrice: null,
    category: "accessories",
    colors: ["Black", "Grey", "Burgundy", "Navy"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.4,
    reviews: 112,
    badge: null,
    inStock: true,
    featured: false,
    trending: false
  },
  {
    id: 25,
    title: "Leather Card Wallet",
    description: "Slim profile card wallet in vegetable-tanned leather. RFID blocking technology built-in.",
    price: 80.00,
    originalPrice: 104.00,
    category: "accessories",
    colors: ["Black", "Cognac", "Navy"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviews: 78,
    badge: "SALE",
    inStock: true,
    featured: false,
    trending: true
  }
];

export default products;

export const categories = [
  { id: "all", label: "All Products" },
  { id: "tshirts", label: "T-Shirts" },
  { id: "pants", label: "Pants" },
  { id: "shoes", label: "Shoes" },
  { id: "hoodies", label: "Hoodies" },
  { id: "accessories", label: "Accessories" }
];

export const testimonials = [
  {
    id: 1,
    name: "Michael T.",
    location: "Los Angeles, CA",
    text: "The quality of the leather boots is outstanding. I've been wearing them daily for 6 months and they just keep looking better.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "New York, NY",
    text: "Best oversized tees I've ever owned. The fabric weight is perfect and the fit is exactly what I was looking for.",
    rating: 5
  },
  {
    id: 3,
    name: "James R.",
    location: "Miami, FL",
    text: "Fast shipping and the selvedge denim exceeded my expectations. Will definitely be ordering more.",
    rating: 4
  }
];
