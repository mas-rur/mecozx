const items = [
  { label: "Idea", status: "Done", state: "done" },
  { label: "Research", status: "Done", state: "done" },
  { label: "Contact investors", status: "Done", state: "done" },
  { label: "Fund raising", status: "Ongoing", state: "active" },
  { label: "Prototype app", status: "Soon", state: "pending" },
  { label: "Card dev", status: "Soon", state: "pending" },
  { label: "Reveal demo card", status: "Soon", state: "pending" },
  { label: "Test launch", status: "Before 2027", state: "pending" },
  { label: "Main public launch", status: "Feb 2027", state: "pending" },
] as const;

export default function RoadmapTimeline() {
  return (
    <section className="mb-16 max-w-2xl">
      <h3 className="text-lg font-bold mb-6 text-center md:text-left">Development Roadmap</h3>
      <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-4">
        {items.map((item) => (
          <div key={item.label} className="relative pl-6">
            {item.state === "active" && (
              <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-1.5 animate-ping opacity-50" />
            )}
            <div
              className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${
                item.state === "pending"
                  ? "bg-white border-2 border-gray-300"
                  : "bg-black"
              }`}
            />
            <p
              className={`font-bold text-sm ${
                item.state === "pending" ? "text-gray-500" : "text-black"
              }`}
            >
              {item.label}
            </p>
            <p
              className={`text-xs font-semibold ${
                item.state === "active" ? "text-black" : "text-gray-400"
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
