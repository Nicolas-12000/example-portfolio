export default function ToolsList({ title, items }: { title: string; items: string[] }) {
  return (
    <ul className="sm:col-span-2 md:col-span-6 flex flex-wrap gap-3 md:gap-4 items-center card">
      <li className="text-white text-base md:text-xl font-bold border-r border-grey pr-3 md:pr-4">{title}</li>
      {items.map((t) => (
        <li key={t} className="flex items-center bg-[#111827] rounded-lg font-bold text-[#fff] text-lg md:text-xl px-3 md:px-4 py-2">{t}</li>
      ))}
    </ul>
  );
}
