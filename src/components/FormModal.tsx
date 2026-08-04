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
            <span className="text-md font-semibold px-2 py-1 bg-gray-100 rounded text-gray-700">
              Namn: {name}
            </span>
            <h2 className="text-md font-bold text-gray-900 mt-2">Email: {email}</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>

        <div className="py-4 text-gray-800 leading-relaxed">
          Meddelande: {message}
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