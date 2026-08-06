interface CourseCategoryProps {
  category: string;
}

const colorPalettes = [
  "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "bg-orange-500/10 text-orange-400 border-orange-500/20",
];

function getCategoryStyle(category: string) {
  let hash = 2166136261;
  for (let i = 0; i < category.length; i++) {
    hash ^= category.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  const index = Math.abs(hash) % colorPalettes.length;
  return colorPalettes[index];
}

function CourseCategory({ category }: CourseCategoryProps) {
  const styleClass = getCategoryStyle(category);

  return (
    <span 
      className={`${styleClass} inline-block text-md font-bold px-2 py-3 rounded mb-3 w-max leading-none before:content-['<'] before:mr-0.25 after:content-['>'] after:ml-0.25`}
      aria-hidden="true"
      role="img"
    >
      {category}
    </span>
  );
}

export default CourseCategory;