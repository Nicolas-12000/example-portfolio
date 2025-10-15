export default function EducationList({ education }: { education: any }) {
  return (
    <section className="sm:col-span-2 md:col-span-6 md:row-span-3 flex flex-col gap-4 md:gap-6">
      <article className="card w-full">
        <h2 className="text-white text-xl md:text-2xl font-bold">{education.highSchool.title}</h2>
        <p className="text-grey">{education.highSchool.field}</p>
      </article>
      <article className="card w-full">
        <h2 className="text-white text-xl md:text-2xl font-bold">{education.diploma.title}</h2>
        <p className="text-grey">{education.diploma.field}</p>
      </article>
      <article className="card w-full">
        <h2 className="text-white text-xl md:text-2xl font-bold">{education.graduation.title}</h2>
        <p className="text-grey">{education.graduation.field}</p>
      </article>
    </section>
  );
}
