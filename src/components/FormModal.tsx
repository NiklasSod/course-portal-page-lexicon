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
        <div className="flex items-center justify-between pb-3">
          <div>
            <span className="text-md rounded ">
              <span className="font-semibold">Namn: </span>{name}
            </span>
            <h2 className="text-md fontmt-2"><span className="font-semibold">Email: </span>{email}</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2 cursor-pointer"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>

        <div className="leading-relaxed">
          <span className="text-md font-semibold rounded">Meddelande: </span>{message}
        </div>

        <div className="flex justify-end pt-3">
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