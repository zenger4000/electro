import Image from "next/image";
export default function ElectrolyteHero({
    name,
    symbol,
    color,
    url,
    description,
    dailyValue,
}) {
    return (
        <section className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <Image
            src={url}
            alt="Potassium hero"
            fill
            className="object-cover"
            priority
        />
    </section>
    );
}