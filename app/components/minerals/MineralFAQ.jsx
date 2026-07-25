import Image from "next/image";

const MineralFAQ = ({ faq }) => {
    return (
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="flex flex-row justify-center items-center gap-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <Image src={"/faq.svg"} width={40} height={40} alt="faq" quality={100}/>
              Frequently Asked Questions
            </h2>
          </div>
  
          <div className="mt-12 divide-y divide-slate-200 rounded-3xl bg-white px-6 shadow-sm ring-1 ring-slate-200 sm:px-8">
            {faq.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900">
                  {item.question}
  
                  <span className="text-2xl font-normal text-slate-400 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
  
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MineralFAQ;