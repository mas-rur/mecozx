const lightQuotes = [
  {
    quote:
      "A brilliant combination of minimalist design and high-tech utility. Finally, crypto hardware that doesn't look clunky.",
    handle: "@Alex_Dev",
  },
  {
    quote:
      "Love the transparency of the roadmap. The inductive coupling tech is exactly what the industry needs right now.",
    handle: "@VentureCapitalist",
  },
  {
    quote:
      "The T-OLED display is stunning. I can't wait to see how the environmental and carbon-offset integrations pan out.",
    handle: "@EcoCrypto",
  },
];

const darkQuotes = [
  {
    quote:
      "Joined the waitlist instantly. The biometric identification feature makes me feel incredibly secure about my assets.",
    handle: "@SecureHodler",
  },
  {
    quote: "Absolutely gorgeous mobile-first concept. It looks like it belongs in the future.",
    handle: "@UI_UX_Enthusiast",
  },
  {
    quote:
      "I've been looking for a seed round like this. The team's vision is crystal clear and executable.",
    handle: "@AngelInvestor",
  },
];

function Row({
  quotes,
  dark,
  direction,
}: {
  quotes: typeof lightQuotes;
  dark?: boolean;
  direction: "left" | "right";
}) {
  const doubled = [...quotes, ...quotes];
  return (
    <div
      className={`flex w-max gap-6 pr-6 ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      }`}
    >
      {doubled.map((t, i) => (
        <div
          key={i}
          className={`rounded-3xl p-6 w-[300px] md:w-[400px] shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border ${
            dark ? "bg-black text-white border-gray-800" : "bg-gray-50 border-gray-100"
          }`}
        >
          <p className={`text-sm md:text-base font-semibold mb-4 ${dark ? "" : "text-gray-800"}`}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <p
            className={`text-xs font-bold uppercase tracking-wide ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {t.handle}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mb-16 overflow-hidden marquee-container">
      <h3 className="text-lg font-bold mb-6 text-center md:text-left">Community Feedback</h3>
      <div className="mb-6">
        <Row quotes={lightQuotes} direction="right" />
      </div>
      <Row quotes={darkQuotes} dark direction="left" />
    </section>
  );
}
