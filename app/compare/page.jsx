import CompareContent from "@/app/components/compare/CompareContent";

export const metadata = {
    title: "Compare | Electrolyfe",
    description:
      "Compare between 2 food's nutrational data",
  };

export default async function ComparePage({ searchParams }) {

    const food1 = searchParams?.food1;
    const food2 = searchParams?.food2;


    if (!food1 || !food2) {

        return (
            <main className="min-h-screen bg-[#e9f8f8] px-4 py-16 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-4xl text-center">

                    <h1 className="mt-8 text-4xl font-bold text-slate-900">
                        Compare Foods
                    </h1>

                    <p className="mt-4 text-slate-600 mb-8">
                        Choose two foods to compare their nutritional profiles.
                    </p>

                    <a href="/search">go to the search page</a>

                </div>

            </main>
        );
    }


    // const [response1, response2] =
    //     await Promise.all([

    //         fetch(
    //             `https://api.nal.usda.gov/fdc/v1/food/${food1}?api_key=${process.env.FDC_API_KEY}`,
    //             {
    //                 next: {
    //                     revalidate: 86400
    //                 }
    //             }
    //         ),

    //         fetch(
    //             `https://api.nal.usda.gov/fdc/v1/food/${food2}?api_key=${process.env.FDC_API_KEY}`,
    //             {
    //                 next: {
    //                     revalidate: 86400
    //                 }
    //             }
    //         ),

    //     ]);


    // if (!response1.ok || !response2.ok) {

    //     return (
    //         <main className="min-h-screen bg-[#e9f8f8] px-4 py-16">

    //             <div className="mx-auto max-w-4xl text-center">

    //                 <h1 className="text-3xl font-bold text-slate-900">
    //                     Unable to compare these foods
    //                 </h1>

    //                 <p className="mt-4 text-slate-600">
    //                     One or both foods could not be loaded from USDA FoodData Central.
    //                 </p>

    //             </div>

    //         </main>
    //     );
    // }


    // const [foodA, foodB] =
    //     await Promise.all([
    //         response1.json(),
    //         response2.json(),
    //     ]);

    const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods?fdcIds=${food1},${food2}&api_key=${process.env.FDC_API_KEY}`,
        {
            next: {
                    revalidate: 86400
                }
        }
      );

    if (!response.ok) {
        return (
                    <main className="min-h-screen bg-[#e9f8f8] px-4 py-16">
        
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

    const [foodA , foodB] = await response.json()

    return (
        <CompareContent
            foodA={foodA}
            foodB={foodB}
        />
    );
}