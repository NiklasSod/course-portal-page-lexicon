import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard, { CourseCardProps } from "./CourseCard";

function CourseCards() {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("Alla");

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

  const categories = ["Alla", ...Array.from(new Set(courses.map((c) => c.category)))];
  const filteredCourses = selectedCategory === "Alla"
    ? courses
    : courses.filter((course) => course.category === selectedCategory);

  const getColSpan = (total: number, index: number) => {
    if (total === 2) return "lg:col-span-3";
    if (total === 4) return "lg:col-span-3";
    if (total === 5) return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
    return "lg:col-span-2";
  };

  return (
    <section id="courses" className="max-w-7xl mx-auto py-4 px-6 md:py-12 md:px-12" aria-label="Kursutbud">
      { loading ? ( 
        <header className="max-w-7xl mx-auto min-h-100" aria-live="polite">
          <h2 className="text-[28px] font-bold mb-6">Laddar kurser...</h2>
        </header> 

      ) : (
        <>
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-[28px] font-bold">Populära kurser</h2>
            <label htmlFor="category-filter" className="flex items-center gap-2 text-sm font-medium text-gray-900">
              Filtrera:
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-controls="course-grid"
                className="bg-white border border-gray-400 rounded-md px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </header>
          <ul id="course-grid" aria-live="polite" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {filteredCourses.slice(0, 6).map((course, index) => (
              <li key={index + course.title} className={getColSpan(filteredCourses.length, index)}>
                <CourseCard
                  title={course.title}
                  category={course.category}
                  description={course.description}
                />
              </li>
            ))}
          </ul>
        </>)
      }
    </section>
  );
}

export default CourseCards;
