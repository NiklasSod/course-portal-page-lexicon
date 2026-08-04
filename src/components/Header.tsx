import { useState } from "react";
import { scrollToElement } from '../utils/scroll'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:py-6 md:px-12 bg-white border-b border-border">
      <div className="flex justify-between items-center">
        <span className="font-bold text-2xl">Kursportalen</span>

        {/* Hamburgermeny */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-neutral-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktopmeny */}
        <nav className="hidden md:flex gap-8">
          <a href="/" className="text-menu no-underline hover:text-neutral-900 transition-colors">Startsida</a>
          <a onClick={() => scrollToElement("courses")} className="text-menu no-underline hover:text-neutral-900 transition-colors">Kurser</a>
          <a onClick={() => scrollToElement("contact-form")} className="text-menu no-underline hover:text-neutral-900 transition-colors">Kontakt</a>
        </nav>
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 pt-4 pb-2">
          <a href="/" className="text-menu no-underline hover:text-neutral-900 transition-colors">Startsida</a>
          <a onClick={() => scrollToElement("courses")} className="text-menu no-underline hover:text-neutral-900 transition-colors">Kurser</a>
          <a onClick={() => scrollToElement("contact-form")} className="text-menu no-underline hover:text-neutral-900 transition-colors">Kontakt</a>
        </nav>
      )}
    </header>
  )
}

export default Header