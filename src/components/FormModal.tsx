import PrimaryButton from './PrimaryButton'

interface FormModalProps {
  name: string;
  email: string;
  message: string;
  setIsOpen: (isOpen: boolean) => void;
}

export function FormModal({ name, email, message, setIsOpen }: FormModalProps) {
  return (
    <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
  onClick={() => setIsOpen(false)}
>
  <div
    className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex items-start justify-between border-b pb-4 mb-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Tack! Vi har fått in ditt meddelande.
        </h2>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2 cursor-pointer"
        aria-label="Stäng"
      >
        ✕
      </button>
    </div>

    <div className="space-y-3">
      <div className="text-md">
        <span className="font-semibold">Namn: </span>
        <br />
        {name}
      </div>

      <div className="text-md">
        <span className="font-semibold">Email: </span>
        <br />
        {email}
      </div>

      <div className="leading-relaxed">
        <span className="text-md font-semibold">Meddelande: </span>
        <br />
        {message}
      </div>
    </div>

    <div className="flex justify-end pt-4 mt-2">
      <PrimaryButton
        dark={false}
        text={"Stäng"}
        onClick={() => setIsOpen(false)}
      />
    </div>
  </div>
</div>
  );
}