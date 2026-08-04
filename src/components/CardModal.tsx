
import PrimaryButton from "./Buttons/PrimaryButton";

interface CardModalProps {
  title: string;
  category: string;
  description: string;
  setIsOpen: (isOpen: boolean) => void;
}

function CardModal({title, category, description, setIsOpen}: CardModalProps) {

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-700">
              {category}
            </span>
            <h2 className="text-xl font-bold text-gray-900 mt-2">{title}</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>

        <div className="py-4 text-gray-600 leading-relaxed">
          {description}
        </div>

        <div className="flex justify-end pt-3 border-t">
          <PrimaryButton
            dark={false}
            text={"Stäng"}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default CardModal