// components/food/MacroGrid.jsx

import {
    getCalories,
    getProtein,
    getCarbs,
    getFat,
} from "@/app/lib/Nutrition";

const macros = [
    {
        title: "Calories",
        getter: getCalories,
        unit: "kcal",
        color: "from-amber-400 to-orange-500",
    },
    {
        title: "Protein",
        getter: getProtein,
        unit: "g",
        color: "from-sky-400 to-blue-600",
    },
    {
        title: "Carbohydrates",
        getter: getCarbs,
        unit: "g",
        color: "from-emerald-400 to-green-600",
    },
    {
        title: "Fat",
        getter: getFat,
        unit: "g",
        color: "from-rose-400 to-pink-600",
    },
];

const MacroGrid = ({ food }) => {

    return (

        <section className="space-y-6 mb-8">

            <div>

                <h2 className="text-3xl font-bold text-slate-900">
                    Macronutrients
                </h2>

                <p className="mt-2 text-slate-600">
                    The primary nutrients that provide energy and build body tissues.
                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {macros.map((macro) => {

                    const value = macro.getter(food);

                    // if (value === null) return null;

                    return (

                        <article
                            key={macro.title}
                            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            <div className={`h-3 bg-gradient-to-r ${macro.color}`} />

                            <div className="p-6">

                                <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                                    {macro.title}
                                </p>

                                <div className="mt-4 flex items-end gap-2">

                                    <span className="text-5xl font-bold text-slate-900">
                                        {value??"No Data"}
                                    </span>

                                    <span className="pb-2 text-lg text-slate-500">
                                        {value!=null && macro.unit}
                                    </span>

                                </div>

                            </div>

                        </article>

                    );

                })}

            </div>

        </section>

    );

};

export default MacroGrid;