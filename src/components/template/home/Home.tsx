import {
  HeroSection,
  HowPsychotherapyCanHelp,
  HowTherapyWorks,
  InsuranceCoverage,
  MeetOurTeam,
  TherapeuticModalities,
  TherapistInVaughan,
  WhyChooseUs,
} from '@/components/organism/home';

export function Home() {
  return (
    <section>
      <HeroSection />
      <TherapistInVaughan />
      <HowPsychotherapyCanHelp />
      <MeetOurTeam />
      <TherapeuticModalities />
      <HowTherapyWorks />
      <WhyChooseUs />
      <InsuranceCoverage />
    </section>
  );
}
