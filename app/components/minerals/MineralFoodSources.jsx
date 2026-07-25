import Image from "next/image";

const MineralFoodSources = ({ foodSources }) => {
    return (
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {foodSources.title}
            </h2>
  
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {foodSources.description}
            </p>
          </div>
  
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {foodSources.examples.map((example) => (
              <article
                key={example.category}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 flex flex-col gap-3 justify-center items-center"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {example.category}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-600">
                  {example.foods}
                </p>

                <Image src={example.img} width={80} height={80} alt="food image" quality={100}/>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MineralFoodSources;