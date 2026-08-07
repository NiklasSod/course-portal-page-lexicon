import { scrollToElement } from '../utils/scroll'
import FooterNav from './FooterNav';

function Footer (){

    return(
        <footer className="py-6 px-6 md:py-8 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0 border-t border-slate-800">
            <button 
                type="button"
                onClick={() => scrollToElement("top")}
                className="text-slate-400 hover:text-slate-200 text-sm leading-none bg-transparent border-none cursor-pointer p-0 font-normal"
            >
                Kursportalen &copy; {new Date().getFullYear()}
            </button>
            <FooterNav />
        </footer>
    )
}
export default Footer