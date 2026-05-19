import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";

/* ── Context ── */
const DownloadModalCtx = createContext<{ open: () => void }>({ open: () => {} });
export const useDownloadModal = () => useContext(DownloadModalCtx);

/* ── RDStation Form Config ── */
const RDSTATION_FORM_ID = "download-estudo-ia-4dda7d8872c3e45daa00";
const RDSTATION_SCRIPT_URL = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";

/* ── Provider + Modal ── */
export function DownloadModalProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const formInitialized = useRef(false);
  const scriptLoaded = useRef(false);

  const open = useCallback(() => setShow(true), []);
  const close = useCallback(() => setShow(false), []);

  /* Lock body scroll — compensate scrollbar width to prevent layout shift */
  useEffect(() => {
    if (show) {
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarW}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [show]);

  /* Close on Escape */
  useEffect(() => {
    if (!show) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [show, close]);

  /* Load RDStation script & initialize form on first open */
  useEffect(() => {
    if (!show) return;
    if (formInitialized.current) return;

    const initForm = () => {
      try {
        const W = window as any;
        if (W.RDStationForms) {
          new W.RDStationForms(RDSTATION_FORM_ID, "null").createForm();
          formInitialized.current = true;
        }
      } catch {
        /* silently ignore if RDStation fails */
      }
    };

    if (scriptLoaded.current) {
      initForm();
      return;
    }

    // Check if script already exists in DOM
    const existing = document.querySelector(`script[src="${RDSTATION_SCRIPT_URL}"]`);
    if (existing) {
      scriptLoaded.current = true;
      initForm();
      return;
    }

    const script = document.createElement("script");
    script.src = RDSTATION_SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
      initForm();
    };
    document.body.appendChild(script);
  }, [show]);

  return (
    <DownloadModalCtx.Provider value={{ open }}>
      {children}

      {/* Overlay + Modal */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#36322f]/60" />

        {/* Modal card */}
        <div
          className={`relative w-[90vw] max-w-[700px] bg-white shadow-2xl transition-all duration-300 ${show ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#d0e0e3] px-[20px] md:px-[32px] py-[16px] md:py-[20px]">
            <p className="font-['Barlow_Condensed',sans-serif] font-extrabold text-[#36322f] text-[18px] md:text-[22px] uppercase tracking-[0.5px] leading-none">
              Baixar Estudo
            </p>
            <button
              onClick={close}
              className="flex items-center justify-center size-[32px] md:size-[36px] text-[#5a7a80] hover:text-[#36322f] transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="md:w-[24px] md:h-[24px]">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body — RDStation form embed */}
          <div className="px-[20px] md:px-[32px] py-[24px] md:py-[32px] max-h-[70vh] overflow-y-auto">
            <div role="main" id={RDSTATION_FORM_ID} />
          </div>
        </div>
      </div>
    </DownloadModalCtx.Provider>
  );
}