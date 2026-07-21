const hero = {
    name: "Calcium",
    symbol: "Ca",
    color: "#e6cac6",
    url: "/../public/calcium.png",

    description:
        "An essential mineral and electrolyte best known for building and maintaining strong bones and teeth. Calcium also supports muscle contraction, nerve signaling, blood clotting, and normal heart function.¹²",

    dailyValue:
        "1,000 mg/day (Most Adults)",
};

const quickFacts = {
    facts: [
        {
            title: "Classification",
            value: "Essential Mineral & Electrolyte",
        },
        {
            title: "Chemical Symbol",
            value: "Ca",
        },
        {
            title: "Primary Functions",
            value:
                "Bone Health • Muscle Contraction • Nerve Signaling • Blood Clotting",
        },
        {
            title: "Main Storage",
            value:
                "Approximately 99% Stored in Bones and Teeth",
        },
        {
            title: "Recommended Intake",
            value:
                "1,000 mg/day (Most Adults)",
        },
        {
            title: "Rich Food Sources",
            value:
                "Milk • Yogurt • Cheese • Sardines • Kale",
        },
    ],
};

const overview = {
    title: "What Is Calcium?",

    paragraphs: [
        "Calcium is the most abundant mineral in the human body. About 99% of total body calcium is stored in bones and teeth, where it provides structural strength and serves as a reserve that helps maintain normal calcium levels in the bloodstream.¹²",

        "The remaining calcium circulates throughout the body and plays essential roles in muscle contraction, nerve impulse transmission, blood clotting, hormone secretion, and maintaining a normal heartbeat.¹",

        "Because the body cannot produce calcium, it must be obtained through food or, when appropriate, dietary supplements. Vitamin D is also essential because it helps the body absorb calcium efficiently from the digestive tract.¹²",
    ],
};
const benefits = {
    title: "Health Benefits",

    benefits: [
        {
            title: "Builds and Maintains Strong Bones",
            description:
                "About 99% of the body's calcium is stored in bones and teeth. Adequate calcium intake throughout life helps build bone mass and maintain normal bone health. Calcium works closely with vitamin D, which improves calcium absorption.¹²",
        },
        {
            title: "Supports Muscle Contraction",
            description:
                "Calcium enables muscles to contract by allowing muscle fibers to respond to nerve stimulation. Magnesium helps muscles relax afterward, making the two minerals important partners in normal muscle function.¹²",
        },
        {
            title: "Essential for Nerve Signaling",
            description:
                "Calcium helps nerve cells communicate by triggering the release of neurotransmitters at nerve endings, allowing signals to travel throughout the body.¹",
        },
        {
            title: "Supports Normal Blood Clotting",
            description:
                "Calcium participates in several steps of the blood clotting process, helping the body respond appropriately to injury and prevent excessive bleeding.¹",
        },
        {
            title: "Supports Heart Function",
            description:
                "Calcium contributes to the electrical and mechanical activity of the heart, helping maintain normal cardiac muscle contraction alongside sodium, potassium, and magnesium.¹⁵",
        },
        {
            title: "Supports Cellular Communication",
            description:
                "Beyond bones and muscles, calcium acts as an intracellular signaling molecule that helps regulate numerous cellular processes throughout the body.¹",
        },
    ],
};

const dailyRequirements = {
    title: "Recommended Daily Intake",

    description:
        "Calcium requirements vary throughout life, with increased needs during adolescence and later adulthood as bone growth and maintenance become especially important.¹²",

    rows: [
        {
            group: "Adults (19–50 years)",
            amount: "1,000 mg/day",
        },
        {
            group: "Men (51–70 years)",
            amount: "1,000 mg/day",
        },
        {
            group: "Women (51+ years)",
            amount: "1,200 mg/day",
        },
        {
            group: "Adults (71+ years)",
            amount: "1,200 mg/day",
        },
        {
            group: "Pregnant & Breastfeeding Adults",
            amount: "1,000 mg/day",
        },
    ],

    note:
        "Meeting calcium needs through food is generally preferred. Adequate vitamin D is important because it helps the body absorb dietary calcium efficiently.¹²",
};

const foodSources = {
    title: "Calcium-Rich Foods",

    description:
        "Dairy products are among the richest and most well-known dietary sources of calcium, but many fish, legumes, leafy green vegetables, and fortified foods also contribute meaningful amounts.⁴",

    foods: [
        {
            name: "Parmesan Cheese",
            amount: "Approx. 1,180 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Sardines (with Bones)",
            amount: "Approx. 380 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Plain Yogurt",
            amount: "Approx. 180 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Milk",
            amount: "Approx. 120 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Kale",
            amount: "Approx. 150 mg / 100 g",
            fdcId: null,
        },
        {
            name: "Calcium-Fortified Plant Milk",
            amount: "Varies by Product",
            fdcId: null,
        },
    ],
};
const deficiency = {
    title: "Calcium Deficiency (Hypocalcemia)",

    introduction:
        "Calcium deficiency, known medically as hypocalcemia, occurs when blood calcium levels become abnormally low. While the body carefully regulates blood calcium by drawing calcium from bones when necessary, prolonged inadequate intake or certain medical conditions can negatively affect bone health over time.¹²",

    symptoms: [
        "Muscle cramps or muscle spasms.¹",
        "Numbness or tingling in the fingers or around the mouth.¹",
        "Fatigue.¹",
        "Abnormal heart rhythms in severe cases.¹",
        "Seizures in severe or prolonged hypocalcemia.¹²",
    ],

    causes: [
        "Inadequate dietary calcium intake over time.¹",
        "Vitamin D deficiency, reducing calcium absorption.¹²",
        "Certain kidney disorders.¹",
        "Parathyroid disorders affecting calcium regulation.¹",
        "Some medications that interfere with calcium metabolism.¹",
    ],

    note:
        "Persistent symptoms or concerns about calcium status should be evaluated by a healthcare professional. Bone density testing and laboratory evaluation may be appropriate in some situations.¹²",
};

const excessIntake = {
    title: "Can You Get Too Much Calcium?",

    introduction:
        "Yes. While calcium obtained naturally from foods is generally safe, excessive calcium intake from supplements may increase the risk of unwanted side effects in some individuals.¹²",

    symptoms: [
        "Constipation.¹",
        "Nausea or abdominal discomfort.¹",
        "Kidney stones in susceptible individuals.¹²",
        "Elevated blood calcium levels (hypercalcemia) with excessive intake or certain medical conditions.¹",
    ],

    riskFactors: [
        "High-dose calcium supplements taken without medical advice.¹",
        "Certain endocrine disorders.¹",
        "Some cancers or kidney diseases.¹",
        "Combining multiple calcium-containing supplements unnecessarily.¹",
    ],

    recommendation:
        "Most healthy people can meet their calcium needs through food. Supplements should be used according to healthcare advice, particularly when combined with vitamin D or other medications.¹²",
};

const atRiskGroups = {
    title: "Who Should Pay Special Attention to Calcium?",

    introduction:
        "Certain groups may have increased calcium requirements or a greater risk of inadequate calcium intake because of age, health conditions, or dietary patterns.¹²",

    groups: [
        {
            title: "Postmenopausal Women",
            description:
                "Bone loss accelerates after menopause because of hormonal changes, increasing the importance of adequate calcium and vitamin D intake.¹²",
        },
        {
            title: "Older Adults",
            description:
                "Calcium absorption generally decreases with age, while the risk of osteoporosis increases.¹²",
        },
        {
            title: "People Avoiding Dairy Products",
            description:
                "Individuals who consume little or no dairy may benefit from calcium-rich plant foods or fortified foods to help meet daily requirements.¹⁴",
        },
        {
            title: "People with Vitamin D Deficiency",
            description:
                "Without sufficient vitamin D, calcium absorption from the digestive tract becomes less efficient.¹²",
        },
        {
            title: "Individuals with Osteoporosis or Osteopenia",
            description:
                "Healthcare professionals often evaluate calcium intake as part of an overall bone-health strategy.¹²",
        },
        {
            title: "Growing Children and Adolescents",
            description:
                "Periods of rapid skeletal growth increase calcium requirements to support normal bone development.¹²",
        },
    ],

    note:
        "Maintaining adequate calcium intake, regular physical activity, and sufficient vitamin D all contribute to lifelong bone health.¹²",
};
const faq = {
    title: "Frequently Asked Questions",

    questions: [
        {
            question: "Why is calcium important?",
            answer:
                "Calcium is essential for building and maintaining strong bones and teeth. It also supports muscle contraction, nerve signaling, blood clotting, and normal heart function.¹²",
        },
        {
            question: "Is dairy the only good source of calcium?",
            answer:
                "No. While dairy products are among the richest sources of calcium, many other foods—including sardines with bones, leafy green vegetables, calcium-fortified foods, tofu made with calcium salts, and some legumes—can also contribute to daily calcium intake.¹⁴",
        },
        {
            question: "Why is vitamin D important for calcium?",
            answer:
                "Vitamin D helps the body absorb calcium from the digestive tract. Without adequate vitamin D, calcium absorption becomes less efficient, even if dietary calcium intake is sufficient.¹²",
        },
        {
            question: "Can I get too much calcium?",
            answer:
                "Yes. Calcium obtained naturally from foods is generally safe, but excessive calcium from supplements may increase the risk of side effects such as constipation or kidney stones in susceptible individuals.¹²",
        },
        {
            question: "Should everyone take a calcium supplement?",
            answer:
                "Not necessarily. Many people can meet their calcium needs through a balanced diet. Supplements may be appropriate for certain individuals based on age, dietary intake, medical conditions, or healthcare advice.¹²",
        },
        {
            question: "Does calcium only affect bones?",
            answer:
                "No. Although most calcium is stored in bones and teeth, calcium is also essential for muscle contraction, nerve communication, blood clotting, hormone secretion, and maintaining normal heart function.¹",
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
            title: "Calcium - Health Professional Fact Sheet",
            organization:
                "National Institutes of Health (NIH), Office of Dietary Supplements",
            url: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
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