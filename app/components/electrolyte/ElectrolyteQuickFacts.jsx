export default function ElectrolyteQuickFacts({ facts }) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

            <div className="border-b border-slate-200 px-8 py-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    Quick Facts
                </h2>

                <p className="mt-2 text-slate-600">
                    Key information at a glance.
                </p>
            </div>

            <div className="divide-y divide-slate-200">

                {facts.map((fact) => (

                    <div
                        key={fact.title}
                        className="flex flex-col gap-2 px-8 py-6 md:flex-row md:items-center md:justify-between"
                    >

                        <h3 className="font-semibold text-slate-500">
                            {fact.title}
                        </h3>

                        <p className="max-w-2xl text-right font-medium text-slate-900">
                            {fact.value}
                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}