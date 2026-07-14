import {
    getCalories,
    getProtein,
    getCarbs,
    getFat,
} from "@/app/lib/Nutrition";

const stats = [
    {
        title: "Calories",
        color: "bg-amber-500",
        getter: getCalories,
    },
    {
        title: "Protein",
        color: "bg-blue-500",
        getter: getProtein,
    },
    {
        title: "Carbohydrates",
        color: "bg-emerald-500",
        getter: getCarbs,
    },
    {
        title: "Fat",
        color: "bg-rose-500",
        getter: getFat,
    },
];

const QuickStats = ({ food }) => {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => (

                <article
                    key={stat.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                    <div className={`h-2 ${stat.color}`}></div>

                    <div className="p-6">

                        <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                            {stat.title}
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900">
                            {stat.getter(food) ?? "--"}
                        </h2>

                    </div>

                </article>

            ))}

        </section>
    );
};

export default QuickStats;