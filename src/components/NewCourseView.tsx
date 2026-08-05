import PrimaryButton from "./PrimaryButton";
import { getFutureDate } from '../utils/getFutureDate';

function NewCourseView() {
  return (
    <section id="newCourseView" className="w-full bg-white py-4 px-6 md:py-6 md:px-12 flex flex-col items-start">
      <h2 className="text-[28px] font-bold mb-6">Nya kurser</h2>

      <div className="bg-stone-50 rounded-lg border border-stone-300 p-8 max-w-8xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Webbutveckling från grunden - Kommer snart</h2>
        <p className="text-subheading mb-6">En praktisk kurs för nybörjare.</p>

        <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 mb-8 text-sm text-menu">
          <p><span className="font-semibold">Start:</span> {getFutureDate()}</p>
          <p><span className="font-semibold">Längd:</span> 8 veckor</p>
          <p><span className="font-semibold">Nivå:</span> Nybörjare</p>
          <p><span className="font-semibold">Pris:</span> 9 900 kr</p>
        </div>

        <div className="-mx-2">
          <PrimaryButton text="Anmäl dig nu" dark={true} />
        </div>
      </div>
    </section>
  );
}

export default NewCourseView;