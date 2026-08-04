import { useEffect, useState } from "react";
import CourseCard, { CourseCardProps } from "../CourseCard/CourseCard";

function CourseCards() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../public/data/courseCards.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        return response.json();
      })
      .then((data: CourseCardProps[]) => {
        setTimeout(() => {
          setCourses(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  return (
    <div  id="courses">
      { loading ? ( 
        <p>Laddar kurser...</p> // TODO reminder liten styling på denna text också då den syns i 1 sekund
      ) : (
        <section>
          <h2>Populära kurser</h2>
          <div>
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                category={course.category}
                description={course.description}
              />
            ))}
          </div>
        </section>)
      }
    </div>
  );
}

export default CourseCards;
