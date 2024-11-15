import {
  Banner,
  Faq,
  HeroSection,
  OurApproach,
  TimeLine,
} from "@/components/organism/services";
import {
  BenefitsTeenTherapy,
  GroupTherapyforTeens,
  LongTermGrowth,
} from "@/components/organism/services/teen-therapy";
import { TwoGridSection } from "@/components/organism";
import { AboutSection } from "@/components/organism/services/couple-therapy/AboutSection";

import coupletherapyheroImage from "/public/services/coupletherapyheroImage.webp";
import coupletherapyaboutimage from "/public/services/coupletherapyaboutimage.webp";
import teentherapymaximumsuccess from "/public/services/teentherapymaximumsuccess.webp";
import benefitofteentherapyImage from "/public/services/benefitofteentherapy.webp";
import teentherapylongtermgrowth from "/public/services/teentherapylongtermgrowth.webp";

export function CouplesTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/16">
        <HeroSection props={HeroSectionData} />
      </div>
      <div className="max-w-[1440px] mx-auto ~px-5/16">
        <TwoGridSection
          renderComponent={() => <AboutSection />}
          image={coupletherapyaboutimage}
        />
      </div>
      <OurApproach
        data={timelineData}
        showBg={true}
        title="Our Couples Therapy Approach"
        description="We understand that every relationship is unique, which is why our approach is tailored to your specific needs. Our therapists use a blend of evidence-based modalities to help you and your partner address your concerns and rebuild a stronger, more resilient relationship."
      />
      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-5/16">
        <TwoGridSection
          renderComponent={() => <GroupTherapyforTeens />}
          image={coupletherapyaboutimage}
        />
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div>
          <TwoGridSection
            renderComponent={() => <BenefitsTeenTherapy />}
            image={benefitofteentherapyImage}
            rtl={true}
          />
        </div>
        <div className="flex flex-col gap-8 ~py-16/24 overflow-hidden">
          <div className="flex flex-col gap-6">
            <h2 className="font-medium ~text-2xl/3xl text-center text-primary">
              How We Help with Specific Teen Challenges
            </h2>
            <p className="text-center leading-6">
              Our therapists specialize in addressing a wide range of challenges
              that teens face, including
            </p>
          </div>
          <div className="">
            <TimeLine props={TimeLineSectionData} />
          </div>
        </div>
        <TwoGridSection
          renderComponent={() => <LongTermGrowth />}
          image={teentherapylongtermgrowth}
        />

        <Faq data={FaqData} />
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: coupletherapyheroImage,
  title:
    "Couples Therapy in Vaughan & Thornhill: Strengthen Your Relationship, Rebuild Trust",
};

const timelineData = [
  {
    title: "The Gottman Method for Relationship Repair",
    description:
      "The Gottman Method is a research-based approach that helps couples improve communication, resolve conflict, and rebuild emotional connection. We use proven strategies to help couples identify negative patterns, such as criticism or defensiveness, and replace them with healthier ways of relating.",
  },
  {
    title: "Cognitive-Behavioural Therapy (CBT) for Couples",
    description:
      "CBT helps couples understand how their thoughts and behaviours contribute to conflict. By changing the way you communicate and think about your relationship, CBT can help resolve longstanding issues and improve emotional closeness.",
  },
  {
    title: "Emotionally Focused Therapy (EFT)",
    description:
      "EFT focuses on the emotional bonds between partners. It helps couples identify the emotions driving conflict, fostering a deeper understanding of each other’s needs. This approach is especially helpful for couples dealing with trust issues or emotional distance",
  },
];

const TimeLineSectionData = [
  {
    title: "Anxiety and Social Fears",
    description:
      "Teens struggling with anxiety or social fears often benefit from CBT and mindfulness techniques, which teach them to manage their worries and build confidence in social situations.",
  },
  {
    title: "Academic Stress and Performance Pressure",
    description:
      "Academic stress is a common issue for teens. We help them develop stress-reduction strategies, time management skills, and coping mechanisms to handle the pressure of schoolwork without feeling overwhelmed.",
  },
  {
    title: "Peer Relationships and Self-Esteem",
    description:
      "For teens dealing with bullying, social isolation, or low self-esteem, our therapy sessions focus on building their self-worth and helping them develop healthy, supportive relationships with peers",
  },
];

const BannerData = {
  title: "Emphasis on Parent Involvement for Maximum Success",
  description:
    "Research shows that therapy is most effective when the entire family is involved. At Young Sprouts Therapy, we work closely with parents to ensure that the progress teens make in therapy is supported at home. Our therapists engage parents in the therapeutic process, providing guidance on how to maintain positive communication and reinforce the coping strategies their teens learn during sessions. We also offer family therapy sessions, which focus on improving communication, resolving conflicts, and creating a more supportive family environment. This collaborative approach is key to helping teens build lasting emotional resilience and confidence.",
  image: teentherapymaximumsuccess,
};

const FaqData = {
  description:
    "Book a Teen Therapy Session in Vaughan & Thornhill Are you ready to help your teen build emotional strength and resilience? Contact us today to book a session at our Vaughan or Thornhill office. We offer both in-person and virtual appointments to meet your family’s needs. Fill out our online contact form or schedule a free consultation to get started.",
  accordion: [
    {
      title: "How do i know if my teen need therapy?",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
    {
      title: "How long docs teen therapy typically list?",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
    {
      title: "Can parents be involved in the process ? ",
      description:
        "If your teen is struggling with persistent anxiety, mood swing, low-self-esteem, or difficulty managing school or social pressures, therapy can help. A licensed therapist will work with your teen to identify the root causes of their struggles and develop strategies for managing them.",
    },
  ],
};
