"use client";

import Image from "next/image";
import { useState } from "react";
import CompleteDataBadge from "../components/CompleteDataBadge";
import ElectroExcellence from "../components/ElectroExcellence";
import info from "/public/info.svg"

const databases = [
    {
      name: "Branded",
      color: "bg-[#484c81]",
      description:
        "Commercial packaged foods submitted by manufacturers. Nutrient values come from product labels and company data."
    },
  {
    name: "Non-Branded / Foundation",
    color: "bg-[#66bd63]",
    description:
      "Laboratory-analyzed foods with detailed nutrient values. Includes many raw ingredients and commonly consumed foods."
  },
  {
    name: "SR Legacy",
    color: "bg-[#e7d25d]",
    description:
      "Historical Standard Reference foods preserved by USDA. Still widely used because many foods contain very complete nutrient profiles."
  },
  {
    name: "Survey (FNDDS)",
    color: "bg-[#ef5678]",
    description:
      "Foods used in national dietary intake surveys (NHANES). Represents foods as they are commonly consumed by the U.S. population."
  }
];

const ribbons = [
  {
    label: "K",
    text: "Potassium"
  },
  {
    label: "Na",
    text: "Sodium"
  },
  {
    label: "Mg",
    text: "Magnesium"
  },
  {
    label: "Ca",
    text: "Calcium"
  }
];

export default function SearchLegend() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition"
        >
            <Image width={32} src={info} alt="info" />
            <div>
                <h2 className="text-lg font-semibold text-slate-800">
                    Search Guide
                </h2>

                <p className="text-sm text-slate-500 mx-2">
                    Learn what the database labels and symbols mean.
                </p>
            </div>

            <span
                className={`text-xl text-black transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                }`}
                >
                ▼
            </span>
        </button>

<div
  className={`overflow-hidden transition-all duration-700 ${
    open ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="border-t border-slate-200 px-6 py-6 space-y-10">
          {/* USDA Databases */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-6">
              USDA Food Databases
            </h3>

            <div className="space-y-4">

              {databases.map((db) => (
                <div
                  key={db.name}
                  className="grid md:grid-cols-12 gap-4 items-center text-center"
                >
                  <div
                    className={`${db.color} text-white font-semibold text-sm rounded-2xl px-4 py-1 md:col-span-3`}
                  >
                    {db.name}
                  </div>

                  <div className="text-left text-slate-600 md:col-span-9 leading-relaxed">
                    {db.description}
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Ribbons */}

          <div>

            <h3 className="font-semibold text-slate-800 mb-6">
              Search Ribbons
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-12">

              {ribbons.map((ribbon) => (
                <div
                  key={ribbon.label}
                  className="flex items-center gap-4 mb-1"
                >
                  <ElectroExcellence ele={ribbon.label} />

                  <p className="text-slate-600">
                    Indicates the food is rich in{" "}
                    <strong>{ribbon.text}</strong>.
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-6 flex items-start gap-4 rounded-xl bg-amber-50 border border-amber-200 p-4">

              <span>
                <CompleteDataBadge size={28} />
                </span>

              <div>

                <h4 className="font-semibold text-slate-800">
                  Complete Electrolyte Profile
                </h4>

                <p className="text-slate-600 leading-relaxed mt-1">
                Foods marked with this star contain values for all four major electrolytes—Potassium, Sodium, Magnesium, and Calcium. Electrolyfe prioritizes these foods by displaying them first in the search results, making it easier to compare foods with the most complete electrolyte information.
                </p>

              </div>

            </div>

          </div>

         {/* USDA Data Source */}

<div className="rounded-xl border border-sky-200 bg-sky-50 p-5">

<h3 className="text-lg font-semibold text-slate-800 mb-2">
    🇺🇸 USDA FoodData Central
</h3>

<p className="text-slate-600 leading-relaxed">
    Electrolyfe uses data from the <strong>USDA FoodData Central</strong>,
    the official food composition database maintained by the U.S.
    Department of Agriculture. Nutrient information is collected from
    laboratory analyses, food manufacturers, and national dietary studies,
    depending on the database a food belongs to.
</p>

<div className="mt-4 rounded-lg bg-white border border-sky-100 p-4">
    <p className="text-sm text-slate-600 leading-relaxed">
        <span className="font-semibold text-slate-700">
            Why do some foods have fewer nutrients listed?
        </span>
        <br />
        Nutrient availability varies between USDA databases. Some foods
        include comprehensive laboratory measurements, while others only
        contain nutrients reported on the product label. This is why certain
        foods may display more ribbons or qualify for a{" "}
        <span className="font-semibold"> <CompleteDataBadge size={28} /> Complete Electrolyte Profile</span>.
    </p>
</div>

</div>

        </div>
        </div>
    </section>
  );
}