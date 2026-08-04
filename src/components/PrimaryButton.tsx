function PrimaryButton({
  text,
  dark,
  size = "medium",
  onClick 
}: {
  text: string;
  dark: boolean;
  size?: "small" | "medium";
  onClick?: () => void;
}) {
  const sizeStyle = size === "medium" ? "text-[15px]" : "text-[13px]";
  const variantStyles = dark
    ? "bg-btn-dark text-white"
    : "bg-[#FFF] text-btn-dark";
  return (
    <button 
      onClick={onClick} 
      className={`${variantStyles} border border-btn-dark rounded-md py-[0.7em] px-[1.4em] w-max font-bold leading-none cursor-pointer ${sizeStyle}`}>
      {text}
    </button>
  )
}
export default PrimaryButton 