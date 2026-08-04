import CourseCard from "../CourseCard/CourseCard";

function CourseCards() {
  const courses = [
    "Webbutveckling från grunden",
    "C# och ASP.NET Core",
    "Responsiv design med CSS",
    "C# och ASP.NET Core",
    "Responsiv design med CSS",
  ];
  return (
    <section>
      <h2>Populära kurser</h2>
      <div>
        {courses.map((name) => (
          <CourseCard title={name} category="</>" />
        ))}
      </div>
    </section>
  );
}

export default CourseCards;
