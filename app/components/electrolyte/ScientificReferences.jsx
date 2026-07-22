export default function ScientificReferences({
    title,
    description,
    references,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mb-6 mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2 text-slate-600">
                    {description}
                </p>

            </div>

            <div className="divide-y divide-slate-200">

                {references.map((reference) => (

                    <article
                        key={reference.id}
                        className="px-8 py-6"
                    >

                        <div className="flex items-start gap-5">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">

                                {reference.id}

                            </div>

                            <div className="min-w-0">

                                <h3 className="font-semibold text-slate-900">

                                    {reference.title}

                                </h3>

                                <p className="mt-2 text-slate-600">

                                    {reference.organization}

                                </p>

                                <a
                                    href={reference.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-block font-medium text-blue-600 hover:underline"
                                >

                                    Visit Source →

                                </a>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}