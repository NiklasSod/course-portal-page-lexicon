import { useState } from "react";
import HeaderNav from "./HeaderNav";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:py-6 md:px-12 border-b border-slate-800">
      <div className="flex justify-between items-center">
        <a 
          href="/" 
          aria-label="Startsida" 
          className="font-bold text-2xl no-underline text-inherit cursor-pointer"
        >
          Kursportalen
        </a>

        {/* Hamburgermeny */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-100 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-100 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktopmeny */}
        <HeaderNav navClassName="hidden md:flex" ulClassName="flex gap-8 list-none m-0 p-0" />
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
      <HeaderNav 
        navClassName="md:hidden pt-4 pb-2" 
        ulClassName="flex flex-col gap-4 list-none m-0 p-0" 
        onItemClick={() => setMenuOpen(false)} 
      />
      )}
    </header>
  )
}

export default Header