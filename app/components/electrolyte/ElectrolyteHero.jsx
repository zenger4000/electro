import Image from "next/image";
export default function ElectrolyteHero({
    color,
    url,
}) {
    return (
        <section className="relative w-full">
          <div
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 50%, ${color} 100%)`,
          }}
          className={`absolute top-0 left-0 w-full h-full`}></div>

        <Image
            src={url}
            alt="electrolyte hero cover"
            width={1236}
            height={1024}
            className="object-cover min-w-full "
            quality={100}
            priority
        />
    </section>
    );
}