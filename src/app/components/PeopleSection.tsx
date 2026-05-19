import { useRef, useEffect } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { useDownloadModal } from "./DownloadModal";
import peopleSectionBg from "@/assets/people-section-bg.png";
import peopleLogoInesplorato from "@/assets/people-logo-inesplorato.png";
import photoDeboraEmm from "@/assets/people-debora-emm.png";
import photoTulioCustodio from "@/assets/people-tulio-custodio.png";
import photoCiroJarjura from "@/assets/people-ciro-jarjura.png";
import photoIgorViana from "@/assets/people-igor-viana.png";
import photoDanieleMattos from "@/assets/people-daniele-mattos.png";
import photoVeronicaDudiman from "@/assets/people-veronica-dudiman.png";
import photoAmandaAbreu from "@/assets/people-amanda-abreu.png";
import photoVictorCremasco from "@/assets/people-victor-cremasco.png";
import photoLourencoBustani from "@/assets/people-lourenco-bustani.png";
import photoMarianaAchutti from "@/assets/people-mariana-achutti.png";
import photoCristinaBrand from "@/assets/people-cristina-brand.png";
import photoCarlaMayumi from "@/assets/people-carla-mayumi.png";
import photoMairaLiguori from "@/assets/people-maira-liguori.png";
import photoNanaLima from "@/assets/people-nana-lima.png";
import photoVanessaMathias from "@/assets/people-vanessa-mathias.png";
import photoCamilaAchutti from "@/assets/people-camila-achutti.png";

/* ── Shared sub-components ────────────────────────────────── */

const cardClasses = {
  wrapper: "flex flex-col items-end flex-1 min-w-0",
  imgBox: "h-[160px] md:h-[212px] overflow-hidden relative w-full group",
  img: "absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110",
  badge: "absolute bottom-0 left-0 bg-[#ffcd00] px-[8px] md:px-[12px] py-[6px] md:py-[8px]",
  badgeText: "font-['Barlow_Condensed',sans-serif] font-semibold text-[#36322f] text-[11px] md:text-[14px] tracking-[1px] uppercase leading-[1.15] whitespace-nowrap",
  nameBox: "bg-[#36322f] px-[8px] md:px-[12px] py-[6px] md:py-[8px]",
  nameText: "font-['Outfit',sans-serif] font-medium text-white text-[13px] md:text-[16px] leading-[1.2] whitespace-nowrap",
} as const;

const groupCls = "flex flex-col gap-[16px] md:gap-[24px] w-full items-center";
const labelCls = "font-['Barlow_Condensed',sans-serif] font-semibold text-[#36322f] text-[16px] md:text-[18px] tracking-[1px] uppercase leading-[1.15] text-center w-full";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <RevealOnScroll direction="up" duration={700} distance={20}>
      <p className={labelCls}>{children}</p>
    </RevealOnScroll>
  );
}

function PersonCard({ image, name, company, objectPosition, linkedin }: { image: string; name: string; company: string; objectPosition?: string; linkedin?: string }) {
  const Wrapper = linkedin ? "a" : "div";
  const wrapperProps = linkedin ? { href: linkedin, target: "_blank" as const, rel: "noopener noreferrer" } : {};
  return (
    <Wrapper {...wrapperProps} className={`${cardClasses.wrapper}${linkedin ? " cursor-pointer" : ""}`}>
      <div className={cardClasses.imgBox}>
        <img
          alt={name}
          className={cardClasses.img}
          style={{ objectPosition: objectPosition || "center top" }}
          src={image}
        />
        <div className={cardClasses.badge}>
          <p className={cardClasses.badgeText}>
            {company}
          </p>
        </div>
      </div>
      <div className={cardClasses.nameBox}>
        <p className={cardClasses.nameText}>{name}</p>
      </div>
    </Wrapper>
  );
}

function PersonGrid({ people, cols }: { people: typeof row1; cols: string }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${cols} gap-[12px] md:gap-[24px] w-full`}>
      {people.map((person, i) => (
        <RevealOnScroll key={person.name} direction="up" delay={i * 100} duration={700} distance={30}>
          <PersonCard {...person} />
        </RevealOnScroll>
      ))}
    </div>
  );
}

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

const row1 = [
  { image: photoDeboraEmm, name: "Débora Emm", company: "Inesplorato", objectPosition: "center 20%", linkedin: "https://www.linkedin.com/in/d%C3%A9bora-emm-a911857b/" },
  { image: photoTulioCustodio, name: "Tulio Custódio", company: "Inesplorato", linkedin: "https://www.linkedin.com/in/tulio-custodio-1108b021/" },
  { image: photoCiroJarjura, name: "Ciro Jarjura", company: "Inesplorato", objectPosition: "center 25%" },
  { image: photoIgorViana, name: "Igor Viana", company: "Inesplorato", objectPosition: "center 33%", linkedin: "https://www.linkedin.com/in/igor-viana-rocha/" },
];

const row2 = [
  { image: photoDanieleMattos, name: "Daniele Mattos", company: "Indique", linkedin: "https://www.linkedin.com/in/mattosdaniele/" },
  { image: photoVeronicaDudiman, name: "Verônica Dudiman", company: "Indique", linkedin: "https://www.linkedin.com/in/veronicadudiman/" },
  { image: photoAmandaAbreu, name: "Amanda Abreu", company: "Indique", linkedin: "https://www.linkedin.com/in/aaabreuamanda/" },
  { image: photoVictorCremasco, name: "Victor Cremasco", company: "Mandalah", linkedin: "https://www.linkedin.com/in/vcremasco/" },
  { image: photoLourencoBustani, name: "Lourenço Bustani", company: "Mandalah", linkedin: "https://www.linkedin.com/in/louren%C3%A7o-bustani-6b50151/" },
];

const row3 = [
  { image: photoMarianaAchutti, name: "Mariana Achutti", company: "NewNew", linkedin: "https://www.linkedin.com/in/mariachutti/" },
  { image: photoCristinaBrand, name: "Cristina Brand", company: "Talk Inc", linkedin: "https://www.linkedin.com/in/cristina-brand-4320283/" },
  { image: photoCarlaMayumi, name: "Carla Mayumi", company: "Talk Inc", linkedin: "https://www.linkedin.com/in/cmayumi/" },
  { image: photoMairaLiguori, name: "Maíra Liguori", company: "Think Eva", linkedin: "https://www.linkedin.com/in/mairaliguori/" },
  { image: photoNanaLima, name: "Nana Lima", company: "Think Eva", linkedin: "https://www.linkedin.com/in/nana-lima/" },
];

const row4 = [
  { image: photoVanessaMathias, name: "Vanessa Mathias", company: "White Rabbit", linkedin: "https://www.linkedin.com/in/vamathias/" },
  { image: photoCamilaAchutti, name: "Camila Achutti", company: "Mastertech", linkedin: "https://www.linkedin.com/in/camilaachutti/" },
];

export function PeopleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const grad1Ref = useRef<HTMLDivElement>(null);
  const grad2Ref = useRef<HTMLDivElement>(null);

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
      // Background parallax
      const bgY = (progress - 0.5) * -120;
      const bgScale = 1.6 - progress * 0.5;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${bgY}px) scale(${bgScale})`;
      }
      // Dynamic gradients
      const gp = (1 - progress) * 100;
      if (grad1Ref.current) {
        grad1Ref.current.style.background = `radial-gradient(ellipse 80% 60% at ${35 + gp * 0.3}% ${20 + gp * 0.6}%, rgba(255,205,0,0.07) 0%, transparent 70%)`;
      }
      if (grad2Ref.current) {
        grad2Ref.current.style.background = `radial-gradient(ellipse 70% 50% at ${65 - gp * 0.3}% ${70 - gp * 0.4}%, rgba(208,224,227,0.10) 0%, transparent 65%)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={peopleSectionBg}
        />
      </div>

      <div className="relative flex flex-col gap-[48px] md:gap-[80px] items-center px-[24px] md:px-[48px] lg:px-[125px] pt-[80px] md:pt-[120px] lg:pt-[160px] pb-[60px] md:pb-[80px] lg:pb-[120px]">
        {/* Dynamic gradient overlays */}
        <div ref={grad1Ref} className="absolute inset-0 pointer-events-none" />
        <div ref={grad2Ref} className="absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(208,224,227,0.15) 0%, transparent 18%, transparent 82%, rgba(208,224,227,0.12) 100%)",
          }}
        />

        {/* Title */}
        <RevealOnScroll direction="up" duration={900} distance={50}>
          <div className="flex flex-col gap-[16px] md:gap-[24px] items-center text-center w-full">
            <p className="font-['Barlow_Condensed',sans-serif] font-extrabold text-[#36322f] text-[32px] md:text-[48px] lg:text-[64px] uppercase leading-none">
              Humanos que participaram do projeto
            </p>
            <p className="font-['Outfit',sans-serif] font-normal text-[#36322f] text-[18px] md:text-[16px] lg:text-[18px] leading-[1.45] max-w-[926px]">
              Este trabalho foi conduzido pela Inesplorato em colaboração com representantes de cinco empresas parceiras — Indique, Mandalah, NewNew, Talk Inc e Think Eva — e revisoras especialistas.
            </p>
          </div>
        </RevealOnScroll>

        {/* People grid */}
        <div className="flex flex-col gap-[32px] md:gap-[48px] w-full items-center">
          {/* Inesplorato group */}
          <div className={groupCls}>
            {/* Inesplorato logo */}
            <RevealOnScroll direction="up" duration={700} distance={30}>
              <div className="flex items-center justify-center px-[24px] py-[8px]">
                <img
                  alt="Inesplorato"
                  src={peopleLogoInesplorato}
                  className="w-[261px] h-[66px] object-contain"
                />
              </div>
            </RevealOnScroll>

            {/* Row 1: Inesplorato (4 people) */}
            <PersonGrid people={row1} cols="lg:grid-cols-4" />
          </div>

          {/* Partners group */}
          <div className={groupCls}>
            {/* Section label */}
            <SectionLabel>Representantes das empresas parceiras</SectionLabel>

            {/* All partner representatives in a single grid */}
            <PersonGrid people={[...row2, ...row3]} cols="lg:grid-cols-5" />
          </div>

          {/* Revisoras Especialistas group */}
          <div className={groupCls}>
            {/* Section label */}
            <SectionLabel>Revisoras Especialistas</SectionLabel>

            {/* Row 4: White Rabbit + Mastertech (2 people, centered) */}
            <div className="flex gap-[12px] md:gap-[24px] justify-center w-full">
              {row4.map((person, i) => (
                <div key={person.name} className="shrink-0 w-[calc(50%_-_6px)] sm:w-[calc(33.33%_-_8px)] lg:w-[calc(20%_-_19.2px)]">
                  <RevealOnScroll direction="up" delay={i * 100} duration={700} distance={30}>
                    <PersonCard {...person} />
                  </RevealOnScroll>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <RevealOnScroll direction="up" duration={700} delay={200}>
          <DownloadButton />
        </RevealOnScroll>
      </div>
    </div>
  );
}