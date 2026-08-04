import PrimaryButton from "./PrimaryButton";

function CourseView() {
  return (
    <div className="w-full bg-white px-6 py-10 flex flex-col items-start">
      <h2 className="text-[28px] font-bold mb-8">Kursvy</h2>

      <div className="bg-stone-50 rounded-2xl border border-stone-300 p-8 max-w-8xl w-full">
        <h2 className="text-2xl font-semibold mb-2">Webbutveckling från grunden</h2>
        <p className="text-subheading mb-6">En praktisk kurs för nybörjare.</p>

        <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 mb-8 text-sm text-menu">
          <p><span className="font-semibold">Start:</span> 12 aug 2026</p>
          <p><span className="font-semibold">Längd:</span> 8 veckor</p>
          <p><span className="font-semibold">Nivå:</span> Nybörjare</p>
          <p><span className="font-semibold">Pris:</span> 9 900 kr</p>
        </div>

        <div className="-mx-2">
          <PrimaryButton text="Anmäl dig nu" dark={true} />
        </div>
      </div>
    </div>
  );
}

export default CourseView;