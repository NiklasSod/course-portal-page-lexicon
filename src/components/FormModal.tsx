import { useEffect, useRef } from "react";
import PrimaryButton from './PrimaryButton'

interface FormModalProps {
  name: string;
  email: string;
  message: string;
  setIsOpen: (isOpen: boolean) => void;
}

export function FormModal({ name, email, message, setIsOpen }: FormModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[var(--color-root-bg)] text-[var(--color-body)] relative w-full max-w-lg rounded-lg p-6 shadow-xl border border-[var(--color-border)]"
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        aria-label="Meddelande skickat"
      >
        <div className="flex items-start justify-between border-b border-[var(--color-border)] pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-body)]">
              Tack! Vi har fått in ditt meddelande.
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[var(--color-menu)] hover:text-[var(--color-body)] font-bold text-xl px-2 cursor-pointer"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-[var(--color-body)]">
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
            text={"Stäng"}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}