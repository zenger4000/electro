const MineralQuickFacts = ({ quickFacts }) => {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {fact.label}
              </p>
  
              <p className="mt-3 text-3xl font-bold text-slate-900">
                {fact.value}
              </p>
  
              <p className="mt-4 leading-7 text-slate-600">
                {fact.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default MineralQuickFacts;