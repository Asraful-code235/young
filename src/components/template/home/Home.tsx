import {
  HeroSection,
  HowPsychotherapyCanHelp,
  HowTherapyWorks,
  MeetOurTeam,
  TherapeuticModalities,
  TherapistInVaughan,
} from "@/components/organism/home";

export function Home() {
  return (
    <section>
      <HeroSection />
      <TherapistInVaughan />
      <HowPsychotherapyCanHelp />
      <MeetOurTeam />
      <TherapeuticModalities />
      <HowTherapyWorks />
    </section>
  );
}
