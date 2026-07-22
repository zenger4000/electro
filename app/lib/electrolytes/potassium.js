const hero = {
    name: "Potassium",
    symbol: "K",
    color: "#e22c37",
    url: "/../public/potassium.png",

    description:
        "An essential mineral and electrolyte that helps regulate fluid balance, transmit nerve signals, support muscle contraction, and maintain normal heart function. Nearly all potassium in the body is stored inside cells, where it plays a critical role in countless physiological processes.¹²",

    dailyValue:
        "3,400 mg/day (Adult Men) • 2,600 mg/day (Adult Women)",
};

const quickFacts = {
    facts: [
        {
            title: "Classification",
            value: "Essential Mineral & Electrolyte",
        },
        {
            title: "Chemical Symbol",
            value: "K",
        },
        {
            title: "Primary Functions",
            value:
                "Fluid Balance • Nerve Signaling • Muscle Contraction • Heart Function",
        },
        {
            title: "Main Storage",
            value: "Approximately 98% Inside Cells",
        },
        {
            title: "Recommended Intake",
            value:
                "3,400 mg/day (Adult Men) • 2,600 mg/day (Adult Women)",
        },
        {
            title: "Rich Food Sources",
            value:
                "Potatoes • Spinach • Beans • Avocados • Bananas • Dairy",
        },
    ],
};

const overview = {
    title: "What Is Potassium?",

    paragraphs: [
        "Potassium is an essential mineral and the body's primary intracellular electrolyte. Approximately 98% of total body potassium is found inside cells, where it helps maintain normal fluid balance, generates electrical signals, and supports the healthy function of muscles, nerves, and the heart.¹²",

        "Unlike vitamins, potassium cannot be produced by the body and must be obtained regularly through foods. Fruits, vegetables, legumes, dairy products, and fish are among the most important dietary sources. Diets naturally rich in potassium-containing foods have been associated with improved cardiovascular health and healthy blood pressure in many populations.¹²³",

        "Potassium works closely with sodium to regulate the movement of fluids across cell membranes. This balance is essential for maintaining normal blood pressure, muscle contraction, nerve communication, and many cellular processes throughout the body.¹²",
    ],
};

const benefits = {
    title: "Health Benefits",

    benefits: [
        {
            title: "Supports Normal Heart Function",
            description:
                "Potassium helps generate the electrical impulses that coordinate each heartbeat. Maintaining adequate potassium levels is important for normal cardiac rhythm and overall cardiovascular health.¹²",
        },
        {
            title: "Maintains Fluid Balance",
            description:
                "Working alongside sodium, potassium helps regulate the movement of fluids into and out of cells, supporting hydration and normal cellular function.¹²",
        },
        {
            title: "Essential for Muscle Contraction",
            description:
                "Every muscle contraction—including those of the heart, arms, legs, and digestive tract—depends on a proper balance of potassium inside and outside cells.¹",
        },
        {
            title: "Supports Nerve Signaling",
            description:
                "Potassium enables nerve cells to transmit electrical signals throughout the body, allowing communication between the brain, spinal cord, muscles, and organs.¹",
        },
        {
            title: "Helps Maintain Healthy Blood Pressure",
            description:
                "Diets rich in potassium-containing foods may help offset some of sodium's effects on blood pressure when consumed as part of an overall healthy eating pattern.²³",
        },
        {
            title: "Supports Normal Cellular Function",
            description:
                "Potassium participates in numerous cellular processes, including nutrient transport, enzyme activity, and maintaining the electrical gradient across cell membranes.¹",
        },
    ],
};

const dailyRequirements = {
    title: "Recommended Daily Intake",

    description:
        "Recommended intake values vary according to age, sex, and life stage. The values below represent Adequate Intake (AI) recommendations for healthy individuals.¹²",

    rows: [
        {
            group: "Adult Men (19+ years)",
            amount: "3,400 mg/day",
        },
        {
            group: "Adult Women (19+ years)",
            amount: "2,600 mg/day",
        },
        {
            group: "Pregnant Women",
            amount: "2,900 mg/day",
        },
        {
            group: "Breastfeeding Women",
            amount: "2,800 mg/day",
        },
    ],

    note:
        "These recommendations are based on the National Academies Dietary Reference Intakes and the NIH Office of Dietary Supplements. Individual needs may differ depending on health status and medical advice.¹²",
};

const foodSources = {
    title: "Potassium-Rich Foods",

    description:
        "Whole foods are the preferred source of potassium. Fruits, vegetables, legumes, dairy products, and fish naturally provide potassium together with fiber, vitamins, and other beneficial nutrients.¹⁴",

    foods: [
        {
            name: "Potato, flesh and skin, raw",
            amount: "421 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Spinach, raw",
            amount: "558 mg / 100 g",
            fdcId: null,
        },
        {
            name: "White Beans, mature seeds, raw",
            amount: "561 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Banana, raw",
            amount: "358 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Avocado, raw",
            amount: "485 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Atlantic Salmon, raw",
            amount: "490 mg / 100 g",
            fdcId: null,
        },
    ],
};
const deficiency = {
    title: "Potassium Deficiency (Hypokalemia)",

    introduction:
        "Potassium deficiency, known medically as hypokalemia, occurs when blood potassium levels fall below the normal range. Mild deficiency may produce no noticeable symptoms, while more severe deficiency can interfere with normal muscle, nerve, and heart function.¹²",

    symptoms: [
        "Muscle weakness or unusual fatigue.¹",
        "Muscle cramps or spasms.¹",
        "Constipation caused by reduced intestinal muscle activity.¹",
        "Tingling or numbness.¹",
        "Abnormal heart rhythms in more severe cases.¹²",
    ],

    causes: [
        "Prolonged vomiting or diarrhea.¹",
        "Certain diuretic (water) medications.¹",
        "Excessive sweating combined with inadequate electrolyte replacement.²",
        "Certain kidney disorders.¹",
        "Poor dietary intake alone is rarely the sole cause in otherwise healthy people.¹",
    ],

    note:
        "Anyone experiencing persistent symptoms or concerned about potassium deficiency should consult a healthcare professional. Potassium supplements should only be taken under medical supervision, particularly by people with kidney disease or those taking medications that affect potassium levels.¹²",
};

const excessIntake = {
    title: "Can You Get Too Much Potassium?",

    introduction:
        "High potassium levels in the blood, known as hyperkalemia, are uncommon in healthy individuals because the kidneys normally remove excess potassium. However, certain medical conditions and medications can increase the risk of developing hyperkalemia.¹²",

    symptoms: [
        "Irregular heartbeat or palpitations.¹²",
        "Muscle weakness.¹",
        "Fatigue.¹",
        "Nausea.¹",
        "Severe hyperkalemia may become life-threatening if left untreated.¹²",
    ],

    riskFactors: [
        "Chronic kidney disease.¹²",
        "Potassium supplements taken without medical supervision.¹",
        "Potassium-sparing diuretics or ACE inhibitor medications.¹",
        "Certain endocrine disorders that affect potassium regulation.¹",
    ],

    recommendation:
        "For most healthy people, obtaining potassium from foods is considered safe because the kidneys regulate excess intake efficiently. Individuals with kidney disease or those taking medications that influence potassium balance should seek medical advice before increasing potassium intake or using supplements.¹²",
};

const atRiskGroups = {
    title: "Who Should Pay Special Attention to Potassium?",

    introduction:
        "Although potassium is essential for everyone, some people are more likely to experience abnormal potassium levels because of medical conditions, medications, or increased physiological needs.¹²",

    groups: [
        {
            title: "People Taking Diuretics",
            description:
                "Some diuretic medications increase potassium loss through urine, which may contribute to low potassium levels.¹",
        },
        {
            title: "People with Chronic Kidney Disease",
            description:
                "Reduced kidney function may impair the body's ability to remove excess potassium, increasing the risk of hyperkalemia.¹²",
        },
        {
            title: "Individuals with Frequent Vomiting or Diarrhea",
            description:
                "Significant gastrointestinal fluid losses may reduce potassium stores if electrolytes are not adequately replaced.¹",
        },
        {
            title: "Highly Active Individuals",
            description:
                "People exercising for prolonged periods or working in hot environments lose electrolytes through sweat and should maintain adequate hydration and nutrition.²",
        },
        {
            title: "Pregnant and Breastfeeding Women",
            description:
                "Potassium requirements change during pregnancy and lactation, making a balanced diet especially important.²",
        },
        {
            title: "Older Adults",
            description:
                "Older adults are more likely to have chronic health conditions or take medications that influence potassium balance.¹²",
        },
    ],

    note:
        "Most healthy adults can meet their potassium needs through a varied diet that includes fruits, vegetables, legumes, dairy products, and other minimally processed foods. Individuals with kidney disease or those taking medications that affect potassium balance should follow medical advice regarding potassium intake.¹²",
};
const faq = {
    title: "Frequently Asked Questions",

    questions: [
        {
            question: "What does potassium do in the body?",
            answer:
                "Potassium is an essential electrolyte that helps regulate fluid balance, supports nerve signaling, enables normal muscle contraction, and contributes to maintaining a regular heartbeat.¹²",
        },
        {
            question: "Which foods are highest in potassium?",
            answer:
                "Many fruits, vegetables, legumes, dairy products, and fish naturally provide potassium. Potatoes, spinach, beans, avocados, bananas, and salmon are among the best-known dietary sources.¹⁴",
        },
        {
            question: "Can you get too much potassium from food?",
            answer:
                "For most healthy individuals, the kidneys effectively remove excess potassium obtained from foods. However, people with chronic kidney disease or certain medical conditions may need to limit potassium intake under medical supervision.¹²",
        },
        {
            question: "Is a banana the best source of potassium?",
            answer:
                "Bananas are a good source of potassium, but many foods—including potatoes, beans, spinach, avocados, and dairy products—contain similar or even greater amounts of potassium per serving.¹⁴",
        },
        {
            question: "Does cooking affect potassium content?",
            answer:
                "Yes. Boiling vegetables can reduce their potassium content because some potassium leaches into the cooking water. Other cooking methods generally preserve more potassium.¹",
        },
        {
            question: "Should I take potassium supplements?",
            answer:
                "Most healthy people can obtain enough potassium through a balanced diet. Potassium supplements should only be used under the guidance of a healthcare professional, particularly by people with kidney disease or those taking medications that influence potassium levels.¹²",
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
            title: "Potassium - Health Professional Fact Sheet",
            organization:
                "National Institutes of Health (NIH), Office of Dietary Supplements",
            url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/",
        },
        {
            id: 2,
            title: "Dietary Reference Intakes for Sodium and Potassium",
            organization:
                "National Academies of Sciences, Engineering, and Medicine",
            url: "https://nap.nationalacademies.org/catalog/25353/dietary-reference-intakes-for-sodium-and-potassium",
        },
        {
            id: 3,
            title: "Guideline: Potassium Intake for Adults and Children",
            organization: "World Health Organization (WHO)",
            url: "https://www.who.int/publications/i/item/9789241504829",
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
            title: "Potassium and Your Health",
            organization: "American Heart Association (AHA)",
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