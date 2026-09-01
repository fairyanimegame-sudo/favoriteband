import { Band } from "../types/band";
import BandCard from "./BandCard";

interface BandListProps {
  bands: Band[];
}

export default function BandList({ bands }: BandListProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24">
      <h2 className="text-sm tracking-widest text-[#948C86]">
        the lineup ({bands.length})
      </h2>
      <div>
        {bands.map((band, index) => (
          <BandCard key={band.id} band={band} reversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}