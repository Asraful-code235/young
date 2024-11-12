import { Card } from "@/components/ui/card";

export function HowTherapyWorks() {
  return (
    <section className="~py-16/28 max-w-[1440px] mx-auto ~px-5/16 flex flex-col gap-14 lg:gap-12 overflow-hidden">
      <div className="flex flex-col gap-[22px]">
        <h2 className="~text-xl/3xl font-medium text-center text-primary">
          How Therapy Works ?
        </h2>
        <p className="text-center max-w-[846px] mx-auto w-full">
          {
            '"Discover the process of therapy, from understanding your challenges to building personalized strategies for growth and healing."'
          }
        </p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14 relative before:absolute before:content-[url('/svg/howtherapyworkmobile.svg')] before:-top-8 before:bottom-0 before:left-6 lg:before:content-[url('/svg/howtherapywork.svg')]  lg:before:-left-8 lg:before:-right-16 before:w-full lg:before:-top-12 before:h-full before:bg-no-repeat before:z-10">
        <Card className="flex flex-col gap-2 px-4 py-11 z-20">
          <h3 className="text-2xl font-medium text-primary text-center">
            Free Phone Consultation
          </h3>
          <p className="text-base leading-6 text-center">
            A quick, no-obligation call to discuss your child or family’s needs
            and answer any questions. We’ll guide you through the next steps.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 px-4 py-11 z-20">
          <h3 className="text-2xl font-medium text-primary text-center">
            Intake Appointment
          </h3>
          <p className="text-base leading-6 text-center">
            Meet with one of our expert therapists for an in-depth intake
            session. Together, we’ll explore concerns, set goals, and plan the
            path forward.
          </p>
        </Card>
        <Card className="flex flex-col gap-2 px-4 py-11 z-20">
          <h3 className="text-2xl font-medium text-primary text-center">
            Personalized Treatment Plan
          </h3>
          <p className="text-base leading-6 text-center">
            A customized treatment plan is created, and regular therapy sessions
            begin, supporting growth and well-bei
          </p>
        </Card>
      </ul>
    </section>
  );
}