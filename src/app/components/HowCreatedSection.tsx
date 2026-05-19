import { useState, useRef, useEffect } from "react";
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

function StepCard({
  number,
  title,
  description,
  defaultFlipped = false,
}: {
  number: string;
  title: string;
  description: string;
  defaultFlipped?: boolean;
}) {
  const [open, setOpen] = useState(defaultFlipped);

  return (
    <div
      className="h-full cursor-pointer transition-transform duration-300 hover:-translate-y-[10px] group/card"
      onClick={() => setOpen(!open)}
    >
      <div
        className="h-full w-full"
        style={{ perspective: "800px" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-600"
          style={{
            transformStyle: "preserve-3d",
            transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 bg-[#d0e0e3] group-hover/card:bg-[#daeaed] transition-colors duration-500"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex flex-col items-center justify-between h-full pb-[16px] md:pb-[24px] pt-[4px] px-[16px] md:px-[24px]">
              <p className="font-['Outfit',sans-serif] font-normal text-[#a0b6ba] text-right w-full leading-[1.15] text-[80px] md:text-[136px]">
                {number}
              </p>
              <p className="font-['Barlow_Condensed',sans-serif] font-extrabold text-[#36322f] text-[20px] md:text-[32px] uppercase leading-none w-full whitespace-pre-wrap">
                {title}
              </p>
            </div>
            {/* Icon badge front */}
            <div className="absolute left-0 top-0 bg-[#ffcd00] size-[60px] md:size-[80px] overflow-hidden transition-colors duration-300 hover:bg-[#ffe04d]">
              <div className="absolute left-[12px] md:left-[16px] top-[12px] md:top-[16px] size-[36px] md:size-[48px]">
                <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                  <path
                    d="M24 10V38M10 24H38"
                    stroke="#BC7700"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 bg-[#f3feff]"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="flex flex-col items-center justify-between h-full pb-[16px] md:pb-[24px] pt-[4px] px-[16px] md:px-[24px]">
              <p className="font-['Outfit',sans-serif] font-normal text-[#a0b6ba] text-right w-full leading-[1.15] text-[48px] md:text-[64px]">
                {number}
              </p>
              <p className="font-['Outfit',sans-serif] font-normal text-[#4b4642] text-[13px] md:text-[16px] leading-[1.45] w-full whitespace-pre-wrap">
                {description}
              </p>
            </div>
            {/* Icon badge back */}
            <div className="absolute left-0 top-0 bg-[#ffcd00] size-[60px] md:size-[80px] overflow-hidden transition-colors duration-300 hover:bg-[#ffe04d]">
              <div className="absolute left-[12px] md:left-[16px] top-[12px] md:top-[16px] size-[36px] md:size-[48px]">
                <svg className="block size-full" fill="none" viewBox="0 0 48 48">
                  <path
                    d="M36 12L12 36M12 12L36 36"
                    stroke="#BC7700"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Concepção do desafio",
    description:
      "Diante da rápida adoção da IA nas empresas brasileiras, a Inesplorato propôs um processo de reflexão coletiva sobre como usar essa tecnologia a favor das pessoas, dos negócios e da sociedade.",
  },
  {
    number: "02",
    title: "Seleção de parceiros",
    description:
      "A Inesplorato convidou lideranças inovadoras de empresas com olhares complementares sobre o mundo corporativo e um compromisso compartilhado com a responsabilidade social, combinando sinergia operacional e diversidade de pensamento.",
  },
  {
    number: "03",
    title: "Diagnóstico",
    description:
      "Observando o momento das empresas brasileiras frente à transformação digital e à IA, a Inesplorato formulou as perguntas que direcionaram o estudo.",
  },
  {
    number: "04",
    title: "Pesquisa",
    description:
      "Por meio do método de Curadoria de Conhecimento, os curadores da Inesplorato mapearam, em múltiplas fontes, aprendizados e discussões sobre os impactos da IA no trabalho corporativo.",
  },
  {
    number: "05",
    title: "Elaboração coletiva",
    description:
      "A partir de encontros coletivos do time completo do projeto, os resultados da pesquisa foram debatidos e convertidos em soluções que estruturam este material.",
  },
  {
    number: "06",
    title: "Produção narrativa",
    description:
      "Os curadores da Inesplorato traduziram o resultado coletivo em uma narrativa clara, inspiradora e acessível. O material passou por uma revisão abrangente, com colaboração de convidadas que somaram suas expertises à análise.",
  },
];

export function HowCreatedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH + rect.height), 0),
        1
      );
      const gp = 100 - progress * 100;
      el.style.background = `linear-gradient(170deg, #36322f 0%, #2a2724 ${50 + gp * 0.3}%, #36322f 100%)`;
      if (vignetteRef.current) {
        vignetteRef.current.style.background = `radial-gradient(ellipse at ${30 + gp * 0.4}% ${gp}%, rgba(208,224,227,0.04) 0%, transparent 70%)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-[24px] md:px-[48px] lg:px-[125px] py-[80px] md:py-[120px] lg:py-[160px] relative overflow-hidden"
    >
      {/* Subtle vignette overlay */}
      <div
        ref={vignetteRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[80px] lg:gap-0 items-start lg:items-end mb-[32px] md:mb-[120px] lg:justify-between">
          <RevealOnScroll direction="left" duration={900} distance={60}>
            <p className="font-['Barlow_Condensed',sans-serif] font-extrabold text-[#d0e0e3] text-[36px] md:text-[48px] lg:text-[64px] uppercase leading-none lg:max-w-[451px]">
              COMO ESTE MATERIAL FOI CRIADO
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="right" duration={900} delay={200} distance={40} className="w-full lg:w-[451px] shrink-0">
            <div className="flex flex-col gap-[24px] md:gap-[32px]">
              <div className="bg-[#d0e0e3] h-[8px] w-full" />
              <p className="font-['Outfit',sans-serif] font-normal text-[#ded8d4] text-[14px] md:text-[18px] leading-[1.45]">
                <span>{`Ferramentas de Inteligência Artificial Generativa foram utilizadas neste projeto como apoio técnico em etapas específicas de `}</span>
                <span className="font-bold text-[#d0e0e3]">pesquisa</span>
                <span>{`, `}</span>
                <span className="font-bold text-[#d0e0e3]">produção</span>
                <span>{` e `}</span>
                <span className="font-bold text-[#d0e0e3]">revisão de conteúdo</span>
                <span>{`. As ferramentas não tiveram autonomia decisória. A autoria final é de responsabilidade exclusiva dos profissionais envolvidos no projeto.`}</span>
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Steps grid */}
        <div className="flex flex-col gap-[16px] md:gap-[24px] mb-[48px] md:mb-[80px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] md:gap-[15px]">
            {steps.slice(0, 3).map((step, i) => (
              <RevealOnScroll key={step.number} direction="up" delay={i * 150} duration={700} distance={40}>
                <div className="h-[220px] sm:h-[250px] md:h-[301px]">
                  <StepCard {...step} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] md:gap-[15px]">
            {steps.slice(3, 6).map((step, i) => (
              <RevealOnScroll key={step.number} direction="up" delay={i * 150} duration={700} distance={40}>
                <div className="h-[220px] sm:h-[250px] md:h-[301px]">
                  <StepCard {...step} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <RevealOnScroll direction="up" duration={700}>
          <DownloadButton />
        </RevealOnScroll>
      </div>
    </div>
  );
}