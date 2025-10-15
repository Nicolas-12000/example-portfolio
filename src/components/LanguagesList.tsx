export default function LanguagesList({ items, title }: { items: string[]; title: string }) {
  return (
    <ul className="sm:col-span-2 md:col-span-6 flex flex-wrap gap-3 md:gap-4 items-center card">
      <li className="text-white text-base md:text-xl font-bold border-r border-grey pr-3 md:pr-4">{title}</li>
      {items.map((t) => (
        <li key={t} className="text-3xl md:text-4xl">{t}</li>
      ))}
    </ul>
  );
}
