export default function ElectrolyteQuickFacts({ facts }) {
    return (
        // <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden mx-6 -mt-20 md:-mt-32 z-10">

        //     <div className="border-b border-slate-200 px-8 py-6">
        //         <h2 className="text-2xl font-bold text-slate-900">
        //             Quick Facts
        //         </h2>

        //         <p className="mt-2 text-slate-600">
        //             Key information at a glance.
        //         </p>
        //     </div>

        //     <div className="divide-y divide-slate-200">

        //         {facts.map((fact) => (

        //             <div
        //                 key={fact.title}
        //                 className="flex flex-col gap-2 px-8 py-6 md:flex-row md:items-center md:justify-between"
        //             >

        //                 <h3 className="font-semibold text-slate-500">
        //                     {fact.title}
        //                 </h3>

        //                 <p className="max-w-2xl text-right font-medium text-slate-900">
        //                     {fact.value}
        //                 </p>

        //             </div>

        //         ))}

        //     </div>

        // </section>
    <div className="mx-6 -mt-20 md:-mt-32 z-10">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5 mb-8">

        {facts.map((fact) => (

            <article
                key={fact.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
                <div className="p-6 flex flex-col justify-center items-center  text-center">

                    <h2 className="text-2xl font-medium uppercase tracking-wider text-black">
                        {fact.title}
                    </h2>

                    <p className="mt-3 text-md font-bold text-slate-500">
                        {fact.value} 
                    </p>

                </div>

            </article>

        ))}

        </section>
    </div>
    );
}