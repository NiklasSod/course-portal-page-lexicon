function CourseCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <a>{description}</a>
    </div>
  );
}

export default CourseCard;
