function CourseCategory({ category }: { category: string }) {
  return (
    <span 
      className="inline-block bg-slate-700 text-md font-bold px-2 py-3 rounded mb-3 w-max leading-none before:content-['<'] before:mr-0.25 after:content-['>'] after:ml-0.25"
      aria-hidden="true"
      role="img"
    >
      {category}
    </span>
  );
}

export default CourseCategory;