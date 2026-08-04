import CourseCard from "../CourseCard/CourseCard";
import courseJson from "../../data/courseCards.json"; // TODO remove and use a fetch in a useEffect

function CourseCards() {
  return (
    <section id="courses">
      <h2>Populära kurser</h2>
      <div>
        {courseJson.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            category={course.category}
            description={course.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseCards;
