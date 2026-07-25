const minerals = {
    hero: {
      eyebrow: "Essential Minerals",
      title: "The Minerals Your Body Needs",
      description:
        "Beyond the four core electrolytes, your body relies on several other essential minerals to support oxygen transport, immune function, metabolism, bone health, antioxidant defense, and more.",
    },
  
    quickFacts: [
      {
        label: "Essential Minerals",
        value: "6",
        description:
          "This page highlights six essential minerals that play important roles in everyday health.",
      },
      {
        label: "Key Functions",
        value: "Many",
        description:
          "Essential minerals support processes ranging from oxygen transport and immunity to energy production and bone health.",
      },
      {
        label: "Food Sources",
        value: "Varied",
        description:
          "Minerals are found across a wide range of foods, including meat, seafood, dairy, legumes, nuts, seeds, and whole grains.",
      },
    ],
  
    overview: {
      title: "Beyond the Core Four",
      paragraphs: [
        "Electrolytes are minerals too, but not all essential minerals are electrolytes. Electrolyfe focuses on four core electrolytes—potassium, sodium, magnesium, and calcium—because of their important roles in fluid balance, nerve signaling, muscle function, and other physiological processes.",
        "The minerals highlighted here are equally essential to health, but serve different primary functions in the body. Together, they contribute to oxygen transport, immune defense, metabolism, antioxidant protection, bone health, and cellular function.",
      ],
    },
  
    minerals: [
      {
        name: "Iron",
        symbol: "Fe",
        color: "#8b5e3c",
        role: "Oxygen Transport & Energy",
        description:
          "Iron is essential for producing hemoglobin, the protein in red blood cells that carries oxygen throughout the body. It also supports energy production and normal cellular function.",
        foodSources: [
          "Red meat",
          "Poultry",
          "Seafood",
          "Lentils",
          "Beans",
          "Spinach",
          "Fortified cereals",
        ],
      },
  
      {
        name: "Zinc",
        symbol: "Zn",
        color: "#64748b",
        role: "Immunity & Cell Function",
        description:
          "Zinc supports immune function, wound healing, DNA synthesis, and normal growth and development.",
        foodSources: [
          "Oysters",
          "Beef",
          "Poultry",
          "Dairy",
          "Pumpkin seeds",
          "Nuts",
          "Beans",
        ],
      },
  
      {
        name: "Copper",
        symbol: "Cu",
        color: "#b87333",
        role: "Enzymes & Connective Tissue",
        description:
          "Copper helps the body produce energy, form connective tissues, support the nervous system, and use iron properly.",
        foodSources: [
          "Shellfish",
          "Liver",
          "Nuts",
          "Seeds",
          "Whole grains",
          "Beans",
          "Dark chocolate",
        ],
      },
  
      {
        name: "Manganese",
        symbol: "Mn",
        color: "#7c8f5a",
        role: "Metabolism & Bone Health",
        description:
          "Manganese helps activate enzymes involved in metabolism, antioxidant defense, bone formation, and connective tissue development.",
        foodSources: [
          "Whole grains",
          "Nuts",
          "Legumes",
          "Leafy vegetables",
          "Pineapple",
          "Tea",
        ],
      },
  
      {
        name: "Selenium",
        symbol: "Se",
        color: "#4f7c82",
        role: "Antioxidant Defense & Thyroid",
        description:
          "Selenium is required for proteins that help protect cells from oxidative damage and support thyroid hormone metabolism and immune function.",
        foodSources: [
          "Brazil nuts",
          "Seafood",
          "Meat",
          "Poultry",
          "Eggs",
          "Dairy",
          "Whole grains",
        ],
      },
  
      {
        name: "Phosphorus",
        symbol: "P",
        color: "#6b7280",
        role: "Bones, Cells & Energy",
        description:
          "Phosphorus is a major component of bones and teeth and plays a central role in energy production, cell membranes, and genetic material.",
        foodSources: [
          "Dairy products",
          "Meat",
          "Poultry",
          "Seafood",
          "Eggs",
          "Beans",
          "Nuts",
          "Whole grains",
        ],
      },
    ],
  
    foodSources: {
      title: "Finding Essential Minerals in Food",
      description:
        "Essential minerals are widely distributed across the food supply. Eating a varied diet that includes protein-rich foods, legumes, nuts, seeds, whole grains, fruits, vegetables, and dairy can provide a broad range of important minerals.",
      examples: [
        {
          category: "Animal Foods",
          foods: "Meat, seafood, poultry, eggs, and dairy",
          img: "/steak.svg"
        },
        {
          category: "Plant Foods",
          foods: "Legumes, nuts, seeds, whole grains, fruits, and vegetables",
          img: "/vegetables.svg"
        },
        {
          category: "Fortified Foods",
          foods: "Some cereals and other fortified products",
          img: "/cereals.svg"
        },
      ],
    },
  
    chloride: {
      title: "What About Chloride?",
      paragraphs: [
        "Chloride is an essential electrolyte that helps maintain fluid balance, support nerve function, and regulate the body's acid-base balance. It is most commonly consumed together with sodium as sodium chloride, or table salt.",
        "Chloride is not required to appear on standard U.S. Nutrition Facts labels, so it is not reported as consistently across the food records available through the USDA FoodData Central database. Because sodium is extensively tracked and is closely associated with chloride through salt intake, sodium provides a practical marker for general dietary tracking.",
        "Sodium chloride is approximately 40% sodium and 60% chloride by mass. Chloride therefore remains nutritionally important, but its limited availability in the underlying food data is why it is not included in Electrolyfe's Core 4 Complete Electrolytes Profile.",
      ],
    },
  
    faq: [
      {
        question: "Are all essential minerals electrolytes?",
        answer:
          "No. Electrolytes are minerals that carry an electrical charge when dissolved in body fluids, but many essential minerals do not function primarily as electrolytes. Iron, zinc, copper, manganese, selenium, and phosphorus are essential minerals with different roles in the body.",
      },
      {
        question: "Why are iron and zinc important?",
        answer:
          "Iron is essential for oxygen transport and energy production, while zinc supports immune function, wound healing, DNA synthesis, and normal growth and development.",
      },
      {
        question: "Which foods provide essential minerals?",
        answer:
          "Essential minerals are found in many foods, including meat, seafood, poultry, dairy, eggs, legumes, nuts, seeds, whole grains, fruits, and vegetables.",
      },
      {
        question: "Why isn't chloride part of the Core 4?",
        answer:
          "Chloride is an essential electrolyte, but it is not included in Electrolyfe's Core 4 Complete Electrolytes Profile because chloride is not reported consistently across the USDA food data used by Electrolyfe.",
      },
    ],
  
    scientificReferences: [
      {
        title: "National Institutes of Health — Office of Dietary Supplements",
        description:
          "Fact sheets covering essential minerals including iron, zinc, copper, manganese, selenium, and phosphorus.",
        url: "https://ods.od.nih.gov/factsheets/list-all/",
      },
      {
        title: "USDA FoodData Central",
        description:
          "USDA's comprehensive food and nutrient composition database used as the primary food data source for Electrolyfe.",
        url: "https://fdc.nal.usda.gov/",
      },
    ],
  };
  
  export default minerals;