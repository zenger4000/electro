import CompleteDataBadge from "../CompleteDataBadge";
import Image from "next/image";

const FoodHero = ({ food }) => {
    return (
        <section className=" relative overflow-hidden rounded-3xl border border-slate-200 p-8 shadow-lg mt-6 mb-8">

            {/* Background decoration */}
            <Image src={'/../public/foodhero.png'} fill quality={100}  className="object-cover absolute top-0 left-0" />
            <div className="bg-gradient-to-l from-transparent via-50% via-white to-white absolute left-0 top-0 h-full w-full bg-white/80 "></div>

            <div className="relative">
                {/* Food type badge */}
                <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold tracking-wide text-sky-700">
                    {food.dataType}
                </span>
                
                {/* Food title */}
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                    {food.description}
                </h1>

                {/* Brand */}
                {food.brandName && (
                    <p className="mt-3 text-lg text-slate-600">
                        by{" "}
                        <span className="font-semibold text-slate-800">
                            {food.brandName}
                        </span>
                    </p>
                )}

                {/* Metadata */}
                <div className="mt-8 flex flex-wrap gap-3">

                    <div className="rounded-xl bg-sky-50  px-5 py-3 shadow-lg ">
                        <p className="text-xs uppercase tracking-wider text-slate-500">
                            FDC ID
                        </p>

                        <p className="font-semibold text-slate-800">
                            {food.fdcId}
                        </p>
                    </div>

                    {food.publicationDate && (
                        <div className="rounded-xl bg-sky-50 px-5 py-3 shadow-lg ">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Published
                            </p>

                            <p className="font-semibold text-slate-800">
                                {food.publicationDate}
                            </p>
                        </div>
                    )}

                    {food.foodClass && (
                        <div className="rounded-xl bg-sky-50  px-5 py-3 shadow-lg ">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Food Class
                            </p>

                            <p className="font-semibold text-slate-800">
                                {food.foodClass}
                            </p>
                        </div>
                    )}

                    {food.servingSize && (
                        <div className="rounded-xl bg-sky-50 px-5 py-3 shadow-lg ">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Serving Size
                            </p>

                            <p className="font-semibold text-slate-800">
                                {food.servingSize} {food.servingSizeUnit}
                            </p>
                        </div>
                    )}

                </div>

            </div>

        </section>
    );
};

export default FoodHero;