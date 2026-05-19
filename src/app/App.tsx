import { HeroBackground, HeroSection } from "./components/HeroSection";
import { PartnersBar } from "./components/PartnersBar";
import { AboutSection } from "./components/AboutSection";
import { HowCreatedSection } from "./components/HowCreatedSection";
import { PeopleSection } from "./components/PeopleSection";
import { MediaSection } from "./components/MediaSection";
import { FooterSection } from "./components/FooterSection";
import { DownloadModalProvider } from "./components/DownloadModal";

export default function App() {
  return (
    <DownloadModalProvider>
      <div className="bg-[#e1edef] w-full min-h-full overflow-x-clip">
        {/* Hero background image — stays sticky behind everything */}
        <div className="sticky top-0 z-0">
          <HeroBackground />
        </div>

        {/* All scrollable content — overlaps the sticky background */}
        <div className="relative z-10 -mt-[100svh] md:-mt-[760px]">
          {/* Hero foreground (logos, text, button) — scrolls normally */}
          <HeroSection />
          {/* Remaining sections with opaque bg cover the sticky hero */}
          <div className="relative bg-[#e1edef]">
            <PartnersBar />
            <AboutSection />
            <HowCreatedSection />
            <PeopleSection />
            <MediaSection />
            <PartnersBar />
            <FooterSection />
          </div>
        </div>
      </div>
    </DownloadModalProvider>
  );
}