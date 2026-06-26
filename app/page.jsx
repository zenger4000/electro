import Image from "next/image"
import hero from "../public/hero.png"
import TiltCard from "./Tiltcard"
import food from "../public/food.svg"
import science from "../public/science.svg"
import hydration from "../public/hydration.svg"
import mineral from "../public/mineral.svg"
import Ion from "./Ion"
import Features from "./Features"

export default function Home() {
  return (
    <div className="all">
      <main>
        <div>
          <Image className="object-cover min-w-full h-screen md:h-full drop-shadow-[0_8px_10px_rgba(0,0,0,0.3)]" src={hero} alt="electrolytes power our lives"></Image>
        </div>
        <div className="bg-white/90 min-h-[200px] p-9">
          <h1 className="md:text-5xl text-3xl font-bold text-[#089090]">
            Electrolytes made simple
          </h1>
          <p className="text-black m-5 text-2xl md:text-4xl leading-relaxed tracking-wide">
          Understand hydration, discover electrolyte-rich foods, calculate your needs, and learn how sodium, potassium, magnesium, and other essential minerals power your body.
          </p>
        </div>
      <div className="flex justify-center items-center gap-8 flex-wrap min-h-screen bg-black p-12 shadow-[0_-8px_10px_rgba(0,0,0,0.3)]">
        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-xl font-bold">
            7 Essential Electrolytes
            </h2>
            <Image className="w-1/2" src={mineral} alt="food icon"></Image>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-xl font-bold">
            10,000+ Foods Indexed
            </h2>
            <Image className="w-1/2" src={food} alt="food icon"></Image>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-xl font-bold">
            Multiple Hydration Tools
            </h2>
            <Image className="w-1/2" src={hydration} alt="food icon"></Image>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="p-6 flex justify-center items-center flex-col gap-2">
            <h2 className="text-xl font-bold">
            Science-Based Information
            </h2>
            <Image className="w-1/2" src={science} alt="food icon"></Image>
          </div>
        </TiltCard>
      </div>
      <div className="flex-col md:flex-row bg-black text-white flex justify-center items-center h-auto">
        <div className="p-6 md:p-6 md:w-1/2 w-full">
          <h2 className=" text-3xl md:text-5xl font-bold">What are Electrolytes ?</h2><br /><br />
          <div className="text-2xl md:text-4xl">
          Electrolytes are minerals that carry an electrical charge.                    
            They help regulate: <br /><br />
            <div className="md:ml-12">
            ✓ Hydration <br />
            ✓ Nerve signals<br />
            ✓ Muscle contractions<br />
            ✓ Heart rhythm<br />
            ✓ pH balance
            </div>

          </div>
        </div>
        <Ion></Ion>
      </div>
      <Features></Features>
    </main>
    </div>
  )
}
