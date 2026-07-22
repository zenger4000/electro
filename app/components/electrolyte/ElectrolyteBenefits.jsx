export default function ElectrolyteBenefits({
    title,
    color,
    benefits,
}) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2 text-slate-600">
                    Key physiological roles supported by adequate intake.
                </p>

            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">

                {benefits.map((benefit) => (

                    <article
                        style={{ backgroundColor: `${color}`}}
                        key={benefit.title}
                        className="rounded-2xl border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >

                        <h3 className="text-xl font-bold text-slate-900">
                            {benefit.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            {benefit.description}
                        </p>

                    </article>

                ))}

            </div>

        </section>
    );
}