function PrimaryButton({
  text,
  size = "medium",
  onClick,
}: {
  text: string;
  size?: "small" | "medium";
  onClick?: () => void;
}) {
  const sizeStyle = size === "medium" ? "text-[15px]" : "text-[13px]";
  
  return (
    <button
      onClick={onClick}
      className={`bg-[var(--color-btn-bg)] text-[var(--color-btn-text)] hover:bg-[var(--color-btn-hover)] border border-[var(--color-border)] font-medium transition rounded-md py-[0.7em] px-[1.4em] w-max font-bold leading-none cursor-pointer ${sizeStyle}`}
    >
      {text}
    </button>
  );
}
export default PrimaryButton;
