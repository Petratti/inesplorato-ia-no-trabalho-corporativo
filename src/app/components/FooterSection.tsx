import svgPaths from "@/svg/footer-social";
import inesploratoPaths from "@/svg/footer-inesplorato";
import { imgGroup } from "@/svg/footer-group";
import newTitlePaths from "@/svg/logo-title";
import { RevealOnScroll } from "./RevealOnScroll";

export function FooterSection() {
  return (
    <div className="w-full">
      {/* Main footer */}
      <div className="bg-[#36322f] w-full px-[24px] md:px-[48px] lg:px-[125px] py-[60px] md:py-[80px] lg:py-[120px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-[48px]">
          {/* Left: Book cover image */}
          <RevealOnScroll direction="left" duration={900} distance={50} className="shrink-0">
            <div className="w-full md:w-[280px] lg:w-[355px] overflow-hidden">
              <svg
                className="block w-full h-auto"
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
            </div>
          </RevealOnScroll>

          {/* Right: Inesplorato info */}
          <RevealOnScroll direction="right" duration={900} delay={200} distance={40} className="w-full lg:w-[541px] shrink-0">
            <div className="flex flex-col gap-[32px] md:gap-[48px]">
              {/* Decorative bar */}
              <div className="bg-[#d0e0e3] h-[8px] w-full" />

              {/* Inesplorato logo + description */}
              <div className="flex flex-col gap-[24px] md:gap-[32px]">
                {/* Inesplorato Logo SVG */}
                <div className="w-[160px] md:w-[198px] h-auto">
                  <div
                    className="relative w-full"
                    style={{
                      aspectRatio: "198 / 50",
                      maskImage: `url('${imgGroup}')`,
                      WebkitMaskImage: `url('${imgGroup}')`,
                      maskSize: "100% 100%",
                      WebkitMaskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 50">
                      <path d={inesploratoPaths.p38db8200} fill="white" />
                      <path d={inesploratoPaths.p1b124d00} fill="white" />
                      <path d={inesploratoPaths.p2c6a1270} fill="white" />
                      <path d={inesploratoPaths.p2d6aa100} fill="white" />
                      <path d={inesploratoPaths.p8d0d480} fill="white" />
                      <path d={inesploratoPaths.p28234b80} fill="white" />
                      <path d={inesploratoPaths.p1b9fec00} fill="white" />
                      <path d={inesploratoPaths.pa08e480} fill="white" />
                      <path d={inesploratoPaths.pf220e00} fill="white" />
                      <path d={inesploratoPaths.p3756c580} fill="white" />
                      <path d={inesploratoPaths.pccf5c00} fill="white" />
                      <path d={inesploratoPaths.p8a31700} fill="white" />
                      <path d={inesploratoPaths.p13dea180} fill="white" />
                      <path d={inesploratoPaths.p1613f780} fill="white" />
                      <path d={inesploratoPaths.p37f51a00} fill="white" />
                      <path d={inesploratoPaths.p325ebe00} fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['Outfit',sans-serif] font-normal text-[#ded8d4] text-[14px] md:text-[16px] leading-[1.45]">
                  A Inesplorato é uma consultoria de conhecimento estratégico aplicado que extrai inteligência de dados, direciona negócios e capacita pessoas através da curadoria de conhecimento, método exclusivo criado em 2010.
                </p>
              </div>

              {/* Visite nosso site */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#d0e0e3] text-[14px] tracking-[1px] uppercase leading-[1.15]">
                  Visite nosso site
                </p>
                <div className="flex gap-[8px] items-center flex-wrap">
                  <a
                    className="font-['Outfit',sans-serif] font-normal text-[#ffcd00] text-[14px] leading-[1.45] underline decoration-solid transition-colors duration-300 hover:text-[#ffe04d]"
                    href="http://inesplorato.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    inesplorato.com.br
                  </a>
                  <svg className="shrink-0 size-[4px]" fill="none" viewBox="0 0 4 4">
                    <circle cx="2" cy="2" fill="#69625D" r="2" />
                  </svg>
                  <a
                    className="font-['Outfit',sans-serif] font-normal text-[#ffcd00] text-[14px] leading-[1.45] underline decoration-solid transition-colors duration-300 hover:text-[#ffe04d]"
                    href="mailto:contato@inesplorato.com.br"
                  >
                    contato@inesplorato.com.br
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#36322f] w-full border-t border-[#69625d]">
        <div className="flex items-center justify-between px-[24px] md:px-[48px] lg:px-[125px] py-[24px] md:py-[32px]">
          <p className="font-['Outfit',sans-serif] font-normal text-[#ded8d4] text-[12px] md:text-[14px] leading-[1.45]">
            Todos os direitos reservados.
          </p>
          <a href="https://sintropika.com/" target="_blank" rel="noopener noreferrer" className="h-[10px] w-[78px] shrink-0 transition-opacity duration-300 hover:opacity-70">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 77.974 10.0004"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p300cca80}
                fill="#A9A4A0"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}