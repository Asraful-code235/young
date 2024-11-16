import {
  BookingConsultation,
  HeroSection,
  HowPsychotherapyCanHelp,
  HowTherapyWorks,
  InsuranceCoverage,
  MeetOurTeam,
  PositiveOutcomes,
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
      <PositiveOutcomes />
      <BookingConsultation />
    </section>
  );
}
