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
      <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col justify-between h-full">
        <span className="inline-block bg-tag text-md font-bold px-2 py-3 rounded mb-3 w-max leading-none">
          {category}
        </span>
        <h3 className="text-[20px] font-bold mb-3">{title}</h3>
        <PrimaryButton
          size="small" 
          dark={true} 
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
