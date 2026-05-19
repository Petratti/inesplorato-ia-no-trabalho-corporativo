import { useRef, useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.png";
import heroVideo from "@/assets/video-hero-reverse.webm";

const HERO_VIDEO_SRC = heroVideo;
const HERO_POSTER_IMG = heroBg;

import svgPaths from "@/svg/hero-decoration";
import newTitlePaths from "@/svg/logo-title";
import { useDownloadModal } from "./DownloadModal";

/* ── Main title SVG logo (Camada) ─────────────────────────── */
function TitleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 625 393"
    >
      <g>
        <g>
          <path d={newTitlePaths.p1f1ba900} fill="white" />
          <path d={newTitlePaths.p1c8cf600} fill="white" />
          <path d={newTitlePaths.p1f3bef2} fill="white" />
          <path d={newTitlePaths.p1d52f300} fill="white" />
          <path d={newTitlePaths.p1f38b0} fill="white" />
          <path d={newTitlePaths.p22e53d80} fill="white" />
          <path d={newTitlePaths.p11c9e980} fill="white" />
          <path d={newTitlePaths.p23551500} fill="white" />
          <path d={newTitlePaths.p5f88d00} fill="white" />
          <path d={newTitlePaths.p2738ff80} fill="white" />
          <path d={newTitlePaths.p20a4bd00} fill="white" />
          <path d={newTitlePaths.pb21bd00} fill="white" />
          <path d={newTitlePaths.p20f36500} fill="white" />
          <path d={newTitlePaths.p9b05380} fill="white" />
          <path d={newTitlePaths.p2598c00} fill="white" />
          <path d={newTitlePaths.p16360f80} fill="white" />
          <path d={newTitlePaths.p1f074d00} fill="white" />
          <path d={newTitlePaths.p332ce680} fill="white" />
          <path d={newTitlePaths.p59c51c0} fill="white" />
          <path d={newTitlePaths.p120c8000} fill="white" />
          <path d={newTitlePaths.p1a999490} fill="white" />
          <path d={newTitlePaths.p395b7000} fill="white" />
          <path d={newTitlePaths.p265e5900} fill="white" />
          <path d={newTitlePaths.p2aee9400} fill="white" />
          <path d={newTitlePaths.p1b8cda00} fill="white" />
          <path d={newTitlePaths.p3d8ecc80} fill="white" />
          <path d={newTitlePaths.p115d5c00} fill="white" />
          <path d={newTitlePaths.p3072fe00} fill="white" />
          <path d={newTitlePaths.p49db300} fill="white" />
          <path d={newTitlePaths.p19753780} fill="white" />
          <path d={newTitlePaths.p31e06e80} fill="white" />
          <path d={newTitlePaths.p87f6180} fill="white" />
          <path d={newTitlePaths.p3109e480} fill="white" />
          <path d={newTitlePaths.p3297ab00} fill="white" />
          <path d={newTitlePaths.p23248080} fill="white" />
          <path d={newTitlePaths.p11dcba40} fill="white" />
          <path d={newTitlePaths.p2cddd6c0} fill="white" />
          <path d={newTitlePaths.p12675500} fill="white" />
          <path d={newTitlePaths.p1a6b7380} fill="white" />
          <path d={newTitlePaths.p3e673200} fill="white" />
          <path d={newTitlePaths.p216ef100} fill="white" />
          <path d={newTitlePaths.p866f000} fill="white" />
          <path d={newTitlePaths.p5e17480} fill="white" />
          <path d={newTitlePaths.pa282f80} fill="white" />
          <path d={newTitlePaths.p3dfcd950} fill="white" />
          <path d={newTitlePaths.p24bc5700} fill="white" />
          <path d={newTitlePaths.p2bc81a00} fill="white" />
          <path d={newTitlePaths.p17ac0c80} fill="white" />
          <path d={newTitlePaths.p2df00a00} fill="white" />
          <path d={newTitlePaths.p356cf460} fill="white" />
          <path d={newTitlePaths.p2955f180} fill="white" />
          <path d={newTitlePaths.p5cbf000} fill="white" />
          <path d={newTitlePaths.p28909300} fill="white" />
          <path d={newTitlePaths.p37c74e00} fill="white" />
          <path d={newTitlePaths.p33e9d900} fill="white" />
          <path d={newTitlePaths.p2d044300} fill="white" />
          <path d={newTitlePaths.p233c0180} fill="white" />
          <path d={newTitlePaths.p234a6e00} fill="white" />
          <path d={newTitlePaths.p2d39bc00} fill="white" />
          <path d={newTitlePaths.pb9a5d80} fill="white" />
          <path d={newTitlePaths.p25931d40} fill="white" />
          <path d={newTitlePaths.p24e1ba00} fill="white" />
        </g>
      </g>
    </svg>
  );
}

/* ── Inesplorato logo (top-right corner) ──────────────────── */
function InesploratoLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 198 50"
    >
      <g>
        <path d={svgPaths.p38db8200} fill="white" />
        <path d={svgPaths.p1b124d00} fill="white" />
        <path d={svgPaths.p2c6a1270} fill="white" />
        <path d={svgPaths.p2d6aa100} fill="white" />
        <path d={svgPaths.p28f3bc80} fill="white" />
        <path d={svgPaths.p28234b80} fill="white" />
        <path d={svgPaths.p1b9fec00} fill="white" />
        <path d={svgPaths.pa08e480} fill="white" />
        <path d={svgPaths.pf220e00} fill="white" />
        <path d={svgPaths.p3756c580} fill="white" />
        <path d={svgPaths.pccf5c00} fill="white" />
        <path d={svgPaths.p8a31700} fill="white" />
        <path d={svgPaths.p13dea180} fill="white" />
        <path d={svgPaths.p1613f780} fill="white" />
        <path d={svgPaths.p37f51a00} fill="white" />
        <path d={svgPaths.p325ebe00} fill="white" />
      </g>
    </svg>
  );
}

/* ── Download icon & button ───────────────────────────────── */
function DownloadIcon() {
  return (
    <div className="w-[24px] h-[21px] relative">
      <svg className="block size-full" fill="none" viewBox="0 0 24 21">
        <path d="M12 14L5 1L19 1L12 14Z" fill="#BC7700" />
        <rect fill="#BC7700" height="3" width="22" x="1" y="18" />
      </svg>
    </div>
  );
}

function DownloadButton() {
  const { open } = useDownloadModal();
  return (
    <a
      href="#"
      className="flex items-center shrink-0 cursor-pointer group"
      onClick={(e) => { e.preventDefault(); open(); }}
    >
      {/* Text part */}
      <div className="bg-[#ffcd00] flex items-center justify-center px-[16px] py-[18px] md:px-[32px] md:py-[28px] transition-colors group-hover:bg-[#ffe04d]">
        <p className="font-['Outfit',sans-serif] font-semibold text-[#8e4900] text-[16px] md:text-[16px] tracking-[0.5px] leading-[14px] whitespace-nowrap">
          Baixar Estudo
        </p>
      </div>
      {/* Icon part */}
      <div className="bg-[#ffcd00] flex items-center justify-center w-[48px] relative border-l border-[#bc7700] self-stretch transition-colors group-hover:bg-[#ffe04d]">
        <DownloadIcon />
      </div>
    </a>
  );
}

/*
 * ── HeroBackground ───────────────────────────────────────────
 * Only the background image. Lives inside the sticky wrapper
 * in App.tsx so it stays fixed behind scrolling content.
 */
export function HeroBackground() {
  return (
    <div className="relative w-full h-[100svh] md:h-[760px] bg-[#d0e0e3] overflow-hidden">
      {/* Background media -- mobile */}
      <div className="absolute inset-0 md:hidden">
        {/* Placeholder image – visible until the video loads or if src is missing */}
        <img
          className="absolute inset-0 size-full object-cover"
          src={HERO_POSTER_IMG}
          alt="Hero background"
        />
        <video
          className="absolute inset-0 size-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_IMG}
        />
        {/* Color overlay -- mobile only */}
        <div className="absolute inset-0 bg-[#4E1807]/30 pointer-events-none" />
      </div>

      {/* Background media -- desktop */}
      <div className="absolute inset-0 hidden md:block">
        {/* Placeholder image – visible until the video loads or if src is missing */}
        <img
          className="absolute inset-0 size-full object-cover"
          src={HERO_POSTER_IMG}
          alt="Hero background"
        />
        <video
          className="absolute inset-0 size-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_POSTER_IMG}
        />
      </div>
    </div>
  );
}

/*
 * ── HeroSection (foreground) ─────────────────────────────────
 * Logos, title, text and CTA. Scrolls normally with the page.
 * Overlaps the sticky background via negative margin in App.tsx.
 * sectionRef kept on root div for future control.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-x-clip flex flex-col h-[100svh] md:block md:h-[760px]"
    >

      {/* Inesplorato logo -- top-left above Camada -- mobile */}
      <a
        href="https://inesplorato.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 self-start ml-[24px] mt-[24px] mb-[8px] w-[158px] md:hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s",
        }}
      >
        <InesploratoLogo className="w-full h-auto" />
      </a>

      {/* Inesplorato logo -- top-right -- desktop */}
      <a
        href="https://inesplorato.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 top-[48px] right-[48px] w-[198px] h-[50px] hidden md:block"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s",
        }}
      >
        <InesploratoLogo className="w-full h-full" />
      </a>

      {/* Title SVG logo -- mobile */}
      <div
        className="relative z-10 mt-[24px] mx-[24px] w-[calc(100%-48px)] md:hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
        }}
      >
        <TitleLogo className="w-full h-auto pointer-events-none" />
      </div>

      {/* Title SVG logo -- desktop */}
      <div
        className="absolute left-0 top-0 p-[48px] max-w-[660px] w-full hidden md:block"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateX(0)" : "translateX(-60px)",
          transition: "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
        }}
      >
        <TitleLogo className="w-full h-auto pointer-events-none" />
      </div>

      {/* Spacer to push gradient content down -- mobile */}
      <div className="flex-1 min-h-0 md:hidden" />

      {/* Bottom gradient overlay + content -- mobile */}
      <div
        className="relative z-10 flex flex-col gap-[16px] px-[24px] py-[24px] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(105,52,35,0) 0%, rgba(105,52,35,0.85) 100%)",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s",
        }}
      >
        {/* Text content */}
        <p className="font-['Barlow_Condensed',sans-serif] font-medium text-[18px] text-white uppercase leading-[18px] whitespace-pre-wrap max-w-[276px]">
          Redefinindo poder, decisão e valor no trabalho mediado por IA
        </p>
        <div className="font-['Outfit',sans-serif] font-normal text-[14px] text-white leading-[20.3px] max-w-[318px]">
          <p className="mb-0">
            {`A Inteligência Artificial já faz parte da rotina das empresas. O que ainda está em disputa é como ela está sendo usada no trabalho corporativo.`}
          </p>
          <p>
            Este projeto apresenta diretrizes para o uso da IA de forma
            estratégica, ética e alinhada aos desafios das organizações.
          </p>
        </div>
        {/* Button */}
        <div className="pt-[8px]">
          <DownloadButton />
        </div>
      </div>

      {/* Bottom gradient overlay + content -- desktop */}
      <div
        className="absolute bottom-0 left-0 w-full hidden md:flex items-end justify-between p-[48px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(105,52,35,0) 0%, rgba(105,52,35,0.8) 100%)",
          height: "40%",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s",
        }}
      >
        {/* Text content */}
        <div className="flex flex-col gap-[24px] flex-1 min-w-0 text-white">
          <p className="font-['Barlow_Condensed',sans-serif] font-medium text-[24px] uppercase leading-none whitespace-pre-wrap">
            Redefinindo poder, decisão e valor no trabalho mediado por IA
          </p>
          <div className="font-['Outfit',sans-serif] font-normal text-[16px] leading-[1.45] max-w-[537px]">
            <p className="mb-0">
              {`A Inteligência Artificial já faz parte da rotina das empresas. O que ainda está em disputa é como ela está sendo usada no trabalho corporativo.`}
            </p>
            <p>
              Este projeto apresenta diretrizes para o uso da IA de forma
              estratégica, ética e alinhada aos desafios das organizações.
            </p>
          </div>
        </div>
        {/* Button */}
        <DownloadButton />
      </div>
    </div>
  );
}