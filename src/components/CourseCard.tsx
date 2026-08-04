import PrimaryButton from "./PrimaryButton";
import { useState } from 'react'
import CardModal from './CardModal'

export interface CourseCardProps {
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
      {isOpen && 
        <CardModal 
          title={title} category={category} description={description} setIsOpen={setIsOpen} />}
    </>
  );
}

export default CourseCard;
