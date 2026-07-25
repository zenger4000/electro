"use client";

import { useEffect, useState } from "react";
import {
    addCompareFood,
    getCompareFoods,
    removeCompareFood,
} from "@/app/lib/compare";

export default function CompareButton({ food }) {

    const [added, setAdded] = useState(false);

    useEffect(() => {
        const foods = getCompareFoods();

        setAdded(
            foods.some(
                item =>
                    String(item.fdcId) === String(food.fdcId)
            )
        );
    }, [food.fdcId]);


    function handleToggle() {

        if (added) {
            removeCompareFood(food.fdcId);
            setAdded(false);

            window.dispatchEvent(
                new Event("compareUpdated")
            );

            return;
        }

        const updatedFoods = addCompareFood({
            fdcId: food.fdcId,
            description: food.description,
        });

        const wasAdded = updatedFoods.some(
            item =>
                String(item.fdcId) === String(food.fdcId)
        );

        setAdded(wasAdded);

        window.dispatchEvent(
            new Event("compareUpdated")
        );
    }


    return (
        <button
            type="button"
            onClick={handleToggle}
            className={`rounded-xl px-5 py-2.5 font-medium transition ${
                added
                    ? "bg-emerald-100 text-emerald-700 hover:bg-red-100 hover:text-red-600"
                    : "bg-slate-900 text-white hover:bg-slate-700"
            }`}
        >
            {added
                ? "Added to Compare"
                : "Add to Compare"}
        </button>
    );
}