export default function FAQ({
    title,
    questions,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2 text-slate-600">
                    Answers to common questions about this electrolyte.
                </p>

            </div>

            <div className="divide-y divide-slate-200">

                {questions.map((item) => (

                    <details
                        key={item.question}
                        className="group"
                    >

                        <summary className="cursor-pointer list-none px-8 py-6">

                            <div className="flex items-center justify-between gap-6">

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.question}
                                </h3>

                                <span className="text-2xl font-light text-slate-500 transition-transform duration-300 group-open:rotate-45 select-none">
                                    +
                                </span>

                            </div>

                        </summary>

                        <div className="px-8 pb-6">

                            <p className="leading-8 text-slate-700">
                                {item.answer}
                            </p>

                        </div>

                    </details>

                ))}

            </div>

        </section>
    );
}