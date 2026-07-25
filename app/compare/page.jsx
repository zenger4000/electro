import CompareContent from "@/app/components/compare/CompareContent";


export default async function ComparePage({ searchParams }) {

    const food1 = searchParams?.food1;
    const food2 = searchParams?.food2;


    if (!food1 || !food2) {

        return (
            <main className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-4xl text-center">

                    <h1 className="text-4xl font-bold text-slate-900">
                        Compare Foods
                    </h1>

                    <p className="mt-4 text-slate-600">
                        Choose two foods to compare their nutritional profiles
                    </p>

                </div>

            </main>
        );
    }


    const [response1, response2] =
        await Promise.all([

            fetch(
                `https://api.nal.usda.gov/fdc/v1/food/${food1}?api_key=${process.env.FDC_API_KEY}`,
                {
                    next: {
                        revalidate: 86400
                    }
                }
            ),

            fetch(
                `https://api.nal.usda.gov/fdc/v1/food/${food2}?api_key=${process.env.FDC_API_KEY}`,
                {
                    next: {
                        revalidate: 86400
                    }
                }
            ),

        ]);


    if (!response1.ok || !response2.ok) {

        return (
            <main className="min-h-screen bg-slate-50 px-4 py-16">

                <div className="mx-auto max-w-4xl text-center">

                    <h1 className="text-3xl font-bold text-slate-900">
                        Unable to compare these foods
                    </h1>

                    <p className="mt-4 text-slate-600">
                        One or both foods could not be loaded from USDA FoodData Central.
                    </p>

                </div>

            </main>
        );
    }


    const [foodA, foodB] =
        await Promise.all([
            response1.json(),
            response2.json(),
        ]);


    return (
        <CompareContent
            foodA={foodA}
            foodB={foodB}
        />
    );
}