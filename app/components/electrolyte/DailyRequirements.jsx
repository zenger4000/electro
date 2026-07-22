export default function DailyRequirements({
    title,
    description,
    rows,
    note,
}) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mx-6">

            <div className="border-b border-slate-200 px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2 text-slate-600">
                    {description}
                </p>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-50">

                        <tr>

                            <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Life Stage
                            </th>

                            <th className="px-8 py-5 text-right text-sm font-semibold uppercase tracking-wider text-slate-500">
                                Recommended Intake
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {rows.map((row) => (

                            <tr
                                key={row.group}
                                className="border-t border-slate-200"
                            >

                                <td className="px-8 py-5 font-medium text-slate-800">
                                    {row.group}
                                </td>

                                <td className="px-8 py-5 text-right font-bold text-slate-900">
                                    {row.amount}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-8 py-5">

                <p className="text-sm leading-6 text-slate-600">
                    {note}
                </p>

            </div>

        </section>
    );
}