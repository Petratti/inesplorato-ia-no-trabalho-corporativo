import aboutBg from "@/assets/about-bg.png";
import aboutLogoInesplorato from "@/assets/about-logo-inesplorato.png";
import { useRef, useEffect } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { useDownloadModal } from "./DownloadModal";

function DownloadButton() {
  const { open } = useDownloadModal();
  return (
    <div className="flex items-center shrink-0 cursor-pointer group" onClick={open}>
      <div className="bg-[#ffcd00] flex items-center justify-center px-[16px] py-[18px] md:px-[32px] md:py-[28px] transition-colors group-hover:bg-[#ffe04d]">
        <p className="font-['Outfit',sans-serif] font-semibold text-[#8e4900] text-[16px] tracking-[0.5px] leading-[14px] whitespace-nowrap">
          Baixar Estudo
        </p>
      </div>
      <div className="flex items-center self-stretch">
        <div className="bg-[#ffcd00] w-[48px] relative border-l border-[#bc7700] self-stretch transition-colors group-hover:bg-[#ffe04d]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[21px]">
            <svg className="block size-full" fill="none" viewBox="0 0 24 21">
              <path d="M12 14L5 1L19 1L12 14Z" fill="#BC7700" />
              <rect fill="#BC7700" height="3" width="22" x="1" y="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const targetAudience = [
  "Membros de conselhos (administração ou consultivos)",
  "CEOs e lideranças executivas",
  "Lideranças de Pessoas e Cultura",
  "Lideranças de Negócio, Estratégia e Inovação",
  "Jurídico, Compliance e Governança",
  "Profissionais responsáveis por IA nas organizações",
  "Profissionais do trabalho corporativo em geral",
];

const whatItIs = [
  "Um instrumento de reflexão e decisão sobre princípios que orientam o uso da IA no trabalho",
  "Um apoio prático para lideranças e organizações",
  "Um primeiro passo em um campo em constante evolução",
];

const whatItIsNot = [
  "Um manual técnico de ferramentas de IA",
  "Uma defesa acrítica da tecnologia",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      const bg = bgRef.current;
      if (!el || !bg) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH;
      const end = -rect.height;
      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );
      const scale = 1 + progress * 0.35;
      bg.style.transform = `scale(${scale})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="bg-white relative w-full py-[60px] md:py-[80px] lg:py-[120px] overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          ref={bgRef}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform origin-bottom-right"
          src={aboutBg}
        />
      </div>

      <div className="relative flex flex-col gap-[48px] md:gap-[80px] lg:gap-[120px] w-full">
        {/* Big question */}
        <RevealOnScroll direction="up" duration={900} distance={50}>
          <div className="px-[24px] md:px-[48px] lg:pl-[125px] lg:pr-[314px]">
            <div className="bg-[#d0e0e3] h-[8px] w-[120px] mb-[32px] md:mb-[48px]" />
            <p className="font-['Outfit',sans-serif] font-normal text-[#36322f] text-[28px] md:text-[36px] lg:text-[48px] leading-[1.2] whitespace-pre-wrap">
              Quais paradigmas precisam ser desconstruídos e quais ações urgentes devem ser adotadas para que ambição e ética caminhem juntas na implementação da IA no trabalho corporativo?
            </p>
          </div>
        </RevealOnScroll>

        {/* Content area */}
        <div className="px-[24px] md:px-[48px] lg:px-[125px] flex flex-col gap-[48px]">
          {/* Two-column row on desktop */}
          <div className="flex flex-col lg:flex-row lg:gap-[48px] xl:gap-[120px] lg:items-start gap-[48px]">
            {/* Left column: Sobre o Projeto header + body text */}
            <div className="lg:w-1/2 min-w-0 min-h-px flex flex-col gap-[24px] md:gap-[32px]">
              <RevealOnScroll direction="up" delay={100} duration={800}>
                <div className="flex flex-col gap-[12px]">
                  {/* Header row: label + POR: logo */}
                  <div className="flex items-center justify-between w-full">
                    <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15]">
                      Sobre o Projeto
                    </p>
                    <a
                      href="https://inesplorato.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center shrink-0 transition-opacity duration-300 hover:opacity-70"
                    >
                      <span className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15]">
                        Por:
                      </span>
                      <div className="h-[44px] md:h-[58px] w-[126px] md:w-[166px] overflow-hidden shrink-0">
                        <img
                          alt="Inesplorato"
                          className="size-full object-cover pointer-events-none"
                          src={aboutLogoInesplorato}
                        />
                      </div>
                    </a>
                  </div>
                  {/* Divider line */}
                  <div className="w-full h-px bg-[#d0e0e3]" />
                </div>
              </RevealOnScroll>
              <RevealOnScroll direction="up" delay={200} duration={800} distance={30}>
                <div className="font-['Outfit',sans-serif] font-normal text-[#69625d] text-[16px] md:text-[18px] leading-[1.45] whitespace-pre-wrap">
                  <p className="mb-0">{`A adoção massiva da inteligência artificial nas empresas está alterando as condições do trabalho corporativo. Mais do que a incorporação de novas ferramentas, esse movimento funciona como um gatilho para transformações culturais amplas, com impactos diretos nas empresas, na vida humana e na sociedade.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">{`Nesse contexto, a Inesplorato lançou uma iniciativa inédita e convidou cinco parceiros de mercado para promover uma reflexão coletiva, mergulhando em pesquisas, debates e aprendizados da ciência e do mercado já consolidados sobre o assunto.`}</p>
                  <p className="mb-0">&nbsp;</p>
                  <p>{`O resultado deste trabalho foi o desenvolvimento de diretrizes práticas para ajudar empresas a entenderem, se aprofundarem e discutirem como a IA pode se encaixar no dia a dia corporativo.`}</p>
                </div>
              </RevealOnScroll>
              {/* Desktop: Baixar Estudo below Sobre o Projeto text */}
              <RevealOnScroll direction="up" delay={300} duration={800} className="hidden lg:block">
                <DownloadButton />
              </RevealOnScroll>
            </div>

            {/* Right column: Para quem é + O que é + O que não é */}
            <div className="lg:w-1/2 min-w-0 flex flex-col gap-[32px]">
              {/* Para quem é */}
              <div className="flex flex-col gap-[24px]">
                <RevealOnScroll direction="up" delay={100} duration={800}>
                  <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15]">
                    Para quem é
                  </p>
                </RevealOnScroll>
                <RevealOnScroll direction="up" delay={200} duration={800} distance={20}>
                  <div className="flex flex-col gap-[4px]">
                    {targetAudience.map((item) => (
                      <div key={item} className="border-l-2 border-[#ffcd00] px-[16px] py-[2px]">
                        <p className="font-['Outfit',sans-serif] font-normal text-[#69625d] text-[16px] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </div>

              {/* O que é */}
              <div className="flex flex-col gap-[16px]">
                <RevealOnScroll direction="up" delay={300} duration={800}>
                  <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15]">
                    O que é
                  </p>
                </RevealOnScroll>
                <RevealOnScroll direction="up" delay={400} duration={800} distance={20}>
                  <div className="flex flex-col gap-[4px]">
                    {whatItIs.map((item) => (
                      <div key={item} className="border-l-2 border-[#ffcd00] px-[16px] py-[2px]">
                        <p className="font-['Outfit',sans-serif] font-normal text-[#69625d] text-[16px] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </div>

              {/* O que não é */}
              <div className="flex flex-col gap-[16px]">
                <RevealOnScroll direction="up" delay={500} duration={800}>
                  <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15]">
                    O que não é
                  </p>
                </RevealOnScroll>
                <RevealOnScroll direction="up" delay={600} duration={800} distance={20}>
                  <div className="flex flex-col gap-[4px]">
                    {whatItIsNot.map((item) => (
                      <div key={item} className="border-l-2 border-[#ffcd00] px-[16px] py-[2px]">
                        <p className="font-['Outfit',sans-serif] font-normal text-[#69625d] text-[16px] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>

          {/* Mobile: Baixar Estudo after O que não é */}
          <RevealOnScroll direction="up" delay={700} duration={800} className="lg:hidden">
            <DownloadButton />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}