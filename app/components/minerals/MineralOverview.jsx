const MineralOverview = ({ overview }) => {
    return (
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {overview.title}
            </h2>
          </div>
  
          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-600">
            {overview.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MineralOverview;