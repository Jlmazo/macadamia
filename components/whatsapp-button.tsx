import { contactInfo } from "@/lib/contact-info";

export function WhatsAppButton() {
  const whatsappUrl = contactInfo.whatsappUrl(
    "Hola! Quisiera mas informacion sobre sus productos."
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#22c766] text-white shadow-[0_10px_24px_rgba(0,0,0,0.18),0_0_22px_rgba(34,199,102,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fbd60] hover:shadow-[0_14px_28px_rgba(0,0,0,0.2),0_0_26px_rgba(34,199,102,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#22c766]/25 md:bottom-7 md:right-7"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/16 to-transparent" />
      <svg
        className="relative size-7 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.04 2C6.57 2 2.12 6.43 2.12 11.88c0 1.74.46 3.44 1.33 4.94L2 22l5.31-1.39a9.96 9.96 0 0 0 4.73 1.2h.01c5.47 0 9.92-4.43 9.92-9.88A9.86 9.86 0 0 0 12.04 2Zm0 18.13h-.01a8.27 8.27 0 0 1-4.22-1.15l-.3-.18-3.15.82.84-3.06-.2-.31a8.16 8.16 0 0 1-1.25-4.37 8.28 8.28 0 0 1 8.29-8.25 8.26 8.26 0 0 1 8.3 8.3 8.28 8.28 0 0 1-8.3 8.2Zm4.54-6.17c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.12-.17.25-.64.8-.78.96-.15.17-.3.19-.55.06-.25-.12-1.05-.38-2-1.22a7.5 7.5 0 0 1-1.38-1.71c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.69 4.29 3.77.6.26 1.07.41 1.43.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z"
        />
      </svg>
    </a>
  );
}
