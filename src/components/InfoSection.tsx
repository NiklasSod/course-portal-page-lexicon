import PrimaryButton from './PrimaryButton'
import { scrollToElement } from '../utils/scroll'

function InfoSection() {

  return (
    <section id="hero" className="bg-slate-800 py-20 px-12 border-b border-slate-800 flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-4xl text-center">Lär dig bygga moderna webbapplikationer</h1>
      <p className="font-normal text-lg text-center">Praktiska kurser inom webbutveckling, design och moderna verktyg.</p>
      <div className="flex flex-col items-center sm:flex-row gap-3">
        <PrimaryButton onClick={() => scrollToElement("courses")} text="Se kurser" dark={true} />
        <PrimaryButton onClick={() => scrollToElement("contact-form")} text="Kontakta oss" dark={false} />
      </div>
    </section>
  )
}

export default InfoSection