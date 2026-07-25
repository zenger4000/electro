import MineralHero from "@/app/components/minerals/MineralHero";
import MineralQuickFacts from "@/app/components/minerals/MineralQuickFacts";
import MineralOverview from "@/app/components/minerals/MineralOverview";
import MineralCards from "@/app/components/minerals/MineralCards";
import MineralFoodSources from "@/app/components/minerals/MineralFoodSources";
import ChlorideNote from "@/app/components/minerals/ChlorideNote";
import MineralFAQ from "@/app/components/minerals/MineralFAQ";
import MineralScientificReferences from "@/app/components/minerals/MineralScientificReferences";

import minerals from "@/app/lib/minerals";

export const dynamic = "force-static";

export const metadata = {
  title: "Essential Minerals | Electrolyfe",
  description:
    "Learn about essential minerals including iron, zinc, copper, manganese, selenium, and phosphorus, their roles in the body, and common food sources.",
};


const MineralsPage = () => {
  return (
    <main>
      <MineralHero hero={minerals.hero} />

      <MineralQuickFacts quickFacts={minerals.quickFacts} />

      <MineralOverview overview={minerals.overview} />

      <MineralCards minerals={minerals.minerals} />

      <MineralFoodSources foodSources={minerals.foodSources} />

      <ChlorideNote chloride={minerals.chloride} />

      <MineralFAQ faq={minerals.faq} />

      <MineralScientificReferences
        references={minerals.scientificReferences}
      />
    </main>
  );
};

export default MineralsPage;