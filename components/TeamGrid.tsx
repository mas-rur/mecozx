import Image from "next/image";
import { teamMembers } from "@/lib/team-data";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.96H5.078z"
      />
    </svg>
  );
}

export default function TeamGrid() {
  return (
    <section className="mb-16">
      <h3 className="text-lg font-bold mb-6 text-center md:text-left">The Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.key}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                sizes="112px"
                className="rounded-full object-cover grayscale border-4 border-white shadow-sm"
              />
            </div>
            <h4 className="font-bold text-lg">{member.name}</h4>
            <p className="text-xs font-semibold text-gray-500 mb-5">{member.role}</p>
            <a
              href="#"
              className="bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <XIcon className="w-3 h-3" />
              Follow
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
