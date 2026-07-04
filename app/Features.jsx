"use client";
export default function Page() {
    const cards = [
      {
        title: "Sodium",
        color: "rgba(59,130,246,.45)",
        hoverColor: "rgba(59,130,246,.18)",
        icon: "Na",
        ion: "+",
        transform: "  scale(.88)",
      },
      {
        title: "Potassium",
        color: "rgba(249,115,22,.40)",
        hoverColor: "rgba(249,115,22,.18)",
        icon: "K",
        ion: "+",
        transform: "  scale(.88)",
      },
      {
        title: "Magnesium",
        color: "rgba(168,85,247,.40)",
        hoverColor: "rgba(168,85,247,.18)",
        icon: "Mg",
        ion: "2+",
        transform: "  scale(.88)",
      },
      {
        title: "Calcium",
        color: "rgba(16,185,129,.40)",
        hoverColor: "rgba(16,185,129,.18)",
        icon: "Ca",
        ion: "2+",
        transform: " scale(.88)",
      },
    ];
  
    return (
      <section className="min-h-[1200px] bg-black overflow-hidden flex items-center justify-center flex-col">
        <h2 className="text-[#25aaaa] text-3xl md:text-5xl font-bold my-10">Explore the Major Electrolytes</h2>
        <div className="[perspective:1000px]">
          <div
            className="flex items-center justify-center md:gap-52 flex-col xl:flex-row xl:[transform:rotateX(8deg)]"
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative shrink-0 -mx-24"
                style={{
                  transform: card.transform,
                }}
              >
                <div
                  className="
                    group
                    relative
                    w-[300px]
                    md:w-[600px]
                    xl:w-[300px]
                    h-[450px]
                    md:h-[560px]
                    rounded-[32px]
                    overflow-hidden
                    bg-[#090909]
                    border
                    border-white/10
                    backdrop-blur-xl
                    cursor-pointer
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:scale-[1.05]
                  "
                >
                  {/* hover color */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      pointer-events-none
                    "
                    style={{
                      background: card.hoverColor,
                    }}
                  />
  
                  {/* glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-60
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:scale-110
                      pointer-events-none
                    "
                    style={{
                      background: `radial-gradient(circle at center, ${card.color}, transparent 65%)`,
                    }}
                  />
  
                  {/* border glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-[32px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      pointer-events-none
                    "
                    style={{
                      boxShadow: `inset 0 0 0 1px ${card.color}`,
                    }}
                  />
  
                  <div className="relative z-10 h-full flex flex-col p-10">
                    <div
                      className="
                        text-white
                        text-6xl
                        mb-12
                        md:mb-24
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      {card.icon}<sup>{card.ion}</sup>
                    </div>
  
                    <h2 className="text-white text-4xl font-light mb-8">
                      {card.title}
                    </h2>
  
                    <p
                      className="
                        text-zinc-400
                        text-xl
                        leading-relaxed
                        transition-colors
                        duration-500
                        group-hover:text-white
                      "
                    >
                      Premium feature description that demonstrates
                      the layout and spacing.
                    </p>
  
                    <div
                      className="
                        mt-auto
                        text-white
                        text-4xl
                        transition-transform
                        duration-500
                        group-hover:translate-x-2
                      "
                    >
                      →
                    </div>
                  </div>
                </div>
  
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    h-32
                    w-52
                    -translate-x-1/2
                    blur-3xl
                    opacity-60
                    pointer-events-none
                  "
                  style={{
                    background: card.color,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }