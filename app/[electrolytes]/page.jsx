// app/[electrolyte]/page.jsx

import { notFound } from "next/navigation";

import ElectrolyteHero from "@/app/components/electrolyte/ElectrolyteHero";
import ElectrolyteQuickFacts from "@/app/components/electrolyte/ElectrolyteQuickFacts";
import ElectrolyteOverview from "@/app/components/electrolyte/ElectrolyteOverview";
import ElectrolyteBenefits from "@/app/components/electrolyte/ElectrolyteBenefits";
import DailyRequirements from "@/app/components/electrolyte/DailyRequirements";
import FoodSources from "@/app/components/electrolyte/FoodSources";
import Deficiency from "@/app/components/electrolyte/Deficiency";
import ExcessIntake from "@/app/components/electrolyte/ExcessIntake";
import AtRiskGroups from "@/app/components/electrolyte/AtRiskGroups";
import FAQ from "@/app/components/electrolyte/FAQ";
import ScientificReferences from "@/app/components/electrolyte/ScientificReferences";

import {
    potassium,
    sodium,
    magnesium,
    calcium,
} from "@/app/lib/electrolytes";

const electrolyteData = {
    potassium,
    sodium,
    magnesium,
    calcium,
};

export function generateStaticParams() {
    return [
        { electrolyte: "potassium" },
        { electrolyte: "sodium" },
        { electrolyte: "magnesium" },
        { electrolyte: "calcium" },
    ];
}

export const dynamicParams = false;

export default function ElectrolytePage({ params }) {

    const data = electrolyteData[params.electrolytes];

    if (!data) {
        notFound();
    }

    return (
        <div className="pt-20">
            <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10">

                <ElectrolyteHero
                    {...data.hero}
                />

                <ElectrolyteQuickFacts
                    {...data.quickFacts}
                />

                <ElectrolyteOverview
                    {...data.overview}
                />

                <ElectrolyteBenefits
                    {...data.benefits}
                />

                <DailyRequirements
                    {...data.dailyRequirements}
                />

                <FoodSources
                    {...data.foodSources}
                />

                <Deficiency
                    {...data.deficiency}
                />

                <ExcessIntake
                    {...data.excessIntake}
                />

                <AtRiskGroups
                    {...data.atRiskGroups}
                />

                <FAQ
                    {...data.faq}
                />

                <ScientificReferences
                    {...data.scientificReferences}
                />

            </main>
        </div>
    );
}