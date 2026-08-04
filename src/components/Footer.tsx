function Footer (){

    return(
        <footer className="bg-stone-50 py-6 px-6 md:py-8 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-border">
            <p className="text-sm text-footer-text leading-none">Kursportalen &copy; {new Date().getFullYear()}</p>
            <nav className="flex gap-8">
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors leading-none">Integritetspolicy</a>
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors leading-none">Villkor</a>
                <a href="/" className="text-sm text-stone-500 hover:text-footer-text no-underline transition-colors leading-none">Support</a>
            </nav>
        </footer>
    )
}
export default Footer