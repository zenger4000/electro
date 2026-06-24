import React from 'react';

export default function IonAnimation() {
  return (
    <div className="relative w-1/2 h-full bg-white flex items-center justify-center">
      
      {/* Background Label */}
      <span className="text-slate-700 font-mono text-sm uppercase tracking-widest pointer-events-none select-none">
        Ion Chamber
      </span>

      {/* Positive Ion (Cation) - Slow Floating */}
      <div className="pointer-events-none select-none absolute top-1/4 left-1/4 animate-[float_6s_ease-in-out_infinite] flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 text-blue-400 font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        +
      </div>

      {/* Another Positive Ion - Delayed and offset */}
      <div className="pointer-events-none select-none absolute top-1/2 left-2/3 animate-[float_8s_ease-in-out_infinite_1.5s] flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-400 text-blue-400 text-sm font-bold shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        +
      </div>

      {/* Negative Ion (Anion) - Fast Drifting */}
      <div className="pointer-events-none select-none absolute top-2/3 left-1/3 animate-[drift_5s_ease-in-out_infinite_0.5s] flex items-center justify-center w-8 h-8 rounded-full bg-rose-500/20 border-2 border-rose-400 text-rose-400 font-bold shadow-[0_0_15px_rgba(244,63,94,0.5)]">
        -
      </div>

      {/* Another Negative Ion */}
      <div className="pointer-events-none select-none absolute top-1/3 left-3/4 animate-[drift_7s_ease-in-out_infinite_2s] flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/20 border-2 border-rose-400 text-rose-400 text-sm font-bold shadow-[0_0_10px_rgba(244,63,94,0.5)]">
        -
      </div>

    </div>
  );
}
