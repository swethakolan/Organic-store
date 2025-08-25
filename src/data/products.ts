export const products = [
  {
    id: 1,
    name: "Almond Butter",
    category: "Spreads",
    description:
      "Creamy and rich almond butter made from slow-roasted premium almonds. Packed with protein, healthy fats, and essential nutrients, making it a perfect spread for toast, smoothies, or healthy snacking.",
    image: "/butter.jpeg",
    price: "₹399",
    features: ["High-protein", "No added sugar", "Vegan-friendly"],
    nutrition: {
      calories: 190,
      sugar: "1g",
      carbs: "6g",
      protein: "7g",
      fat: "16g",
    },
    traceability: {
      source: "California Premium Almonds",
      certification: "Non-GMO Verified, Vegan Certified",
      harvestDate: "2024-12-05",
    }
  },
  {
    id: 2,
    name: "Organic Green Tea",
    category: "Beverages",
    description:
      "Handpicked from sustainable tea farms, this organic green tea is rich in antioxidants and delivers a refreshing, earthy flavor. Ideal for detox, weight management, and a calming daily ritual.",
    image: "/teaa.jpeg",
    price: "₹299",
    features: ["Antioxidant-rich", "Handpicked", "No chemicals"],
    nutrition: {
      calories: 0,
      sugar: "0g",
      carbs: "0g",
      protein: "0g",
      fat: "0g",
    },
    traceability: {
      source: "Assam Tea Estates",
      certification: "USDA Organic, Rainforest Alliance Certified",
      harvestDate: "2025-01-18",
    },
    reviews: [
      { user: "Meera", rating: 5, comment: "Smooth taste and refreshing aroma!" },
      { user: "Vikram", rating: 4, comment: "Good quality but packaging could be better." },
    ],
  },
  {
    id: 3,
    name: "Hedamo Organic Honey",
    category: "Food",
    description:
      "Pure, wild, and 100% organic honey harvested from remote forest regions. Free from additives, preservatives, or artificial sweeteners. Perfect for natural sweetening, skincare, and boosting immunity.",
    image: "/honey.jpeg",
    price: "₹499",
    features: ["Unprocessed", "Nutrient-rich", "Eco-friendly"],
    nutrition: {
      calories: 70,
      sugar: "15g",
      carbs: "17g",
      protein: "0g",
      fat: "0g",
    },
    traceability: {
      source: "Wild Forests of Western Ghats",
      certification: "FSSAI Certified, 100% Organic",
      harvestDate: "2025-02-10",
    },
    reviews: [
      { user: "Ananya", rating: 5, comment: "Best honey I've ever tried—pure and delicious!" },
      { user: "Rahul", rating: 4, comment: "Great taste, but slightly pricey." },
    ],
  },
];






