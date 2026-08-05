import { scrollToElement } from '../utils/scroll'

function Footer (){

    return(
        <footer className="bg-stone-50 py-6 px-6 md:py-8 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-border">
            <button 
                type="button"
                onClick={() => scrollToElement("top")}
                className="text-sm text-footer-text leading-none bg-transparent border-none cursor-pointer p-0 font-normal"
            >
                Kursportalen &copy; {new Date().getFullYear()}
            </button>
            <nav className="flex">
                <ul className="flex gap-8 list-none m-0 p-0">
                <li>
                    <a href="#" className="text-sm text-footer-text hover:text-stone-500 no-underline transition-colors leading-none">
                    Integritetspolicy
                    </a>
                </li>
                <li>
                    <a href="#" className="text-sm text-footer-text hover:text-stone-500 no-underline transition-colors leading-none">
                    Villkor
                    </a>
                </li>
                <li>
                    <a href="#" className="text-sm text-footer-text hover:text-stone-500 no-underline transition-colors leading-none">
                    Support
                    </a>
                </li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer