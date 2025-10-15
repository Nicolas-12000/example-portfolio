export default function Interests({ items, title }: { items: string[]; title: string }) {
  return (
    <ul className="sm:col-span-2 md:col-span-8 lg:col-span-9 flex flex-wrap items-center gap-3 md:gap-4 card">
      <li className="text-white text-base md:text-lg font-bold border-r border-grey pr-3 md:pr-4">
        {title}
      </li>
      {items.map((item) => (
        <li key={item} className="flex items-center bg-background rounded-lg text-white text-xs md:text-sm px-3 md:px-4 py-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
