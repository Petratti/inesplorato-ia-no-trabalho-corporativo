import mediaFastCompany from "@/assets/media-fast-company.png";
import mediaVeja from "@/assets/media-veja.png";
import { RevealOnScroll } from "./RevealOnScroll";

type MediaArticleProps = {
  logoSrc: string;
  title: string;
  description: string;
  url: string;
};

function MediaArticle({ logoSrc, title, description, url }: MediaArticleProps) {
  return (
    <div className="w-full px-[24px] md:px-[48px] lg:px-[125px]">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[24px] px-[24px] py-[24px] md:py-[32px] w-full transition-shadow duration-300 hover:shadow-lg group"
      >
        {/* Logo — à esquerda até 768px; centralizado no bloco a partir de 769px */}
        <div className="flex h-[60px] min-[769px]:h-[76px] w-full min-[769px]:w-[236px] shrink-0 items-center justify-start min-[769px]:justify-center">
          <img
            alt=""
            className="h-[36px] min-[769px]:h-[48px] w-auto max-w-[180px] min-[769px]:max-w-[236px] object-contain"
            src={logoSrc}
          />
        </div>

        {/* Divider line - hidden on mobile */}
        <div className="hidden md:flex items-center shrink-0">
          <div className="h-[76px] w-px bg-[#d0e0e3]" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-[8px] md:gap-[16px] flex-1 min-w-0">
          <p className="font-['Barlow_Condensed',sans-serif] font-medium text-[#36322f] text-[20px] md:text-[28px] lg:text-[32px] uppercase leading-[1.15]">
            {title}
          </p>
          <p className="font-['Outfit',sans-serif] font-normal text-[#4b4642] text-[14px] md:text-[14px] leading-[1.45]">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 w-full md:w-auto mt-[8px] md:mt-0">
          <div className="bg-[#ffcd00] flex items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[24px] transition-colors group-hover:bg-[#ffe04d]">
            <p className="font-['Outfit',sans-serif] font-semibold text-[#36322f] text-[14px] md:text-[16px] tracking-[0.5px] leading-none whitespace-nowrap">
              Ler artigo
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

const mediaArticles = [
  {
    logoSrc: mediaFastCompany,
    title: "A IA não vai potencializar empresas sozinha",
    description:
      "Sem mudança cultural, o potencial da inteligência artificial continuará limitado",
    url: "https://fastcompanybrasil.com/tech/a-ia-nao-vai-potencializar-empresas-sozinha/?utm_source=linkedin&utm_medium=post",
  },
  {
    logoSrc: mediaVeja,
    title: "Executivos não se reconhecem como parte da classe trabalhadora",
    description:
      "A conclusão é de Debora Emm, CEO da Inesplorato, consultoria que acaba de lançar um interessante estudo sobre adoção de IA no mundo corporativo",
    url: "https://veja.abril.com.br/coluna/planeta-ia/executivos-nao-se-reconhecem-como-parte-da-classe-trabalhadora/",
  },
];

export function MediaSection() {
  return (
    <div className="bg-[#e1edef] relative w-full py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="flex flex-col gap-[32px] md:gap-[44px] w-full">
        {/* Section Title */}
        <RevealOnScroll direction="up" duration={900} distance={50}>
          <div className="px-[24px] md:px-[48px] lg:px-[125px]">
            <h2 className="font-['Barlow_Condensed',sans-serif] font-extrabold text-[#36322f] text-[40px] md:text-[52px] lg:text-[64px] uppercase leading-none">
              Saiu na mídia
            </h2>
          </div>
        </RevealOnScroll>

        {/* Articles List */}
        <div className="flex flex-col gap-[24px] w-full">
          {mediaArticles.map((article, index) => (
            <RevealOnScroll
              key={index}
              direction="up"
              delay={100 + index * 100}
              duration={800}
              distance={30}
            >
              <MediaArticle {...article} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}