export default function ElectrolyteOverview({
    title,
    paragraphs,
}) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

            </div>

            <div className="space-y-6 px-8 py-8">

                {paragraphs.map((paragraph, index) => (

                    <p
                        key={index}
                        className="text-lg leading-8 text-slate-700"
                    >
                        {paragraph}
                    </p>

                ))}

            </div>

        </section>
    );
}