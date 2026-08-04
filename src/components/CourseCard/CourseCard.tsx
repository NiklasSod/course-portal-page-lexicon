import PrimaryButton from "../Buttons/PrimaryButton";

function CourseCard({
  title,
  category,
  link,
}: {
  title: string;
  category: string;
  link: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col justify-between h-full">
      <span className="inline-block bg-gray-100 text-gray-800 text-md font-bold px-2 py-3 rounded mb-3 w-max leading-none">
        {category}
      </span>
      <h3 className="text-[20px] font-bold text-gray-900 mb-3">{title}</h3>
      <PrimaryButton dark={true} text={"Läs mer"} size="small" />
    </div>
  );
}

export default CourseCard;
