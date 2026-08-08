import NavSidebar from "@/components/NavSidebar";
import FundingProgress from "@/components/FundingProgress";
import IntroVideo from "@/components/IntroVideo";
import InvestorForm from "@/components/InvestorForm";
import CryptoMarket from "@/components/CryptoMarket";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import PreviewCard from "@/components/PreviewCard";
import TeamGrid from "@/components/TeamGrid";
import Testimonials from "@/components/Testimonials";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";

export default function HomePage() {
  return (
    <div className="bg-white text-black selection:bg-black selection:text-white pb-20">
      <NavSidebar />

      <main className="max-w-6xl mx-auto px-6">
        <section className="mt-8 mb-16 text-center md:text-left md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <div>
            <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold mb-6">
              Seed Round Active
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transparent.
              <br />
              Biometric.
              <br />
              Crypto.
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-10 md:mb-0">
              The world&apos;s first T-OLED smart card powered by inductive coupling.
            </p>
          </div>
          <FundingProgress />
        </section>

        <IntroVideo />

        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div id="cap-table" className="mb-16">
            <InvestorForm />
          </div>
          <div id="assets" className="mb-16">
            <CryptoMarket />
          </div>
        </div>

        <div id="roadmap">
          <RoadmapTimeline />
        </div>

        <PreviewCard />

        <TeamGrid />

        <Testimonials />
      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  );
}
