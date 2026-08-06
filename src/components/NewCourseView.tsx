import PrimaryButton from "./PrimaryButton";
import { getFutureDate } from '../utils/getFutureDate';

function NewCourseView() {
  return (
    <section 
      id="newCourseView" 
      className="w-full py-4 px-6 md:py-6 md:px-12 flex flex-col items-start" 
      aria-label="Nya kurser"
    >
      <h2 className="text-[28px] font-bold mb-6 text-[var(--color-body)]">Nya kurser</h2>

      <div className="bg-[var(--color-root-bg)] border border-[var(--color-border)] rounded-lg p-8 w-full">
        <h3 className="text-2xl font-semibold mb-2 text-[var(--color-body)]">Webbutveckling från grunden - Kommer snart</h3>
        <p className="mb-6 text-[var(--color-subheading)]">En praktisk kurs för nybörjare.</p>

        <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 mb-8 text-sm text-[var(--color-body)]">
          <p><span className="font-semibold">Start:</span> {getFutureDate()}</p>
          <p><span className="font-semibold">Längd:</span> 8 veckor</p>
          <p><span className="font-semibold">Nivå:</span> Nybörjare</p>
          <p><span className="font-semibold">Pris:</span> 9 900 kr</p>
        </div>

        <div className="-mx-2">
          <PrimaryButton text="Anmäl dig nu" />
        </div>
      </div>
    </section>
  );
}

export default NewCourseView;