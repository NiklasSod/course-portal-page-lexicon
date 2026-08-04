function PrimaryButton({
  text,
  dark,
  onClick 
}: {
  text: string;
  dark: boolean;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={dark ? "bg-[#2C2C2C] text-white border border-[#2C2C2C] rounded-xl px-6 py-3 mx-2" : "bg-[#FFF] text-[#2C2C2C] border border-[#2C2C2C] rounded-xl px-6 py-3 mx-2"}>
      {text}
    </button>
  )
}
export default PrimaryButton 