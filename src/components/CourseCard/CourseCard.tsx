import PrimaryButton from "../Buttons/PrimaryButton";

function CourseCard({ title, category }: { title: string; category: string }) {
  return (
    <div>
      <span>{category}</span>
      <h3>{title}</h3>
      <PrimaryButton dark={false} text={"Läs mer"} />
    </div>
  );
}

export default CourseCard;
