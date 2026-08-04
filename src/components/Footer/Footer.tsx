function Footer (){

    return(
        <footer className="bg-stone-50 text-stone-800 py-6 px-12 flex justify-between items-center border-t border-stone-300">
            <p className="text-sm text-stone-500">Kursportalen © 2026</p>
            <nav className="flex gap-8">
                <a href="/" className="text-sm text-stone-500 hover:text-stone-800 no-underline transition-colors">Integritetspolicy</a>
                <a href="/" className="text-sm text-stone-500 hover:text-stone-800 no-underline transition-colors">Villkor</a>
                <a href="/" className="text-sm text-stone-500 hover:text-stone-800 no-underline transition-colors">Support</a>
            </nav>
        </footer>
    )
}
export default Footer