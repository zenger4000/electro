const ChlorideNote = ({ chloride }) => {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              An Important Note
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {chloride.title}
            </h2>
  
            <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
              {chloride.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ChlorideNote;