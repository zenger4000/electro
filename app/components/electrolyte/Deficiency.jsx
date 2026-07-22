export default function Deficiency({
    title,
    introduction,
    symptoms,
    causes,
    note,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm mx-6">

            <div className="border-b border-amber-200 bg-amber-100 px-8 py-6">

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
                        Common Signs & Symptoms
                    </h3>

                    <ul className="mt-5 space-y-3 list-disc pl-6 text-slate-700">

                        {symptoms.map((symptom) => (

                            <li key={symptom}>
                                {symptom}
                            </li>

                        ))}

                    </ul>

                </div>

                <div>

                    <h3 className="text-xl font-bold text-slate-900">
                        Common Causes
                    </h3>

                    <ul className="mt-5 space-y-3 list-disc pl-6 text-slate-700">

                        {causes.map((cause) => (

                            <li key={cause}>
                                {cause}
                            </li>

                        ))}

                    </ul>

                </div>

            </div>

            <div className="border-t border-amber-200 bg-amber-100 px-8 py-6">

                <p className="leading-7 text-slate-700">
                    {note}
                </p>

            </div>

        </section>
    );
}