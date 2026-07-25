const STORAGE_KEY = "electrolyfe-compare";

export function getCompareFoods() {
    if (typeof window === "undefined") {
        return [];
    }

    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return [];
        }

        const parsed = JSON.parse(stored);

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Failed to read comparison foods:", error);
        return [];
    }
}


export function addCompareFood(food) {
    if (typeof window === "undefined") {
        return [];
    }

    const currentFoods = getCompareFoods();

    // Prevent duplicates
    if (
        currentFoods.some(
            item => String(item.fdcId) === String(food.fdcId)
        )
    ) {
        return currentFoods;
    }

    // Maximum of two foods
    if (currentFoods.length >= 2) {
        return currentFoods;
    }

    const updatedFoods = [
        ...currentFoods,
        {
            fdcId: food.fdcId,
            description: food.description,
        },
    ];

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedFoods)
    );

    return updatedFoods;
}


export function removeCompareFood(fdcId) {
    if (typeof window === "undefined") {
        return [];
    }

    const currentFoods = getCompareFoods();

    const updatedFoods = currentFoods.filter(
        food => String(food.fdcId) !== String(fdcId)
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedFoods)
    );

    return updatedFoods;
}


export function clearCompareFoods() {
    if (typeof window === "undefined") {
        return;
    }

    localStorage.removeItem(STORAGE_KEY);
}