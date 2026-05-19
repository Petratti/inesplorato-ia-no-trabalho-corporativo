import partnerLogoInesplorato from "@/assets/partner-logo-inesplorato.png";
import partnerLogoIndique from "@/assets/partner-logo-indique.png";
import partnerLogoMandalah from "@/assets/partner-logo-mandalah.png";
import partnerLogoNewnew from "@/assets/partner-logo-newnew.png";
import partnerLogoTalk from "@/assets/partner-logo-talk.png";
import partnerLogoThinkeva from "@/assets/partner-logo-thinkeva.png";
import { RevealOnScroll } from "./RevealOnScroll";

const partners = [
  { logo: partnerLogoInesplorato, url: "https://inesplorato.com.br/" },
  { logo: partnerLogoIndique, url: "https://indq.co/" },
  { logo: partnerLogoMandalah, url: "https://www.mandalah.com/br/inicio" },
  { logo: partnerLogoNewnew, url: "https://www.newnew.group/" },
  { logo: partnerLogoTalk, url: "https://talkdigital.co/" },
  { logo: partnerLogoThinkeva, url: "https://thinkeva.com.br/" },
];

export function PartnersBar() {
  return (
    <RevealOnScroll direction="up" distance={20} duration={600} threshold={0.1}>
      <div className="bg-[#d0e0e3] w-full">
        <div className="flex flex-wrap items-center justify-center px-[24px] md:px-[48px] py-[16px] md:py-[24px] gap-[8px] md:gap-[12px]">
          <p className="font-['Barlow_Condensed',sans-serif] font-semibold text-[#6b868b] text-[12px] md:text-[14px] tracking-[1px] uppercase leading-[1.15] whitespace-nowrap shrink-0 w-full text-center sm:w-auto sm:text-left sm:mr-[40px] md:mr-[36px]">
            Uma produção coletiva entre
          </p>
          {partners.map((partner, i) => (
            <a key={i} href={partner.url} target="_blank" rel="noopener noreferrer" className="h-[50px] md:h-[58px] w-[calc(50%-4px)] sm:w-auto sm:flex-[0_0_166px] overflow-hidden relative transition-opacity duration-300 hover:opacity-70">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                src={partner.logo}
              />
            </a>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}