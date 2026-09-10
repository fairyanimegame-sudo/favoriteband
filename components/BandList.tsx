"use client";

import { useState, type ChangeEvent } from "react";
import { Band } from "../types/band";
import BandCard from "./BandCard";

interface BandListProps {
  bands: Band[];
}

export default function BandList({ bands }: BandListProps) {
  // 3. State ทั้งหมดของหน้านี้ ประกาศต่อเนื่องกัน
  const [keyword, setKeyword] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({});

  // 4. Event Handler ทั้งหมด
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFavorite(id: string) {
    setFavoriteIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((favoriteId) => favoriteId !== id) // เอาออก
        : [...prevIds, id]                                   // เพิ่มเข้าไป
    );
  }

  function handleLike(id: string) {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  }

  // 5. Derived State — คำนวณจากของที่มีอยู่แล้ว ไม่เก็บซ้ำ
  const searchText = keyword.trim().toLowerCase();
  const visibleBands = bands.filter((band) => {
    const matchband = band.name.toLowerCase().includes(searchText);
    const matchMember = band.members.some((member) =>
      member.name.toLowerCase().includes(searchText)
    );
    return matchband || matchMember;
  });
  const totalLikes = Object.values(likeCounts).reduce((sum, count) => sum + count, 0);

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm tracking-widest text-[#948C86]">
          the lineup ({visibleBands.length})
        </h2>
        <span className="text-sm text-[#D9A441]">
          Following {favoriteIds.length} bands
        </span>
      </div>

      <input
        type="search"
        aria-label="filter bands by name"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="Search band names..."
        className="mt-4 w-full rounded border border-[#2A2528] bg-transparent px-4 py-2 text-[#EDE7DD] placeholder:text-[#948C86] focus:border-[#C1272D] focus:outline-none"
      />

      {visibleBands.length === 0 ? (
        <p className="mt-12 text-center text-[#948C86]">
          No bands found matching your search.
        </p>
      ) : (
        <div>
          {visibleBands.map((band, index) => (
            <BandCard
              key={band.id}
              band={band}
              reversed={index % 2 === 1}
              isFavorite={favoriteIds.includes(band.id)}
              onToggleFavorite={handleToggleFavorite}
              likeCount={likeCounts[band.id] ?? 0}
              onLike={handleLike}
            />
          ))}
        </div>
      )}
    </section>
  );
}