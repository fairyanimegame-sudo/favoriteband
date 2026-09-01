import Image from "next/image";
import { Band } from "../types/band";

interface BandCardProps {
  band: Band;
  reversed?: boolean;
}

export default function BandCard({ band, reversed = false }: BandCardProps) {
  const genres = band.genre.split(",").map((g) => g.trim());

  return (
    <article
      className={`flex flex-col gap-8 border-t border-[#2A2528] py-12 md:flex-row md:items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-56 w-full shrink-0 overflow-hidden md:h-72 md:w-80">
        <Image
          src={band.imageUrl}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover grayscale transition duration-300 hover:grayscale-0"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-baseline gap-4">
          <h3 className="font-(family-name:--font-display) text-4xl text-[#EDE7DD]">
            {band.name}
          </h3>
          <span className="text-sm text-[#948C86]">
            est. {band.formationYear}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {genres.map((g) => (
            <span
              key={g}
              className="rounded-full border border-[#C1272D]/50 px-3 py-1 text-xs text-[#D9A441]"
            >
              {g}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-1.5 text-sm">
          {band.members.map((member) => (
            <li key={member.id} className="text-[#948C86]">
              <span className="text-[#EDE7DD]">{member.name}</span>
              {" — "}
              {member.role}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}