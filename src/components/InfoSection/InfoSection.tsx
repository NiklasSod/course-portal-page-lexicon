import PrimaryButton from '../Buttons/PrimaryButton'
import { scrollToElement } from '../../utils/scroll'

function InfoSection() {

  return (
    <div className="py-20 px-12 bg-stone-50 border border-neutral-200 flex flex-col justify-center items-center gap-4">
      <h1 className="text-neutral-900 font-bold text-4xl text-center">Lär dig bygga moderna webbapplikationer</h1>
      <p className="text-neutral-600 font-normal text-lg text-center">Praktiska kurser inom webbutveckling, design och moderna verktyg.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <PrimaryButton onClick={() => scrollToElement("courses")} text="Se Kurser" dark={true} />
        <PrimaryButton onClick={() => scrollToElement("contact-form")} text="Kontakta oss" dark={false} />
      </div>
    </div>
  )
}

export default InfoSection