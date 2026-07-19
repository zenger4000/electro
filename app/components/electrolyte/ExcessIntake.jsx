export default function ExcessIntake({
    title,
    introduction,
    symptoms,
    riskFactors,
    recommendation,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-red-200 bg-white shadow-sm">

            <div className="border-b border-red-200 bg-red-50 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-3 text-lg leading-8 text-slate-700">
                    {introduction}
                </p>

            </div>

            <div className="grid gap-10 px-8 py-8 lg:grid-cols-2">

                <div>

                    <h3 className="text-xl font-bold text-slate-900">
                        Possible Signs
                    </h3>

                    <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-700">

                        {symptoms.map((symptom) => (

                            <li key={symptom}>
                                {symptom}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-xl font-bold text-slate-900">
                        Who Is More Likely To Be Affected?
                    </h3>

                    <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-700">

                        {riskFactors.map((factor) => (

                            <li key={factor}>
                                {factor}
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

            <div className="border-t border-red-200 bg-red-50 px-8 py-6">

                <p className="leading-7 text-slate-700">
                    {recommendation}
                </p>

            </div>

        </section>
    );
}