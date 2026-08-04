function PrimaryButton({
  text,
  dark
}: {
  text: string;
  dark: boolean;
}) {
  return (
    <button className={dark ? "bg-[#2C2C2C] text-white border border-[#2C2C2C] rounded-xl" : "bg-[#FFF] text-[#2C2C2C] border border-[#2C2C2C] rounded-xl"}>
      {text}
    </button>
  )
}
export default PrimaryButton 