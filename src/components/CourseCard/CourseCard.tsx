import PrimaryButton from "../Buttons/PrimaryButton";
import { useState } from 'react'

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
}

function CourseCard({title, category, description}: CourseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <PrimaryButton 
          dark={false} 
          text={"Läs mer"} 
          onClick={() => setIsOpen(true)} />
      </div>
      {/* MODAL HERE */}
    </>
  );
}

export default CourseCard;
