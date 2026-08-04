import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard, { CourseCardProps } from "./CourseCard";

function CourseCards() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    axios.get<CourseCardProps[]>("/data/courseCards.json")
      .then((response) => {
        setTimeout(() => {
          if (isMounted) {
            setCourses(response.data);
            setLoading(false);
          }
        }, 1000);
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Fel vid hämtning:", err);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div  id="courses">
      { loading ? ( 
        <p>Laddar kurser...</p> 
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Populära kurser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index + course.title}
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
