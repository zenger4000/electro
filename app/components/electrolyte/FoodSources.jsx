import { url } from "inspector";
import Link from "next/link";

export default function FoodSources({
    title,
    description,
    foods,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2 text-slate-600">
                    {description}
                </p>

            </div>

            <div className="divide-y divide-slate-200">

                {foods.map((food) => (

                    <div
                        key={food.name}
                        style={{
                            backgroundImage: `url(${food.img})`
                          }}
                        className="flex flex-col gap-5 px-8 py-16 md:flex-row md:items-center md:justify-between bg-[url('/salt.png')] bg-cover bg-right bg-no-repeat"
                    >

                        <div className="bg-white/80 rounded-xl p-4 min-w-[25%] max-w-[80%]">

                            <h3 className="text-lg font-semibold text-slate-900">
                                {food.name}
                            </h3>

                            <p className="mt-3 mb-4 text-slate-600">
                                {food.amount}
                            </p>

                            {food.fdcId ? (

                                <Link
                                    href={`/food/${food.fdcId}`}
                                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                                >
                                    Food Page →
                                </Link>

                                ) : (

                                <span className="text-sm text-slate-400">
                                    Food page coming soon
                                </span>

                                )}

                        </div>

                        

                    </div>

                ))}

            </div>

        </section>
    );
}