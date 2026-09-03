"use client";

import Image from "next/image";
import { Member } from "../types/band";

interface MemberModalProps {
  member: Member;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm border border-[#2A2528] bg-[#1A1719] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 text-[#948C86] hover:text-[#EDE7DD]"
        >
          ✕
        </button>

        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
          {member.imageUrl ? (
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              sizes="192px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#2A2528] text-3xl text-[#948C86]">
              {member.name.charAt(0)}
            </div>
          )}
        </div>

        <h3 className="mt-4 text-center font-(family-name:--font-display) text-2xl text-[#EDE7DD]">
          {member.name}
        </h3>
        <p className="mt-1 text-center text-sm text-[#948C86]">{member.role}</p>
      </div>
    </div>
  );
}