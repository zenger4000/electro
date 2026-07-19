export default function ElectrolyteHero({
    name,
    symbol,
    color,
    description,
    dailyValue,
}) {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Decorative Glow */}

            <div
                className="absolute left-0 top-0 h-full w-full blur-3xl opacity-10"
                style={{ backgroundColor: color }}
            />

            <div className="relative px-8 py-12 lg:px-14 lg:py-16">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                            Essential Electrolyte
                        </p>

                        <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900">
                            {name}
                        </h1>

                        <p
                            className="mt-2 text-lg font-semibold"
                            style={{ color }}
                        >
                            Chemical Symbol: {symbol}
                        </p>

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            {description}
                        </p>

                    </div>

                    {/* Right */}

                    <div className="grid w-full max-w-sm gap-5">

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Recommended Intake
                            </p>

                            <p className="mt-3 text-xl font-bold text-slate-900">
                                {dailyValue}
                            </p>

                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Category
                            </p>

                            <p className="mt-3 text-xl font-bold text-slate-900">
                                Essential Mineral  Electrolyte
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}