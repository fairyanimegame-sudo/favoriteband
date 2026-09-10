"use client";

export default function LikeButton({ count, onClick }: { count: number; onClick: () => void }) {
    return (
        <button type="button" 
                onClick={onClick}
                className="rounded-full border border-[#D9A441] px-4 py-1.5 text-xs text-[#EDE7DD] transition hover:bg-[#D9A441]/20"
        >
            Like ({count})
        </button>
    );
}
