import CompleteDataBadge from "../CompleteDataBadge";

const FoodHero = ({ food }) => {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8 shadow-lg my-6">

            {/* Background decoration */}
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl"></div>

            <div className="relative">
                <CompleteDataBadge size={32} />

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

                    <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
                        <p className="text-xs uppercase tracking-wider text-slate-500">
                            FDC ID
                        </p>

                        <p className="font-semibold text-slate-800">
                            {food.fdcId}
                        </p>
                    </div>

                    {food.publicationDate && (
                        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Published
                            </p>

                            <p className="font-semibold text-slate-800">
                                {food.publicationDate}
                            </p>
                        </div>
                    )}

                    {food.foodClass && (
                        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
                            <p className="text-xs uppercase tracking-wider text-slate-500">
                                Food Class
                            </p>

                            <p className="font-semibold text-slate-800">
                                {food.foodClass}
                            </p>
                        </div>
                    )}

                    {food.servingSize && (
                        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
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