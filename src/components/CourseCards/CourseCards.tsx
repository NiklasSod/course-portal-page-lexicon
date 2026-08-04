import CourseCard from "../CourseCard/CourseCard";
import courseJson from "../../data/courseCards.json";

function CourseCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Populära kurser</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
