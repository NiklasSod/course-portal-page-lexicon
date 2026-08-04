import CourseCard from "../CourseCard/CourseCard";
import courseJson from "../../data/courseCards.json";

function CourseCards() {
  return (
    <section>
      <h2>Populära kurser</h2>
      <div>
        {Object.entries(courseJson).map((data) => (
          <CourseCard
            title={data[1].title}
            category={data[1].category}
            link={data[1].link}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseCards;
