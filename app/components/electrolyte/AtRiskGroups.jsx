export default function AtRiskGroups({
    title,
    introduction,
    groups,
    note,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-3 text-lg leading-8 text-slate-700">
                    {introduction}
                </p>

            </div>

            <div className="grid gap-6 p-8 md:grid-cols-2">

                {groups.map((group) => (

                    <article
                        key={group.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >

                        <h3 className="text-xl font-bold text-slate-900">
                            {group.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            {group.description}
                        </p>

                    </article>

                ))}

            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-8 py-6">

                <p className="leading-7 text-slate-700">
                    {note}
                </p>

            </div>

        </section>
    );
}