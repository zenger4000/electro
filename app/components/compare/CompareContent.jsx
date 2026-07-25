import Link from "next/link";

import {
    getCalories,
    getProtein,
    getFat,
    getCarbs,
    getSugars,
    getUnit,
    getElectrolytes,
    getVitamins,
    getMinerals,
} from "@/app/lib/nutrition";


function formatValue(amount, unit) {

    if (amount === null || amount === undefined) {
        return "No Data";
    }

    return `${amount} ${unit}`;
}


function ComparisonRow({
    name,
    valueA,
    valueB,
}) {

    return (

        <div className="grid grid-cols-3 items-center border-b border-slate-100 py-4 last:border-b-0">

            <div className="text-sm font-medium text-slate-700">
                {name}
            </div>

            <div className="text-center text-sm text-slate-600">
                {valueA}
            </div>

            <div className="text-center text-sm text-slate-600">
                {valueB}
            </div>

        </div>
    );
}


function Section({
    title,
    itemsA,
    itemsB,
    foodNameA,
    foodNameB,
}) {

    const combinedNames = [
        ...itemsA.map(item => item.name),
        ...itemsB.map(item => item.name),
    ];

    const uniqueNames = [
        ...new Set(combinedNames)
    ];

    return (

        <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

            <h2 className="mb-6 text-2xl font-bold text-slate-900">
                {title}
            </h2>


            <div className="grid grid-cols-3 border-b border-slate-200 pb-3">

                <div className="text-sm font-semibold text-slate-500">
                    Nutrient
                </div>

                <div className="truncate text-center text-sm font-semibold text-slate-500">
                    {foodNameA}
                </div>

                <div className="truncate text-center text-sm font-semibold text-slate-500">
                    {foodNameB}
                </div>

            </div>


            {uniqueNames.map(name => {

                const itemA =
                    itemsA.find(item => item.name === name);

                const itemB =
                    itemsB.find(item => item.name === name);


                return (

                    <ComparisonRow
                        key={name}
                        name={name}
                        valueA={
                            itemA
                                ? formatValue(
                                    itemA.amount,
                                    itemA.unit
                                )
                                : "No Data"
                        }
                        valueB={
                            itemB
                                ? formatValue(
                                    itemB.amount,
                                    itemB.unit
                                )
                                : "No Data"
                        }
                    />

                );

            })}

        </section>

    );
}


export default function CompareContent({
    foodA,
    foodB,
}) {

    const quickStatsA = [
        {
            name: "Calories",
            amount: getCalories(foodA),
            unit: getUnit(foodA, "Energy"),
        },
        {
            name: "Protein",
            amount: getProtein(foodA),
            unit: getUnit(foodA, "Protein"),
        },
        {
            name: "Fat",
            amount: getFat(foodA),
            unit: getUnit(foodA, "Total lipid (fat)"),
        },
        {
            name: "Carbohydrates",
            amount: getCarbs(foodA),
            unit: getUnit(
                foodA,
                "Carbohydrate, by difference"
            ),
        },
        {
            name: "Sugars",
            amount: getSugars(foodA),
            unit: getUnit(
                foodA,
                "Total Sugars"
            ),
        },
    ];


    const quickStatsB = [
        {
            name: "Calories",
            amount: getCalories(foodB),
            unit: getUnit(foodB, "Energy"),
        },
        {
            name: "Protein",
            amount: getProtein(foodB),
            unit: getUnit(foodB, "Protein"),
        },
        {
            name: "Fat",
            amount: getFat(foodB),
            unit: getUnit(
                foodB,
                "Total lipid (fat)"
            ),
        },
        {
            name: "Carbohydrates",
            amount: getCarbs(foodB),
            unit: getUnit(
                foodB,
                "Carbohydrate, by difference"
            ),
        },
        {
            name: "Sugars",
            amount: getSugars(foodB),
            unit: getUnit(
                foodB,
                "Total Sugars"
            ),
        },
    ];


    const electrolytesA =
        getElectrolytes(foodA);

    const electrolytesB =
        getElectrolytes(foodB);


    const vitaminsA =
        getVitamins(foodA);

    const vitaminsB =
        getVitamins(foodB);


    const mineralsA =
        getMinerals(foodA);

    const mineralsB =
        getMinerals(foodB);


    return (

        <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl">


                {/* Header */}

                <div className="mb-12 text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Electrolyfe Comparison
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                        Compare Foods
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Compare the nutritional profiles of two foods side by side.
                    </p>

                </div>


                {/* Food Headers */}

                <div className="mb-8 grid grid-cols-2 gap-4 sm:gap-8">

                    <div className="rounded-3xl bg-white p-6 text-center shadow-sm">

                        <h2 className="text-xl font-bold text-slate-900">
                            {foodA.description}
                        </h2>

                        <p className="mt-2 text-sm font-medium text-slate-500">
                            {foodA.dataType}
                        </p>

                        <Link
                            href={`/food/${foodA.fdcId}`}
                            className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                        >
                            View Food Details
                        </Link>

                    </div>


                    <div className="rounded-3xl bg-white p-6 text-center shadow-sm">

                        <h2 className="text-xl font-bold text-slate-900">
                            {foodB.description}
                        </h2>

                        <p className="mt-2 text-sm font-medium text-slate-500">
                            {foodB.dataType}
                        </p>

                        <Link
                            href={`/food/${foodB.fdcId}`}
                            className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                        >
                            View Food Details
                        </Link>

                    </div>

                </div>


                {/* Quick Stats */}

                <Section
                    title="Quick Stats"
                    itemsA={quickStatsA}
                    itemsB={quickStatsB}
                    foodNameA={foodA.description}
                    foodNameB={foodB.description}
                />


                <div className="mt-8">

                    <Section
                        title="Electrolytes"
                        itemsA={electrolytesA}
                        itemsB={electrolytesB}
                        foodNameA={foodA.description}
                        foodNameB={foodB.description}
                    />

                </div>


                <div className="mt-8">

                    <Section
                        title="Vitamins"
                        itemsA={vitaminsA}
                        itemsB={vitaminsB}
                        foodNameA={foodA.description}
                        foodNameB={foodB.description}
                    />

                </div>


                <div className="mt-8">

                    <Section
                        title="Minerals"
                        itemsA={mineralsA}
                        itemsB={mineralsB}
                        foodNameA={foodA.description}
                        foodNameB={foodB.description}
                    />

                </div>

            </div>

        </main>

    );
}