const MineralHero = ({ hero }) => {
    return (
      <section className="relative w-full overflow-hidden bg-[#6b7280]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#6b7280]" />
  
          <div className="absolute inset-0 bg-[url('/mineralhero.png')] bg-cover bg-center" />
  
          <div className="absolute inset-0 bg-gradient-to-r from-[#6b7280]/95 via-[#6b7280]/60 to-transparent" />
        </div>
  
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
              {hero.eyebrow}
            </p>
  
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
  
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
              {hero.description}
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default MineralHero;