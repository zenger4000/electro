// app/not-found.jsx


export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#e9f8f8] flex items-center justify-center pt-6 px-6">
      <div className="max-w-xl w-full text-center">

        {/* 404 */}

        <div className="mb-8">
          <span className="text-[120px] md:text-[160px] font-black leading-none tracking-tight text-slate-300 select-none">
            404
          </span>
        </div>


        {/* Icon / Visual */}

        <div className="relative -mt-20 mb-8 flex justify-center">
          <div className="
            w-20
            h-20
            rounded-full
            bg-white
            shadow-xl
            border
            border-slate-100
            flex
            items-center
            justify-center
            text-4xl
            select-none
          ">
            ⚡
          </div>
        </div>


        {/* Heading */}

        <h1 className="
          text-3xl
          md:text-4xl
          font-bold
          text-slate-900
          mb-4
        ">
          Looks like this page lost its charge.
        </h1>


        {/* Description */}

        <p className="
          text-slate-500
          text-base
          md:text-lg
          leading-relaxed
          max-w-md
          mx-auto
          mb-8
        ">
          The page you're looking for doesn't exist, may have moved,
          or you've followed a link that has run out of electrolytes.
        </p>


        {/* Actions */}

        <div className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
        ">

          <a
            href="/"
            className="
              w-full
              sm:w-auto
              px-6
              py-3
              rounded-xl
              bg-slate-900
              text-white
              font-semibold
              shadow-lg
              transition
              hover:bg-slate-700
              hover:-translate-y-0.5
            "
          >
            Back to Home
          </a>


          <a
            href="/search"
            className="
              w-full
              sm:w-auto
              px-6
              py-3
              rounded-xl
              bg-white
              text-slate-700
              font-semibold
              border
              border-slate-200
              shadow-sm
              transition
              hover:bg-slate-100
              hover:-translate-y-0.5
            "
          >
            Search Foods
          </a>

        </div>


        {/* Footer message */}

        <p className="
          mt-10
          text-xs
          text-slate-400
        ">
          Electrolyfe · Explore nutrition. Understand your balance.
        </p>

      </div>
    </main>
  );
}