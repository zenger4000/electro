const hero = {
    name: "Sodium",
    symbol: "Na",
    color: "#9d51cd",
    url: "/../public/sodium.png",

    description:
        "An essential mineral and electrolyte that helps regulate fluid balance, supports nerve signaling, enables muscle contraction, and contributes to maintaining normal blood pressure and blood volume.¹²",

    dailyValue:
        "1,500 mg/day (Adequate Intake for Adults)",
};

const quickFacts = {
    facts: [
        {
            title: "Chemical Forms",
            value: "Na - Na₃C₆H₅O₇ - NaCl",
        },
        {
            title: "Primary Functions",
            value:
                "Fluid Balance • Nerve Signaling • Muscle Contraction • Blood Pressure Regulation",
        },
        {
            title: "Main Storage",
            value:
                "Primarily in Extracellular Fluid (Outside Cells)",
        },
        {
            title: "Adequate Intake",
            value: "1,500 mg/day (Adults 19–50 years)",
        },
        {
            title: "Common Food Sources",
            value:
                "Table Salt • Cheese • Bread • Processed Foods • Seafood",
        },
    ],
};

const overview = {
    title: "What Is Sodium?",

    paragraphs: [
        "Sodium is an essential mineral and the body's primary extracellular electrolyte. Unlike potassium, which is found mainly inside cells, sodium is concentrated in the fluid surrounding cells, where it plays a central role in maintaining fluid balance and blood volume.¹²",

        "Sodium is required for normal nerve impulse transmission, muscle contraction, and the movement of nutrients and water across cell membranes. Because of these vital functions, the body carefully regulates sodium concentrations within a narrow range.¹",

        "Although sodium is essential for life, most people consume considerably more than recommended, largely because sodium is widely added to processed and packaged foods rather than occurring naturally in large amounts.²³",
    ],
};
const benefits = {
    title: "Health Benefits",
    color: "#9d51cd60",

    benefits: [
        {
            title: "Maintains Fluid Balance",
            description:
                "Sodium is the body's primary extracellular electrolyte and plays a vital role in regulating the amount of water inside and outside cells, helping maintain normal hydration and blood volume.¹²",
        },
        {
            title: "Supports Nerve Signaling",
            description:
                "Electrical impulses traveling along nerves depend on the movement of sodium and potassium across cell membranes, allowing communication between the brain, muscles, and organs.¹",
        },
        {
            title: "Essential for Muscle Contraction",
            description:
                "Normal skeletal, smooth, and cardiac muscle contraction requires sodium working together with potassium and calcium to generate electrical activity.¹",
        },
        {
            title: "Helps Maintain Blood Pressure",
            description:
                "Sodium contributes to maintaining normal blood pressure and circulation by regulating extracellular fluid volume. Both insufficient and excessive sodium intake can have important health consequences.¹²",
        },
        {
            title: "Supports Nutrient Absorption",
            description:
                "Sodium helps transport nutrients such as glucose and certain amino acids across the intestinal wall, allowing efficient absorption from the digestive tract.¹",
        },
        {
            title: "Supports Acid–Base Balance",
            description:
                "Along with other electrolytes, sodium helps maintain the body's acid-base balance, supporting normal cellular function and metabolism.¹",
        },
    ],
};

const dailyRequirements = {
    title: "Recommended Daily Intake",

    description:
        "Unlike many nutrients, sodium recommendations include both an Adequate Intake (AI) and guidance to limit excessive consumption. Most healthy adults require only modest amounts of sodium, yet average intake in many countries exceeds recommended levels.²³",

    rows: [
        {
            group: "Adults (19–50 years)",
            amount: "1,500 mg/day (AI)",
        },
        {
            group: "Adults (51–70 years)",
            amount: "1,300 mg/day (AI)",
        },
        {
            group: "Adults (71+ years)",
            amount: "1,200 mg/day (AI)",
        },
        {
            group: "Recommended Upper Limit",
            amount: "2,300 mg/day",
        },
    ],

    note:
        "Recommendations are based on the National Academies Dietary Reference Intakes. The World Health Organization also recommends limiting sodium intake to reduce the risk of high blood pressure and cardiovascular disease.²³",
};

const foodSources = {
    title: "Common Sources of Sodium",

    description:
        "While sodium occurs naturally in many foods, the majority of dietary sodium comes from salt added during food processing, restaurant meals, and packaged foods rather than from naturally occurring sources.³⁴",

    foods: [
        {
            name: "Table Salt",
            amount: "38,758 mg / 100 g",
            fdcId: 173468,
            img: "/salt.png",
        },
        {
            name: "Soy Sauce",
            amount: "Approx. 5,500–7,000 mg / 100 g",
            fdcId: 2710246,
            img: "/soy.png",
        },
        {
            name: "Parmesan Cheese",
            amount: "Approx. 1,800 mg / 100 g",
            fdcId: 171247,
            img: "/cheese.png",
        },
        {
            name: "Pickled Olives",
            amount: "Approx. 1,500 mg / 100 g",
            fdcId: 169096,
            img: "/olives.png",
        },
        {
            name: "Bread",
            amount: "Varies by product",
            fdcId: 172686,
            img: "/bread.png",
        },
        {
            name: "Canned Soups",
            amount: "Often High",
            fdcId: 172881,
            img: "/soup.png",
        },
    ],
};
const deficiency = {
    title: "Sodium Deficiency (Hyponatremia)",

    introduction:
        "Sodium deficiency, known medically as hyponatremia, occurs when the concentration of sodium in the blood becomes abnormally low. It is usually caused by an imbalance of water and sodium rather than inadequate dietary sodium intake alone.¹²",

    symptoms: [
        "Headache and nausea.¹",
        "Fatigue or low energy.¹",
        "Muscle cramps or weakness.¹",
        "Confusion or difficulty concentrating.¹",
        "Seizures or loss of consciousness in severe cases.¹²",
    ],

    causes: [
        "Excessive water intake that dilutes blood sodium.¹",
        "Prolonged vomiting or diarrhea.¹",
        "Heavy sweating with inadequate electrolyte replacement.¹",
        "Certain medications such as diuretics.¹",
        "Kidney, liver, or heart disorders that affect fluid balance.¹²",
    ],

    note:
        "Hyponatremia can become a medical emergency. Anyone experiencing severe neurological symptoms or suspected sodium imbalance should seek prompt medical evaluation.¹²",
};

const excessIntake = {
    title: "Can You Consume Too Much Sodium?",

    introduction:
        "Yes. While sodium is essential for life, consistently consuming more sodium than recommended may increase the risk of high blood pressure and cardiovascular disease in many people.²³",

    symptoms: [
        "Increased thirst.¹",
        "Temporary fluid retention or swelling.¹",
        "Elevated blood pressure over time in susceptible individuals.²³",
        "Greater risk of cardiovascular disease with long-term excessive intake.³⁵",
    ],

    riskFactors: [
        "Frequent consumption of processed or packaged foods.³",
        "Restaurant and fast-food meals.³",
        "Regular use of large amounts of table salt.¹",
        "Certain health conditions that increase sodium sensitivity.¹²",
    ],

    recommendation:
        "Rather than eliminating sodium, aim for a balanced intake by limiting highly processed foods, reading nutrition labels, and choosing fresh foods more often. Increasing potassium-rich foods may also help support healthy blood pressure as part of an overall healthy dietary pattern.²³⁵",
};

const atRiskGroups = {
    title: "Who Should Pay Special Attention to Sodium?",

    introduction:
        "Although everyone needs sodium, some groups are more likely to experience health problems related to either excessive sodium intake or abnormal sodium balance.¹²",

    groups: [
        {
            title: "People with High Blood Pressure",
            description:
                "Reducing excessive sodium intake may help support healthy blood pressure when recommended by a healthcare professional.²³⁵",
        },
        {
            title: "People with Heart Failure",
            description:
                "Fluid and sodium intake may require careful management under medical supervision.¹",
        },
        {
            title: "People with Chronic Kidney Disease",
            description:
                "Kidney disease can impair the body's ability to regulate sodium and fluid balance.¹²",
        },
        {
            title: "Endurance Athletes",
            description:
                "Long-duration exercise accompanied by heavy sweating may increase sodium losses, particularly if large amounts of plain water are consumed without electrolyte replacement.¹",
        },
        {
            title: "Older Adults",
            description:
                "Older adults may be more susceptible to sodium imbalance because of medications or underlying medical conditions.¹²",
        },
        {
            title: "People Following Highly Processed Diets",
            description:
                "Individuals who frequently consume packaged foods often exceed recommended sodium intake without realizing it.³⁴",
        },
    ],

    note:
        "Most people do not need to eliminate sodium from their diets. Instead, maintaining a balanced intake while emphasizing minimally processed foods is generally the healthiest approach.²³",
};
const faq = {
    title: "Frequently Asked Questions",

    questions: [
        {
            question: "Is sodium the same as salt?",
            answer:
                "No. Sodium is a mineral, while table salt (sodium chloride) is a compound made of approximately 40% sodium and 60% chloride. Nutrition labels report the amount of sodium, not salt.¹",
        },
        {
            question: "Why does the body need sodium?",
            answer:
                "Sodium is essential for maintaining fluid balance, transmitting nerve impulses, supporting muscle contraction, and regulating blood volume. Without adequate sodium, normal body functions cannot be maintained.¹²",
        },
        {
            question: "Can eating too much sodium be harmful?",
            answer:
                "Consistently consuming excessive sodium may contribute to high blood pressure and increase the risk of cardiovascular disease in many people, particularly those who are sodium-sensitive.²³⁵",
        },
        {
            question: "Which foods contain the most sodium?",
            answer:
                "Most dietary sodium comes from processed and packaged foods, restaurant meals, cured meats, cheeses, sauces, breads, and canned products rather than naturally occurring sodium in fresh foods.³⁴",
        },
        {
            question: "Should athletes consume more sodium?",
            answer:
                "People participating in prolonged endurance exercise or working in hot environments may lose significant amounts of sodium through sweat. Their sodium needs can differ from those of the general population depending on the duration and intensity of activity.¹",
        },
        {
            question: "Should everyone follow a low-sodium diet?",
            answer:
                "No. Sodium is an essential nutrient. The goal is generally to avoid excessive intake rather than eliminate sodium altogether. Individual recommendations may vary depending on age, health conditions, medications, and advice from a healthcare professional.¹²",
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
            title: "Sodium - Health Professional Fact Sheet",
            organization:
                "National Institutes of Health (NIH), Office of Dietary Supplements",
            url: "https://ods.od.nih.gov/factsheets/Sodium-HealthProfessional/",
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
            title: "Guideline: Sodium Intake for Adults and Children",
            organization:
                "World Health Organization (WHO)",
            url: "https://www.who.int/publications/i/item/9789241504836",
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
            title: "Shaking the Salt Habit to Lower High Blood Pressure",
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