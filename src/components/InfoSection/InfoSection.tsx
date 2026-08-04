import PrimaryButton from '../Buttons/PrimaryButton'

function InfoSection() {

  return (
    <div className="py-20 px-12 bg-stone-50 border border-neutral-200 flex flex-col justify-center items-center gap-4">
      <h1 className="text-neutral-900 font-bold text-4xl">Lär dig bygga moderna webbapplikationer</h1>
      <p className="text-neutral-600 font-normal text-lg">Praktiska kurser inom webbutveckling, design och moderna verktyg.</p>
      <div>
        <PrimaryButton text="Se Kurser" dark={true} />
        <PrimaryButton text="Kontakta oss" dark={false} />
      </div>
    </div>
  )
}

export default InfoSection