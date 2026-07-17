"use client";
export default function Page() {
    const cards = [
      {
        title: "Sodium",
        color: "rgba(157, 81, 205,.40)",
        hoverColor: "rgba(157, 81, 205,.18)",
        icon: "Na",
        ion: "+",
        transform: "  scale(.88)",
        description: "The body's primary extracellular electrolyte, sodium regulates fluid balance, supports nerve signaling, and helps maintain healthy blood pressure."
      },
      {
        title: "Potassium",
        color: "rgba(226, 44, 55,.40)",
        hoverColor: "rgba(226, 44, 55,.18)",
        icon: "K",
        ion: "+",
        transform: "  scale(.88)",
        description: "Found inside every cell, potassium powers muscle contractions, enables nerve communication, and keeps the heart beating steadily."
      },
      {
        title: "Magnesium",
        color: "rgba(106, 231, 94,.40)",
        hoverColor: "rgba(106, 231, 94,.18)",
        icon: "Mg",
        ion: "2+",
        transform: "  scale(.88)",
        description: "Essential for hundreds of enzymatic reactions, magnesium supports energy production, muscle relaxation, and healthy nervous system function."
      },
      {
        title: "Calcium",
        color: "rgba(230, 202, 198,.45)",
        hoverColor: "rgba(230, 202, 198,.18)",
        icon: "Ca",
        ion: "2+",
        transform: " scale(.88)",
        description: "Beyond strengthening bones, calcium drives muscle contraction, nerve signaling, blood clotting, and countless cellular functions."
      },
    ];
  
    return (
      <section className="md:min-h-[1200px] bg-black overflow-hidden flex items-center justify-center flex-col">
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
  
                    <h2 className="text-white text-4xl font-light -mt-12 mb-4">
                      {card.title}
                    </h2>
  
                    <p
                      className="
                        text-zinc-400
                        text-lg
                        md:text-xl
                        md:mt-6
                        leading-relaxed
                        transition-colors
                        duration-500
                        group-hover:text-white
                      "
                    >
                      {card.description}
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