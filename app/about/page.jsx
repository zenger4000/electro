"use client";

import Image from "next/image";
import Link from "next/link";
import FloatingIon from "../components/FloatingIon";
import TiltCard from "../Tiltcard";


export default function AboutPage() {

  return (
    <main className="min-h-screen bg-slate-950 text-white">

<section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">

{/* Ambient background */}

<div className="absolute inset-0 pointer-events-none">

  <div className="
    absolute
    -top-40
    -left-40
    w-[600px]
    h-[600px]
    rounded-full
    bg-[#e22c37]/10
    blur-[160px]
  " />

  <div className="
    absolute
    top-1/3
    -right-40
    w-[600px]
    h-[600px]
    rounded-full
    bg-[#9d51cd]/10
    blur-[160px]
  " />

  <div className="
    absolute
    -bottom-60
    left-1/3
    w-[600px]
    h-[600px]
    rounded-full
    bg-[#6ae75e]/5
    blur-[160px]
  " />

</div>


{/* Subtle grid */}

<div
  className="
    absolute
    inset-0
    opacity-[0.065]
    pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
    `,
    animation: "driftgrid 8s linear infinite",
    backgroundSize: "80px 80px"
  }}
/>


{/* Main content */}

<div className="
  relative
  z-10
  max-w-7xl
  mx-auto
  px-6
  py-32
  md:py-40
  lg:py-48
">

  <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">


    {/* =====================================================
        LEFT — MAIN MESSAGE
    ===================================================== */}

    <div>

      <div className="
        flex
        items-center
        gap-4
        mb-10
      ">

        <span className="
          w-10
          h-px
          bg-[#6ae75e]
        " />

        <p className="
          text-xs
          tracking-[0.4em]
          uppercase
          text-slate-400
        ">
          The story behind Electrolyfe
        </p>

      </div>


      <h1 className="
        text-6xl
        sm:text-7xl
        md:text-8xl
        lg:text-[7rem]
        font-bold
        tracking-[-0.06em]
        leading-[0.82]
      ">

        Nutrition

        <br />

        <span className="text-[#6ae75e]">
          without
        </span>

        <br />

        the noise.

      </h1>


      <p className="
        mt-12
        max-w-xl
        text-lg
        md:text-xl
        leading-relaxed
        text-slate-400
      ">
        Electrolyfe was created to make nutrition data
        easier to explore, easier to understand, and
        a little more exciting to discover.
      </p>


      <div className="
        mt-10
        flex
        flex-wrap
        gap-4
      ">

        <Link
          href="/search"
          className="
            group
            inline-flex
            items-center
            gap-3
            px-6
            py-3.5
            rounded-full
            bg-white
            text-slate-950
            font-semibold
            transition-all
            duration-300
            hover:gap-5
            hover:bg-[#6ae75e]
          "
        >

          Explore Foods

          <span className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          ">
            →
          </span>

        </Link>


        <a
          href="#story"
          className="
            inline-flex
            items-center
            px-6
            py-3.5
            rounded-full
            border
            border-white/15
            text-slate-300
            font-semibold
            transition
            hover:bg-white/5
            hover:border-white/30
          "
        >
          Our Story
        </a>

      </div>

    </div>
<FloatingIon />

  </div>


  {/* =====================================================
      BOTTOM STATEMENT
  ===================================================== */}

  <div className="
    mt-24
    pt-8
    border-t
    border-white/10
    flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-between
    gap-6
  ">

    <p className="
      text-xl
      
    ">
      Four major electrolytes. Thousands of foods.
      <span className="text-[#6ae75e]"> One place to explore.</span>
    </p>

    

  </div>
  

</div>

</section>

      {/* =========================================================
          THE FOUR
      ========================================================= */}

      <section className="relative bg-white text-slate-900 py-28 md:py-36">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-20">

            <p className="text-sm tracking-[0.3em] uppercase text-[#6ae75e] mb-5">
              The essentials
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Four essentials.
              <br />
              One place to explore.
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Electrolyfe began with the four major electrolytes that keep
              the body functioning every day.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">

            {/* Potassium */}
            <Link
              href="/potassium"
              className="group relative min-h-[360px] p-8 bg-white overflow-hidden transition-colors hover:bg-[#e22c37]"
            >
              <div className="relative flex flex-col h-full">

                <div className="mt-auto">

                  <span className="text-7xl font-bold text-[#e22c37] group-hover:text-white">
                    K
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    Potassium
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 group-hover:text-white/80">
                    Explore one of the body's essential electrolytes
                    and discover where it lives in the foods we eat.
                  </p>

                </div>

              </div>

            </Link>


            {/* Sodium */}
            <Link
              href="/sodium"
              className="group relative min-h-[360px] p-8 bg-white overflow-hidden transition-colors hover:bg-[#9d51cd]"
            >
              <div className="relative flex flex-col h-full">

                <div className="mt-auto">

                  <span className="text-7xl font-bold text-[#9d51cd] group-hover:text-white">
                    Na
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    Sodium
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 group-hover:text-white/80">
                    Understand an electrolyte that is essential,
                    familiar, and often misunderstood.
                  </p>

                </div>

              </div>

            </Link>


            {/* Magnesium */}
            <Link
              href="/magnesium"
              className="group relative min-h-[360px] p-8 bg-white overflow-hidden transition-colors hover:bg-[#6ae75e]"
            >
              <div className="relative flex flex-col h-full">

                <div className="mt-auto">

                  <span className="text-7xl font-bold text-[#6ae75e] group-hover:text-white">
                    Mg
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    Magnesium
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 group-hover:text-white/80">
                    Dive into a mineral involved in hundreds of
                    processes happening inside the body.
                  </p>

                </div>

              </div>

            </Link>


            {/* Calcium */}
            <Link
              href="/calcium"
              className="group relative min-h-[360px] p-8 bg-white overflow-hidden transition-colors hover:bg-[#e6cac6]"
            >
              <div className="relative flex flex-col h-full">

                <div className="mt-auto">

                  <span className="text-7xl font-bold text-[#c99d97] group-hover:text-white">
                    Ca
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    Calcium
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-white/80">
                    Go beyond the obvious and explore where
                    calcium appears throughout your diet.
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================================================
          THE STORY
      ========================================================= */}

      <section id="story" className="relative text-white py-28 md:py-36">
      <div
  className="
    absolute
    inset-0
    opacity-[0.065]
    pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
    `,
    animation: "driftgrid 8s linear infinite",

    backgroundSize: "80px 80px"
  }}
/>

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

            <div>

              <p className="text-sm tracking-[0.3em] uppercase text-[#6ae75e] mb-6">
                Why Electrolyfe?
              </p>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Because nutrition
                <br />
                shouldn't feel
                <br />
                like homework.
              </h2>

            </div>


            <div className="text-lg leading-relaxed text-slate-300 space-y-6">

              <p>
                Nutrition data is everywhere. But finding something useful
                inside that data can be surprisingly difficult.
              </p>

              <p>
                Electrolyfe was built to make that process easier. Instead
                of presenting nutrition as a wall of numbers, the goal is
                to create an experience where you can search, explore,
                compare, and actually understand what you're looking at.
              </p>

              <p>
                The project began with electrolytes and gradually grew into
                something larger: a place where food and nutrition data can
                feel approachable, visual, and genuinely interesting.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUILT FROM THE GROUND UP
      ========================================================= */}

      <section className="bg-white text-slate-900 py-28 md:py-36">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">

            <div>

              <p className="text-sm tracking-[0.3em] uppercase text-[#6ae75e] mb-5">
                Behind the project
              </p>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Built from the
                <br />
                ground up.
              </h2>

            </div>

            <p className="max-w-md text-slate-500 leading-relaxed">
              Electrolyfe isn't just a collection of pages.
              It's the result of personal questions igniting ideas and evolving into a collection
              of features that built this helpful website.
            </p>

          </div>
          </div>


        
      <div className="flex flex-wrap justify-center items-center gap-6">
      <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-2xl font-bold">
              Electrolyte questions
            </h2>
            <Image width={130} height={130} src={"/question.svg"} alt="web icon"></Image>
          </div>
        </TiltCard>
        <span className="hidden min-[1200px]:block text-5xl">
          &#8594;
        </span>

        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-2xl font-bold">
              Interesting ideas
            </h2>
            <Image width={130} height={130} src={"/idea.svg"} alt="web icon"></Image>
          </div>
        </TiltCard>
        <span className="hidden min-[1200px]:block text-5xl">
          &#8594;
        </span>

        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-2xl font-bold">
              Helpful website
            </h2>
            <Image width={130} height={130} src={"/website.svg"} alt="web icon"></Image>
          </div>
        </TiltCard>
      </div>
      </section>


      {/* =========================================================
          DEVELOPER
      ========================================================= */}

      <section className="relative bg-slate-950 text-white py-28 md:py-36">
      <div
  className="
    absolute
    inset-0
    opacity-[0.065]
    pointer-events-none
  "
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
    `,
    animation: "driftgrid 8s linear infinite",
    backgroundSize: "80px 80px"
  }}
/>

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] uppercase text-[#6ae75e] mb-6">
              The person behind Electrolyfe
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Built by a curious human.
            </h2>

            <div className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-slate-400">

              <p>
                Hi, I'm <span className="text-white font-semibold">
                  Amr Mostafa
                </span>.
              </p>

              <p className="mt-6">
                Electrolyfe is a project I built from the ground up
                to explore the intersection of technology, data,
                design, and nutrition.
              </p>

              <p className="mt-6">
                Every search result, every page, every component,
                and every interaction is part of the journey of
                turning an idea into a real product.
              </p>

            </div>


            {/* Links */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="https://github.com/zenger4000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  text-slate-950
                  font-semibold
                  transition
                  hover:bg-slate-200
                "
              >
                GitHub
              </a>


              <a
                href="https://www.linkedin.com/in/amr-mostafa-501627231/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  bg-white
                  text-slate-950
                  font-semibold
                  transition
                  hover:bg-slate-200
                "
              >
                LinkedIn
              </a>


              <a
                href="mailto:amrmostafa.co@gmail.com"
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  bg-white
                  text-slate-950
                  font-semibold
                  transition
                  hover:bg-slate-200
                "
              >
                Contact Mail
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-white text-slate-950 py-32">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#e22c37]/10 blur-[100px]" />

          <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-[#6ae75e]/10 blur-[100px]" />

        </div>


        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <p className="text-sm tracking-[0.3em] uppercase text-[#6ae75e] mb-6">
            Your turn
          </p>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Go explore.
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-lg text-slate-500 leading-relaxed">
            Search for a food. Explore an electrolyte.
            Compare something you've always wondered about.
            There's plenty to discover.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/search"
              className="
                px-8
                py-4
                rounded-full
                bg-slate-950
                text-white
                font-semibold
                transition
                hover:bg-slate-800
              "
            >
              Explore Foods
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}