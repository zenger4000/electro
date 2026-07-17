// ==========================
// Generic Helpers
// ==========================

export function getNutrient(food, nutrientName) {
    return food.foodNutrients?.find(
        nutrient =>
            nutrient.nutrient?.name?.toLowerCase() === nutrientName.toLowerCase()
    );
}

export function getAmount(food, nutrientName) {
    const nutrient = getNutrient(food, nutrientName);
    
    if (nutrient?.amount == null) return null;
    return Math.round(nutrient.amount * 100) / 100;
}

export function getUnit(food, nutrientName) {
    const nutrient = getNutrient(food, nutrientName);

    return nutrient?.nutrient?.unitName ?? "";
}


// ==========================
// Quick Stats
// ==========================

export const getCalories = food =>
    getAmount(food, "Energy");

export const getProtein = food =>
    getAmount(food, "Protein");

export const getFat = food =>
    getAmount(food, "Total lipid (fat)");

export const getCarbs = food =>
    getAmount(food, "Carbohydrate, by difference");

export const getSugars = food =>
    getAmount(food, "Total Sugars");

// ==========================
// Electrolytes
// ==========================

export function getElectrolytes(food) {

    return [
        ["Potassium", "Potassium, K"],
        ["Sodium", "Sodium, Na"],
        ["Calcium", "Calcium, Ca"],
        ["Magnesium", "Magnesium, Mg"],
        ["Chloride", "Chloride, Cl"],
        ["Phosphorus", "Phosphorus, P"],
    ]
        .map(([name, nutrientName]) => ({
            name,
            amount: getAmount(food, nutrientName),
            unit: getUnit(food, nutrientName),
        }))
        .filter(item => item.amount !== null);

}

// ==========================
// Vitamins
// ==========================

export function getVitamins(food) {

    return [
        "Vitamin A, RAE",
        "Vitamin C, total ascorbic acid",
        "Vitamin D (D2 + D3)",
        "Vitamin E (alpha-tocopherol)",
        "Vitamin K (phylloquinone)",
        "Thiamin",
        "Riboflavin",
        "Niacin",
        "Vitamin B-6",
        "Vitamin B-12",
        "Folate, total",
    ]
        .map(name => ({
            name,
            amount: getAmount(food, name),
            unit: getUnit(food, name),
        }))
        .filter(item => item.amount !== null);

}

// ==========================
// Minerals
// ==========================

export function getMinerals(food) {

    return [
        "Iron, Fe",
        "Zinc, Zn",
        "Copper, Cu",
        "Manganese, Mn",
        "Selenium, Se",
    ]
        .map(name => ({
            name,
            amount: getAmount(food, name),
            unit: getUnit(food, name),
        }))
        .filter(item => item.amount !== null);

}

export function hasFullElectrolyteProfile(food) {
    return [
        "Potassium, K",
        "Sodium, Na",
        "Calcium, Ca",
        "Magnesium, Mg",
    ].every(nutrient => getSearchNutrient(food, nutrient));
}

export function getSearchNutrient(food, nutrientName) {
    return food.foodNutrients?.find(
        nutrient =>
            nutrient.nutrientName?.toLowerCase() === nutrientName.toLowerCase()
    );
}

export function getSearchAmount(food, nutrientName) {
    return food.foodNutrients?.find(
        nutrient =>
            nutrient.nutrientName?.toLowerCase() === nutrientName.toLowerCase()
    )?.value ?? null
}

