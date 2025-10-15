import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Interests from "@/components/Interests";
import ExperienceCard from "@/components/ExperienceCard";
import ToolsList from "@/components/ToolsList";
import EducationList from "@/components/EducationList";
import LanguagesList from "@/components/LanguagesList";
import PortfolioLinks from "@/components/PortfolioLinks";
import ContactDetails from "@/components/ContactDetails";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans min-h-screen bg-background transition-colors duration-300">
      <Header currentLang={lang} />

      <main className="container mx-auto px-4 pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 lg:gap-10">
          <ProfileCard />

          <p className="sm:col-span-2 md:col-span-8 lg:col-span-9 p-4 md:p-6 text-base md:text-xl lg:text-2xl text-white rounded-2xl bg-foreground shadow-lg leading-relaxed">
            {dict.intro}
          </p>

          <Interests items={dict.sections.interests.items} title={dict.sections.interests.title} />

          <ExperienceCard item={dict.sections.experience.freelance} />
          <ExperienceCard item={dict.sections.experience.meetzed} />

          <ToolsList title={dict.sections.designTools} items={["Ai","Ps","Id","Xd"]} />

          <EducationList education={dict.sections.education} />

          <ToolsList title={dict.sections.editingTools} items={["Ae","Pr"]} />

          <LanguagesList items={["🇧🇴","🇬🇧","🇺🇸"]} title={dict.sections.languages} />

          <PortfolioLinks dict={dict} />
          <ContactDetails dict={dict} />

        </div>
      </main>
    </div>
  );
}