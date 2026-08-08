export default function PreviewCard() {
  return (
    <section className="my-32 flex justify-center items-center px-4">
      <div className="relative w-full max-w-[500px] aspect-[1.6/1] group cursor-default">
        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-purple-600/30 blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute -bottom-2 -right-4 w-48 h-20 bg-blue-500/20 blur-[50px] opacity-50 pointer-events-none" />

        <div className="relative w-full h-full rounded-[2.5rem] p-[1px] bg-gradient-to-br from-white/10 via-purple-500/30 to-blue-500/20 shadow-2xl overflow-hidden">
          <div className="relative w-full h-full bg-[#030303]/95 backdrop-blur-3xl rounded-[2.4rem] flex items-center justify-center overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent transform -skew-x-12 translate-x-[-20%] group-hover:translate-x-[20%] transition-transform duration-1000 pointer-events-none" />

            <div className="absolute bottom-6 left-6 w-[16%] h-[22%] rounded-xl bg-black border-t border-l border-white/5 border-b-2 border-r-2 border-black shadow-[inset_2px_2px_10px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
              <div className="w-full h-[1px] bg-white/5 absolute top-1/2" />
              <div className="w-[1px] h-full bg-white/5 absolute left-1/2" />
            </div>

            <h2 className="z-10 text-2xl md:text-3xl font-bold tracking-[0.5em] uppercase text-transparent bg-clip-text bg-[linear-gradient(110deg,#4b5563_20%,#ffffff_50%,#4b5563_80%)] bg-[length:200%_auto] animate-shimmer pl-2">
              Preview Soon
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
