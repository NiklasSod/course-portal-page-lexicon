import { useEffect, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import CourseCategory from "./CourseCategory";

interface CardModalProps {
  title: string;
  category: string;
  description: string;
  setIsOpen: (isOpen: boolean) => void;
}

function CardModal({title, category, description, setIsOpen}: CardModalProps) {
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
        ref={modalRef}
        tabIndex={-1}
        className="bg-[var(--color-root-bg)] text-[var(--color-body)] w-full max-w-lg rounded-lg p-6 shadow-xl border-[var(--color-border)]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        onKeyDown={(e) => {
          if (e.key === "Escape") setIsOpen(false);
        }}
        aria-label="Kursinfo"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3">
          <div>
            <CourseCategory category={category} />
            <h2 className="text-xl font-bold mt-2">{title}</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="self-start text-[var(--color-menu)] hover:text-[var(--color-body)] font-bold text-xl px-2 cursor-pointer"
            aria-label="Stäng"
          >
            ✕
          </button>
        </div>

        <div className="py-4 leading-relaxed">
          {description}
        </div>

        <div className="flex justify-end pt-3 border-t border-[var(--color-border)]">
          <PrimaryButton
            text={"Stäng"}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default CardModal