import Image from "next/image";
import Link from "next/link";

export default function FoodSources({
    title,
    description,
    foods,
}) {
    return (
        <section className="overflow-hidden pb-6 rounded-3xl bg-white shadow-sm mx-7">

            <div className=" px-8 py-6">

                <h2 className="text-3xl font-bold text-slate-900">
                    {title}
                </h2>

                <p className="mt-2">
                    {description}
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">

                {foods.map((food) => (
                    
                    <div
                        key={food.name}
                        className="flex overflow-hidden rounded-xl relative flex-col md:flex-row items-center justify-center md:justify-end"
                    >
                        <div className="absolute drop-shadow-md left-1 md:left-2 p-4 min-w-[25%] max-w-[85%] z-10 h-fit flex flex-col content-between">

                            <h3 className="text-sm md:text-md  font-semibold text-white">
                                {food.name}
                            </h3>

                            <p className="text-sm md:text-md mt-3 mb-4 text-slate-50 ">
                                {food.amount}
                            </p>

                            {food.fdcId ? (
                                
                                <Link
                                href={`/food/${food.fdcId}`}
                                className="rounded-lg max-w-fit text-sm md:text-md font-semibold text-slate-50 transition hover:scale-105"
                                >
                                    Food Page →
                                </Link>

                                ) : (

                                <span className="text-sm text-slate-400">
                                    Food page coming soon
                                </span>

                                )}

                        </div>
                        <Image src={food.img} alt="photo" width={650} height={170} className="bg-right" />

                        

                    </div>

                ))}

            </div>

        </section>
    );
}