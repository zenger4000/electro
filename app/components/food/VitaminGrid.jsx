import { getVitamins } from "@/app/lib/Nutrition";

const VitaminGrid = ({ food }) => {

    const vitamins = getVitamins(food);

    if (!vitamins.length) return null;

    return (

        <section className="space-y-6 mb-8">

            <div>

                <h2 className="text-3xl font-bold text-slate-900">
                    Vitamins
                </h2>

                <p className="mt-2 text-slate-600">
                    Essential vitamins detected in this food.
                </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

                {vitamins.map((vitamin, index) => (

                    <div
                        key={vitamin.name}
                        className={`flex items-center justify-between px-6 py-5 ${
                            index !== vitamins.length - 1
                                ? "border-b border-slate-200"
                                : ""
                        }`}
                    >

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                {vitamin.name}
                            </h3>

                        </div>

                        <div className="text-right">

                            <p className="text-xl font-bold text-slate-900">
                                {vitamin.amount}
                            </p>

                            <p className="text-sm text-slate-500">
                                {vitamin.unit}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default VitaminGrid;