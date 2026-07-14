import { getMinerals } from "@/app/lib/Nutrition";

const MineralGrid = ({ food }) => {

    const minerals = getMinerals(food);

    if (!minerals.length) return null;

    return (

        <section className="space-y-6">

            <div>

                <h2 className="text-3xl font-bold text-slate-900">
                    Minerals
                </h2>

                <p className="mt-2 text-slate-600">
                    Essential minerals present in this food.
                </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

                {minerals.map((mineral, index) => (

                    <div
                        key={mineral.name}
                        className={`flex items-center justify-between px-6 py-5 ${
                            index !== minerals.length - 1
                                ? "border-b border-slate-200"
                                : ""
                        }`}
                    >

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                {mineral.name}
                            </h3>

                        </div>

                        <div className="text-right">

                            <p className="text-xl font-bold text-slate-900">
                                {mineral.amount}
                            </p>

                            <p className="text-sm text-slate-500">
                                {mineral.unit}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default MineralGrid;