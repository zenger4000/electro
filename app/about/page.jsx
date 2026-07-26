// app/about/page.jsx

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen  text-slate-900">

      {/* Hero */}

      <section className="px-6 pt-32 pb-20 bg-[url('/about.png')] bg-cover bg-center">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
            About Electrolyfe
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Making nutrition easier to explore.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 leading-relaxed">
            Electrolyfe is an independent project built to make essential
            nutrition information easier to explore, understand, and compare.
          </p>

        </div>
      </section>


      {/* Why Electrolyfe */}

      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Why Electrolyfe?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nutrition data can be overwhelming.
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Nutrition databases contain an incredible amount of information,
              but finding the information that actually matters can sometimes
              feel complicated.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Electrolyfe was created to bring some of that information together
              in a simpler experience, starting with electrolytes and expanding
              into other essential minerals and nutrients.
            </p>
          </div>


          {/* Visual */}

          <div className="
            min-h-[320px]
            rounded-3xl
            bg-slate-100
            border
            border-slate-200
            flex
            items-center
            justify-center
            shadow-sm
          ">
            <div className="text-center px-8">
              <div className="text-6xl mb-4">
                ⚡
              </div>

              <p className="text-slate-500 font-medium">
                Explore. Compare. Understand.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* What You Can Do */}

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              Explore Electrolyfe
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built around the way people explore nutrition.
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500">
              Electrolyfe combines nutrition data with a focused,
              easy-to-navigate experience.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <FeatureCard
              title="Search Foods"
              description="Explore foods and discover their nutritional composition through a searchable food database."
            />

            <FeatureCard
              title="Explore Electrolytes"
              description="Learn about potassium, sodium, magnesium, and calcium and discover their roles in the body."
            />

            <FeatureCard
              title="Compare Foods"
              description="Compare foods side by side to better understand their electrolyte and nutritional profiles."
            />

            <FeatureCard
              title="Discover Minerals"
              description="Explore other essential minerals and learn how they contribute to overall nutrition."
            />

            <FeatureCard
              title="Understand the Data"
              description="Turn raw nutritional data into information that is easier to explore and interpret."
            />

            <FeatureCard
              title="Built for Exploration"
              description="Move between food data, nutrients, and educational content without losing sight of the bigger picture."
            />

          </div>

        </div>
      </section>


      {/* Built By */}

      <section className="px-6 py-20 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-8
            md:p-12
          ">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
              The Developer Behind Electrolyfe
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built from the ground up.
            </h2>

            <div className="max-w-3xl text-slate-600 leading-relaxed space-y-4">

              <p>
                Hi, I'm <strong>Amr Mostafa</strong>, the developer behind
                Electrolyfe.
              </p>

              <p>
                Electrolyfe started as an idea and grew into a full web
                application designed, developed, and refined from the ground up.
                The project gave me the opportunity to work across the entire
                development process—from designing the user experience and
                building reusable components to working with external APIs,
                handling real-world nutrition data, and creating a responsive
                application that is enjoyable to use.
              </p>

              <p>
                More than just a nutrition project, Electrolyfe is also a
                reflection of how I approach building software: start with a
                meaningful problem, keep improving the experience, and pay
                attention to the details that make a product feel complete.
              </p>

            </div>


            {/* Professional Links */}

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="YOUR_GITHUB_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-slate-900
                  text-white
                  font-semibold
                  transition
                  hover:bg-slate-700
                "
              >
                GitHub
              </a>

              <a
                href="YOUR_LINKEDIN_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-white
                  text-slate-700
                  font-semibold
                  border
                  border-slate-200
                  transition
                  hover:bg-slate-100
                "
              >
                LinkedIn
              </a>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="
                  px-5
                  py-2.5
                  rounded-xl
                  bg-white
                  text-slate-700
                  font-semibold
                  border
                  border-slate-200
                  transition
                  hover:bg-slate-100
                "
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Technology */}

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
            Behind the Project
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built with modern web technologies.
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 mb-10">
            Electrolyfe combines modern frontend development with real-world
            nutritional data to create an application that is both useful and
            technically robust.
          </p>


          <div className="flex flex-wrap justify-center gap-3">

            {[
              "Next.js",
              "React",
              "JavaScript",
              "Tailwind CSS",
              "USDA FoodData Central API",
            ].map((technology) => (

              <span
                key={technology}
                className="
                  px-5
                  py-2.5
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  text-slate-600
                  font-medium
                  shadow-sm
                "
              >
                {technology}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* Disclaimer */}

      <section className="px-6 pb-20">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm text-slate-400 leading-relaxed">
            Electrolyfe is an educational and informational project.
            Nutritional information is provided for general educational
            purposes and is not intended to replace professional medical or
            nutritional advice.
          </p>

        </div>

      </section>


      {/* Footer CTA */}

      <section className="px-6 py-20 bg-slate-900 text-white">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to explore?
          </h2>

          <p className="text-slate-300 mb-8">
            Discover foods, explore essential nutrients, and start understanding
            your nutritional balance.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">

            <Link
              href="/search"
              className="
                px-6
                py-3
                rounded-xl
                bg-white
                text-slate-900
                font-semibold
                transition
                hover:bg-slate-200
              "
            >
              Explore Foods
            </Link>

            <Link
              href="/electrolytes"
              className="
                px-6
                py-3
                rounded-xl
                border
                border-slate-600
                text-white
                font-semibold
                transition
                hover:bg-slate-800
              "
            >
              Explore Electrolytes
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* Feature Card */

function FeatureCard({ title, description }) {
  return (
    <div className="
      rounded-2xl
      bg-white
      border
      border-slate-200
      p-6
      shadow-sm
      transition
      hover:-translate-y-1
      hover:shadow-md
    ">

      <h3 className="text-lg font-bold mb-3">
        {title}
      </h3>

      <p className="text-sm text-slate-500 leading-relaxed">
        {description}
      </p>

    </div>
  );
}