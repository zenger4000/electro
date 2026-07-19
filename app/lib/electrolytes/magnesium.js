const hero = {
    name: "Magnesium",
    symbol: "Mg",
    color: "#6ae75e",

    description:
        "An essential mineral and electrolyte involved in more than 300 enzymatic reactions throughout the body. Magnesium supports muscle and nerve function, energy production, bone health, protein synthesis, and normal heart rhythm.¹²",

    dailyValue:
        "420 mg/day (Adult Men) • 320 mg/day (Adult Women)",
};

const quickFacts = {
    facts: [
        {
            title: "Classification",
            value: "Essential Mineral & Electrolyte",
        },
        {
            title: "Chemical Symbol",
            value: "Mg",
        },
        {
            title: "Primary Functions",
            value:
                "Energy Production • Muscle Function • Nerve Signaling • Bone Health",
        },
        {
            title: "Main Storage",
            value:
                "Approximately 50–60% Stored in Bones",
        },
        {
            title: "Recommended Intake",
            value:
                "420 mg/day (Adult Men) • 320 mg/day (Adult Women)",
        },
        {
            title: "Rich Food Sources",
            value:
                "Pumpkin Seeds • Almonds • Spinach • Black Beans • Dark Chocolate",
        },
    ],
};

const overview = {
    title: "What Is Magnesium?",

    paragraphs: [
        "Magnesium is an essential mineral that participates in more than 300 enzymatic reactions within the human body. It is required for converting food into energy, synthesizing proteins and DNA, supporting muscle contraction, transmitting nerve impulses, and maintaining a healthy heartbeat.¹²",

        "Approximately half of the body's magnesium is stored in bones, while the remainder is found in muscles, soft tissues, and body fluids. Because magnesium is involved in so many biological processes, maintaining adequate intake is important for overall health.¹",

        "Although magnesium is naturally present in many plant and animal foods, surveys suggest that a significant proportion of adults consume less magnesium than recommended. Choosing a varied diet rich in whole foods can help meet daily requirements.¹²",
    ],
};
const benefits = {
    title: "Health Benefits",

    benefits: [
        {
            title: "Supports Energy Production",
            description:
                "Magnesium is required for hundreds of enzymatic reactions involved in converting carbohydrates, fats, and proteins into usable cellular energy (ATP).¹",
        },
        {
            title: "Essential for Muscle Function",
            description:
                "Magnesium helps regulate muscle contraction and relaxation by working together with calcium and potassium. Maintaining adequate magnesium intake supports normal muscle function.¹²",
        },
        {
            title: "Supports the Nervous System",
            description:
                "Magnesium contributes to normal nerve impulse transmission and communication between nerve cells throughout the body.¹",
        },
        {
            title: "Maintains Healthy Bones",
            description:
                "Around half of the body's magnesium is stored in bone tissue, where it contributes to normal bone structure and works alongside calcium and vitamin D to support skeletal health.¹²",
        },
        {
            title: "Supports Normal Heart Rhythm",
            description:
                "Magnesium helps regulate the electrical activity of the heart and works together with other electrolytes to maintain a normal heartbeat.¹⁵",
        },
        {
            title: "Supports Protein and DNA Synthesis",
            description:
                "Magnesium is required for protein synthesis, DNA replication, and many other fundamental cellular processes essential for growth, repair, and maintenance.¹",
        },
    ],
};

const dailyRequirements = {
    title: "Recommended Daily Intake",

    description:
        "Magnesium requirements vary by age, sex, and life stage. The values below represent the Recommended Dietary Allowance (RDA) for healthy individuals.¹²",

    rows: [
        {
            group: "Adult Men (19-30 years)",
            amount: "400 mg/day",
        },
        {
            group: "Adult Men (31+ years)",
            amount: "420 mg/day",
        },
        {
            group: "Adult Women (19-30 years)",
            amount: "310 mg/day",
        },
        {
            group: "Adult Women (31+ years)",
            amount: "320 mg/day",
        },
        {
            group: "Pregnant Women",
            amount: "350-360 mg/day",
        },
        {
            group: "Breastfeeding Women",
            amount: "310-320 mg/day",
        },
    ],

    note:
        "Most healthy people can meet their magnesium requirements through a balanced diet that includes whole grains, legumes, nuts, seeds, leafy vegetables, and other minimally processed foods.¹²",
};

const foodSources = {
    title: "Magnesium-Rich Foods",

    description:
        "Magnesium is naturally abundant in many plant-based foods, particularly nuts, seeds, legumes, whole grains, and leafy green vegetables. These foods also provide fiber, vitamins, and other beneficial nutrients.¹⁴",

    foods: [
        {
            name: "Pumpkin Seeds",
            amount: "Approx. 550 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Chia Seeds",
            amount: "Approx. 335 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Almonds",
            amount: "Approx. 270 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Spinach, Raw",
            amount: "Approx. 79 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Black Beans",
            amount: "Approx. 170 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Dark Chocolate (70-85%)",
            amount: "Approx. 225 mg / 100 g",
            fdcId: null,
        },
    ],
};
const deficiency = {
    title: "Magnesium Deficiency (Hypomagnesemia)",

    introduction:
        "Magnesium deficiency, known medically as hypomagnesemia, occurs when magnesium levels become abnormally low. While true deficiency is relatively uncommon in healthy people, many individuals consume less magnesium than recommended, which may gradually reduce the body's magnesium stores over time.¹²",

    symptoms: [
        "Loss of appetite.¹",
        "Fatigue or weakness.¹",
        "Muscle cramps or muscle spasms.¹",
        "Tingling or numbness.¹",
        "Abnormal heart rhythms in severe cases.¹²",
    ],

    causes: [
        "Low dietary intake over an extended period.¹",
        "Gastrointestinal disorders that reduce nutrient absorption.¹",
        "Certain medications, including some diuretics and proton pump inhibitors.¹",
        "Alcohol use disorder.¹",
        "Poorly controlled type 2 diabetes or certain kidney disorders.¹²",
    ],

    note:
        "Anyone experiencing persistent symptoms or concerned about magnesium status should consult a healthcare professional. Blood magnesium levels do not always reflect total body magnesium stores, so medical evaluation may involve multiple factors.¹²",
};

const excessIntake = {
    title: "Can You Get Too Much Magnesium?",

    introduction:
        "Obtaining excessive magnesium from foods is uncommon because healthy kidneys efficiently remove surplus magnesium. Most cases of excess magnesium are associated with supplements or medications containing magnesium, particularly in people with impaired kidney function.¹²",

    symptoms: [
        "Diarrhea, especially from magnesium supplements.¹",
        "Nausea or abdominal discomfort.¹",
        "Low blood pressure in more severe cases.¹",
        "Muscle weakness.¹",
        "Abnormal heart rhythm when blood magnesium becomes dangerously high.¹²",
    ],

    riskFactors: [
        "High-dose magnesium supplements.¹",
        "Magnesium-containing laxatives or antacids used excessively.¹",
        "Chronic kidney disease.¹²",
        "Reduced kidney function associated with aging or illness.¹",
    ],

    recommendation:
        "For most healthy individuals, magnesium obtained naturally from foods is considered safe. Supplements should be used according to healthcare guidance or product recommendations, especially by people with kidney disease.¹²",
};

const atRiskGroups = {
    title: "Who Should Pay Special Attention to Magnesium?",

    introduction:
        "Although magnesium is widely available in foods, certain groups are more likely to have inadequate intake or experience magnesium deficiency because of medical conditions, medications, or increased losses.¹²",

    groups: [
        {
            title: "Older Adults",
            description:
                "Older adults may consume less magnesium, absorb it less efficiently, or take medications that influence magnesium balance.¹²",
        },
        {
            title: "People with Gastrointestinal Disorders",
            description:
                "Conditions such as Crohn's disease or celiac disease may reduce magnesium absorption over time.¹",
        },
        {
            title: "People with Type 2 Diabetes",
            description:
                "Poorly controlled diabetes can increase urinary magnesium losses, making deficiency more likely.¹",
        },
        {
            title: "People Taking Certain Medications",
            description:
                "Long-term use of some diuretics, proton pump inhibitors, or other medications may contribute to reduced magnesium levels.¹",
        },
        {
            title: "People with Alcohol Use Disorder",
            description:
                "Excessive alcohol consumption may reduce magnesium absorption and increase magnesium losses.¹",
        },
        {
            title: "Individuals with Diets Low in Whole Foods",
            description:
                "People who consume few nuts, seeds, legumes, whole grains, and leafy vegetables may have difficulty meeting recommended magnesium intake.¹⁴",
        },
    ],

    note:
        "A balanced diet rich in minimally processed foods is the preferred way to obtain magnesium. Healthcare professionals may recommend supplements for specific individuals when appropriate.¹²",
};
const faq = {
    title: "Frequently Asked Questions",

    questions: [
        {
            question: "Why is magnesium important?",
            answer:
                "Magnesium participates in more than 300 enzymatic reactions throughout the body. It supports energy production, muscle function, nerve signaling, protein synthesis, bone health, and normal heart rhythm.¹²",
        },
        {
            question: "Can I get enough magnesium from food?",
            answer:
                "Yes. Most healthy people can meet their magnesium needs by consuming a balanced diet that includes nuts, seeds, legumes, whole grains, leafy green vegetables, and other magnesium-rich foods.¹²⁴",
        },
        {
            question: "Do magnesium supplements improve sleep?",
            answer:
                "Magnesium contributes to normal nervous system and muscle function, and researchers continue to study its potential role in sleep quality. Current evidence does not support recommending magnesium supplements for better sleep in the general population without an identified deficiency or medical indication.¹",
        },
        {
            question: "Can too much magnesium be harmful?",
            answer:
                "Magnesium from foods is generally safe because healthy kidneys remove excess amounts. However, excessive intake from supplements or medications can cause side effects and, in severe cases, serious health problems—particularly in people with impaired kidney function.¹²",
        },
        {
            question: "Which foods are naturally high in magnesium?",
            answer:
                "Pumpkin seeds, chia seeds, almonds, spinach, legumes, whole grains, and dark chocolate are among the richest natural dietary sources of magnesium.⁴",
        },
        {
            question: "Should everyone take a magnesium supplement?",
            answer:
                "Not necessarily. Most healthy individuals can obtain enough magnesium through a varied diet. Supplements may be appropriate for certain people based on medical advice, dietary intake, or underlying health conditions.¹²",
        },
    ],
};

const scientificReferences = {
    title: "Scientific References",

    description:
        "The information presented on this page is based on guidance and publications from internationally recognized health and nutrition organizations.",

    references: [
        {
            id: 1,
            title: "Magnesium - Health Professional Fact Sheet",
            organization:
                "National Institutes of Health (NIH), Office of Dietary Supplements",
            url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/",
        },
        {
            id: 2,
            title: "Dietary Reference Intakes for Calcium and Vitamin D",
            organization:
                "National Academies of Sciences, Engineering, and Medicine",
            url: "https://nap.nationalacademies.org/catalog/13050/dietary-reference-intakes-for-calcium-and-vitamin-d",
        },
        {
            id: 3,
            title: "Healthy Diet",
            organization:
                "World Health Organization (WHO)",
            url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
        },
        {
            id: 4,
            title: "FoodData Central",
            organization:
                "United States Department of Agriculture (USDA)",
            url: "https://fdc.nal.usda.gov/",
        },
        {
            id: 5,
            title: "Heart-Healthy Living",
            organization:
                "American Heart Association (AHA)",
            url: "https://www.heart.org/",
        },
    ],
};

export default {
    hero,
    quickFacts,
    overview,
    benefits,
    dailyRequirements,
    foodSources,
    deficiency,
    excessIntake,
    atRiskGroups,
    faq,
    scientificReferences,
};