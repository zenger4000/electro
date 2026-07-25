const MineralCards = ({ minerals }) => {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Essential Minerals at a Glance
          </p>
  
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Six minerals, six essential roles
          </h2>
  
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each of these minerals contributes to important processes that help
            your body function normally every day.
          </p>
        </div>
  
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {minerals.map((mineral) => (
            <article
              key={mineral.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full"
                style={{ backgroundColor: mineral.color }}
              />
  
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {mineral.name}
                  </h3>
  
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {mineral.role}
                  </p>
                </div>
  
                <span 
                 style={{ backgroundColor: mineral.color }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-slate-50">
                  {mineral.symbol}
                </span>
              </div>
  
              <p className="mt-6 leading-7 text-slate-600">
                {mineral.description}
              </p>
  
              <div 
               style={{ 
                borderTopWidth: '1px', 
                borderTopColor: mineral.color, 
              }}
              className="mt-7 pt-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Food Examples
                </p>
  
                <div className="mt-3 flex flex-wrap gap-2">
                  {mineral.foodSources.map((food) => (
                    <span
                      key={food}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };
  
  export default MineralCards;