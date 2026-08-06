function PrimaryButton({
  text,
  dark,
  size = "medium",
  onClick,
}: {
  text: string;
  dark: boolean;
  size?: "small" | "medium";
  onClick?: () => void;
}) {
  const sizeStyle = size === "medium" ? "text-[15px]" : "text-[13px]";
  const variantStyles = dark
    ? "bg-slate-950 text-slate-100 hover:bg-slate-800 border border-slate-950"
    : "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700";
  return (
    <button
      onClick={onClick}
      className={`${variantStyles} font-medium transition rounded-md py-[0.7em] px-[1.4em] w-max font-bold leading-none cursor-pointer ${sizeStyle}`}
    >
      {text}
    </button>
  );
}
export default PrimaryButton;
