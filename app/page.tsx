import { Header } from '@/components/Header';
import { Marquee } from '@/components/Marquee';
import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { Experience } from '@/components/sections/Experience';
import { RecommendationsSection } from '@/components/sections/RecommendationsSection';
import { Competencies } from '@/components/sections/Competencies';
import { AcademicVolunteer } from '@/components/sections/AcademicVolunteer';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { sectionClasses } from '@/components/sections/Section';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Marquee />
        <div
          className={`mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 ${sectionClasses.pageSections}`}
        >
          <MetricsSection />
          <AboutSection />
          <Experience />
          <RecommendationsSection />
          <Competencies />
          <AcademicVolunteer />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
