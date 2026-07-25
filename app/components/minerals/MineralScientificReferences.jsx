const MineralScientificReferences = ({ references }) => {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Scientific References
          </h2>
  
          <p className="mt-4 text-slate-600">
            Learn more from trusted sources on essential minerals and food
            composition data.
          </p>
        </div>
  
        <div className="mt-10 space-y-4">
          {references.map((reference) => (
            <a
              key={reference.title}
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-slate-400 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">
                {reference.title}
              </h3>
  
              <p className="mt-2 leading-7 text-slate-600">
                {reference.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default MineralScientificReferences;