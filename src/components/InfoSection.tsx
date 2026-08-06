import { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { scrollToElement } from '../utils/scroll'

function InfoSection() {
  const [hasLightClass, setHasLightClass] = useState(false)

  useEffect(() => {
    const updateThemeState = () => {
      const rootHasLightClass = document.documentElement.classList.contains('light')
      const bodyHasLightClass = document.body?.classList.contains('light') ?? false

      setHasLightClass(rootHasLightClass || bodyHasLightClass)
    }

    updateThemeState()

    const observer = new MutationObserver(updateThemeState)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="relative py-20 px-12 border-b border-slate-800 bg-cover bg-top"
      style={hasLightClass ? undefined : { backgroundImage: "url('/img/aurora.png')" }}
    >
      <div className="absolute inset-0 bg-slate-950/50 z-0" />
      <div className="container relative z-10 mx-auto px-4 text-center flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-4xl text-center">Lär dig bygga moderna webbapplikationer</h1>
        <p className="font-normal text-lg text-center">Praktiska kurser inom webbutveckling, design och moderna verktyg.</p>
        <div className="flex flex-col items-center sm:flex-row gap-3">
          <PrimaryButton onClick={() => scrollToElement("courses")} text="Se kurser" />
          <PrimaryButton onClick={() => scrollToElement("contact-form")} text="Kontakta oss" />
        </div>
      </div>
    </section>
  )
}

export default InfoSection