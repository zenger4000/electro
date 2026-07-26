"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    getCompareFoods,
    removeCompareFood,
    clearCompareFoods,
} from "@/app/lib/compare";


export default function CompareTray() {

    const [foods, setFoods] = useState([]);
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);


    function refreshFoods() {
        setFoods(getCompareFoods());
    }


    useEffect(() => {

        setMounted(true);
        refreshFoods();

        window.addEventListener(
            "compareUpdated",
            refreshFoods
        );

        return () => {
            window.removeEventListener(
                "compareUpdated",
                refreshFoods
            );
        };

    }, []);


    function handleRemove(fdcId) {

        removeCompareFood(fdcId);

        window.dispatchEvent(
            new Event("compareUpdated")
        );
    }


    function handleClear() {

        clearCompareFoods();

        setOpen(false);

        window.dispatchEvent(
            new Event("compareUpdated")
        );
    }


    if (!mounted) {
        return null;
    }


    const compareUrl =
        foods.length === 2
            ? `/compare?food1=${foods[0].fdcId}&food2=${foods[1].fdcId}`
            : "#";


    return (

        <div
            className={`
                w-fit
                min-h-[200px]
                max-h-[200px]
                fixed
                right-0
                top-3/4
                z-50
                -translate-y-1/2
                transition-transform
                duration-500
                ease-in-out
                ${open
                    ? "translate-x-0"
                    : "translate-x-[calc(100%-3rem)]"
                }
            `}
        >

            <div className="flex">

                {/* Handle */}

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="
                        flex
                        shrink-0
                        w-12
                        h-28
                        text-sm
                        items-center
                        justify-center
                        rounded-l-xl
                        bg-slate-900
                        
                        font-semibold
                        text-white
                        shadow-2xl
                        transition
                        hover:bg-slate-700
                    "
                    aria-label={
                        open
                            ? "Close comparison tray"
                            : "Open comparison tray"
                    }
                >

                    <span
                        className="
                            [writing-mode:vertical-rl]
                            rotate-180
                            whitespace-nowrap
                        "
                    >
                        Compare
                    </span>

                </button>


                {/* Tray */}

                <div
                    className="
                        w-[min(85vw,400px)]
                        
                        border
                        border-slate-200
                        bg-white
                        p-5
                        shadow-2xl
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="font-semibold text-slate-800">
                            Compare Foods
                        </p>

                        <button
                            type="button"
                            onClick={handleClear}
                            className="
                                text-xs
                                font-medium
                                text-slate-400
                                transition
                                hover:text-red-500
                            "
                        >
                            Clear
                        </button>

                    </div>


                    <div className="mt-4 flex flex-col gap-3">

    {foods.length === 0 && (

        <div
            className="
                rounded-xl
                border
                border-dashed
                border-slate-300
                px-4
                py-6
                text-center
                text-sm
                text-slate-400
            "
        >
            Add two foods to compare
        </div>

    )}


    {foods.map(food => (

        <div
            key={food.fdcId}
            className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-slate-100
                px-3
                py-2.5
            "
        >

            <span className="truncate text-sm font-medium text-slate-700">
                {food.description}
            </span>

            <button
                type="button"
                onClick={() => handleRemove(food.fdcId)}
                className="
                    ml-2
                    shrink-0
                    text-lg
                    leading-none
                    text-slate-400
                    transition
                    hover:text-red-500
                "
                aria-label={`Remove ${food.description}`}
            >
                ×
            </button>

        </div>

    ))}


    {foods.length === 1 && (

        <div
            className="
                rounded-xl
                border
                border-dashed
                border-slate-300
                px-3
                py-2.5
                text-center
                text-sm
                text-slate-400
            "
        >
            Add another food to compare
        </div>

    )}


    <Link
        href={compareUrl}
        onClick={event => {

            if (foods.length !== 2) {
                event.preventDefault();
            }

        }}
        className={`
            mt-1
            rounded-xl
            px-5
            py-2.5
            text-center
            text-sm
            font-semibold
            transition
            ${
                foods.length === 2
                    ? "bg-slate-900 text-white hover:bg-slate-700"
                    : "pointer-events-none bg-slate-200 text-slate-400"
            }
        `}
    >
        Compare
    </Link>

</div>

                </div>

            </div>

        </div>

    );
}