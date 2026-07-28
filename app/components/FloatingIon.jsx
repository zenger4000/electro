export default function FloatingIon() {
    const electrolytes = [
        {
            symbol: "K",
            name: "Potassium",
            color: "#e22c37",
            position: "top-4 left-1/2 -translate-x-1/2",
        },
        {
            symbol: "Na",
            name: "Sodium",
            color: "#9d51cd",
            position: "top-1/2 left-2 -translate-y-1/2",
        },
        {
            symbol: "Mg",
            name: "Magnesium",
            color: "#6ae75e",
            position: "bottom-4 left-1/2 -translate-x-1/2",
        },
        {
            symbol: "Ca",
            name: "Calcium",
            color: "#e6cac6",
            position: "top-1/2 right-2 -translate-y-1/2",
        },
    ];

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">

            {/* Ambient glow */}
            <div className="absolute inset-1/4 rounded-full bg-cyan-100/40 blur-3xl" />

            {/* Orbit rings */}
            <div className="absolute inset-[12%] rounded-full border border-slate-200/70" />

            <div className="absolute inset-[25%] rounded-full border border-slate-200/60" />

            {/* Animated orbit */}
            <div className="absolute inset-[12%] animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-slate-200">

                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-300" />

                <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-300" />

                <div className="absolute top-1/2 -left-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-300" />

                <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-slate-300" />

            </div>

            {/* Center */}
            <div className="absolute top-1/2 left-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">

                <div className="text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white shadow-lg">
                        ⚡
                    </div>

                    <span className="text-sm font-semibold tracking-wide text-slate-700">
                        Balance
                    </span>

                </div>

            </div>

            {/* Electrolyte nodes */}
            {electrolytes.map((electrolyte, index) => (
                <div
                    key={electrolyte.symbol}
                    className={`absolute ${electrolyte.position} z-10`}
                >
                    <div
                        className="group relative flex h-20 w-20 cursor-default items-center justify-center rounded-full border-4 border-white shadow-xl transition duration-500 hover:scale-110"
                        style={{
                            backgroundColor: electrolyte.color,
                            animation: `floaty 4s ease-in-out ${index * 0.5}s infinite`,
                        }}
                    >
                        <span className="text-xl font-bold text-white drop-shadow-sm">
                            {electrolyte.symbol}
                        </span>

                        {/* Tooltip */}
                        <div className="pointer-events-none absolute top-full mt-3 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                            {electrolyte.name}
                        </div>
                    </div>
                </div>
            ))}

            {/* Tiny particles */}
            <div className="absolute top-[22%] left-[27%] h-2 w-2 animate-pulse rounded-full bg-slate-300" />

            <div className="absolute top-[30%] right-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-slate-300 [animation-delay:500ms]" />

            <div className="absolute bottom-[27%] left-[22%] h-1.5 w-1.5 animate-pulse rounded-full bg-slate-300 [animation-delay:1000ms]" />

            <div className="absolute bottom-[20%] right-[28%] h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:700ms]" />

        </div>
    );
}