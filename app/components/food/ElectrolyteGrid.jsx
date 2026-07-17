import { getElectrolytes } from "@/app/lib/Nutrition";

export const DAILY_VALUES = {
    Potassium: 4700,
    Sodium: 2300,
    Calcium: 1300,
    Magnesium: 420,
    Chloride: 2300,
    Phosphorus: 1250,
};

export function getRating(percentage) {
    if (percentage > 100) {
        return {
            label: "Excessive",
            color: "bg-red-500",
        };
    }
    if (percentage >= 20) {
        return {
            label: "Excellent",
            color: "bg-emerald-500",
        };
    }

    if (percentage >= 10) {
        return {
            label: "Good",
            color: "bg-sky-500",
        };
    }

    if (percentage >= 5) {
        return {
            label: "Moderate",
            color: "bg-amber-500",
        };
    }

    return {
        label: "Low",
        color: "bg-slate-400",
    };
}

const ElectrolyteGrid = ({ food }) => {

    const electrolytes = getElectrolytes(food);

    return (

        <section className="space-y-6 mb-8">

            <div>

                <h2 className="text-3xl font-bold text-slate-900">
                    Electrolytes
                </h2>

                <p className="mt-2 text-slate-600">
                    Daily Value percentages are calculated using FDA Daily Values.
                </p>

            </div>

            <div className="grid gap-6 lg:grid-cols-2">

                {electrolytes.map((electrolyte) => {

                    const dailyValue = DAILY_VALUES[electrolyte.name];

                    const percentage =
                        (electrolyte.amount / dailyValue) * 100;

                    const rating = getRating(percentage);

                    return (

                        <article
                            key={electrolyte.name}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            <div className="flex items-start justify-between">

                                <div>

                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {electrolyte.name}
                                    </h3>

                                    <p className="mt-1 text-slate-500">
                                        {electrolyte.amount} {electrolyte.unit}
                                    </p>

                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${rating.color}`}
                                >
                                    {rating.label}
                                </span>

                            </div>

                            <div className="mt-6">

                                <div className="mb-2 flex justify-between text-sm text-slate-600">

                                    <span>
                                        Daily Value
                                    </span>

                                    <span>
                                        {percentage.toFixed(1)}%
                                    </span>

                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                                    <div
                                        className={`h-full rounded-full ${rating.color}`}
                                        style={{
                                            width: `${Math.min(
                                                percentage,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        </article>

                    );

                })}

            </div>

        </section>

    );

};

export default ElectrolyteGrid;