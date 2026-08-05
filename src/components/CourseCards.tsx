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

  const getColSpan = (total: number, index: number) => {
    if (total === 4) return "lg:col-span-3";
    if (total === 5) return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
    return "lg:col-span-2";
  };

  return (
    <section id="courses" className="max-w-7xl mx-auto py-4 px-6 md:py-12 md:px-12">
      { loading ? ( 
        <div className="max-w-7xl mx-auto min-h-100">
          <h2 className="text-[28px] font-bold mb-6">Laddar kurser...</h2>
        </div> 
      ) : (
        <div>
          <h2 className="text-[28px] font-bold mb-6">Populära kurser</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {courses.slice(0, 6).map((course, index) => (
              <div key={index + course.title} className={getColSpan(courses.length, index)}>
                <CourseCard
                  title={course.title}
                  category={course.category}
                  description={course.description}
                />
              </div>
            ))}
          </div>
        </div>)
      }
    </section>
  );
}

export default CourseCards;
