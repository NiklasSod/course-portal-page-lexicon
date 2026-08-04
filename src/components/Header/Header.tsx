function Header() {

  return (
    <header className="py-6 px-12 bg-white flex justify-between items-center">
      <span className="text-neutral-900 font-bold text-2xl">Kursportalen</span>
      <nav className="flex gap-8">
        <a href="/" className="text-neutral-600 no-underline">Startsida</a>
        <a href="/" className="text-neutral-600 no-underline">Kurser</a>
        <a href="/" className="text-neutral-600 no-underline">Kontakt</a>
      </nav>
    </header>
  )
}

export default Header