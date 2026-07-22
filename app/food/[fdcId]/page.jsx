import ElectrolyteGrid from "@/app/components/food/ElectrolyteGrid";
import FoodHero from "@/app/components/food/FoodHero";
import MineralGrid from "@/app/components/food/MineralGrid";
import QuickStats from "@/app/components/food/QuickStats";
import VitaminGrid from "@/app/components/food/VitaminGrid";

export default async function FoodDetails({ params }) {

    const fdcId = params.fdcId;
    const response = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${process.env.FDC_API_KEY}` ,{
        next : {
            revalidate : 86400
        }})
    
    
        if (!response.ok) {
            switch (response.status) {
                case 404:
                    throw new Error("Food not found.");
        
                case 429:
                    throw new Error("Too many requests. Please try again later.");
        
                case 500:
                    throw new Error("USDA server error.");
        
                default:
                    throw new Error("Failed to fetch food.");
            }
        }
        
    const food = await response.json();
    return ( 
        <div className="min-h-screen p-16">
            <FoodHero food={food}/>
            <QuickStats  food={food}/>
            <ElectrolyteGrid  food={food}/>
            <VitaminGrid  food={food}/>
            <MineralGrid  food={food}/>
        </div>
     );
}
