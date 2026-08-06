import PrimaryButton from "./PrimaryButton";
import { useState } from 'react'
import CardModal from './CardModal'
import CourseCategory from "./CourseCategory";

export interface CourseCardProps {
  title: string;
  category: string;
  description: string;
}

function CourseCard({title, category, description}: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="bg-[var(--color-root-bg)] border border-[var(--color-border)] rounded-md p-6 shadow-sm flex flex-col justify-between h-full text-[var(--color-body)]">
        <CourseCategory category={category} />
        <h3 className="text-[20px] font-bold mb-3 text-[var(--color-body)]">{title}</h3>
        <PrimaryButton
          size="small" 
          text={"Läs mer"} 
          onClick={() => setIsOpen(true)} />
      </article>
      {isOpen && 
        <CardModal 
          title={title} category={category} description={description} setIsOpen={setIsOpen} />}
    </>
  );
}

export default CourseCard;