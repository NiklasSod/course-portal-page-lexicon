function Footer (){

    return(
        <footer className="bg-stone-50 py-6 px-6 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-stone-300">
            <p className="text-sm text-footer-text">Kursportalen &copy; {new Date().getFullYear()}</p>
            <nav className="flex gap-8">
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors">Integritetspolicy</a>
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors">Villkor</a>
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors">Support</a>
            </nav>
        </footer>
    )
}
export default Footer