export default function ExperienceCard({ item }: { item: any }) {
  return (
    <article className="sm:col-span-2 md:col-span-6 card">
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-grey pb-6 md:pb-10">
        <header className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
          <p className="text-grey text-xs md:text-sm mt-1">{item.role}</p>
        </header>
        <span className="bg-background rounded-lg text-white text-xs md:text-sm px-3 py-2 md:p-4 whitespace-nowrap self-start sm:self-auto">
          {item.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-white text-xs md:text-sm mt-4 md:mt-6 space-y-2">
        {item.bullets.map((b: string) => (
          <li key={b} className="leading-relaxed">{b}</li>
        ))}
      </ul>
    </article>
  );
}
