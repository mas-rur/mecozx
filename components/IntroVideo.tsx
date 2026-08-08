export default function IntroVideo() {
  return (
    <section className="mb-16 w-full flex justify-center">
      <div className="w-full max-w-[900px] aspect-video bg-white rounded-[2rem] p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden">
        <video
          controls
          playsInline
          poster="/tumbnail.jpg"
          className="w-full h-full rounded-[1.75rem] bg-black object-contain"
        >
          <source src="/introvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
