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
  TherapyCanHelp,
} from "@/components/organism/services/teen-therapy";
import { TwoGridSection } from "@/components/organism";

import teentherapyheroImage from "/public/services/teentherapyheroImage.webp";
import TeenTherapyAboutImage from "/public/services/TeenTherapyAboutImage.webp";
import teentherapymaximumsuccess from "/public/services/teentherapymaximumsuccess.webp";
import benefitofteentherapyImage from "/public/services/benefitofteentherapy.webp";
import teentherapylongtermgrowth from "/public/services/teentherapylongtermgrowth.webp";

export function TeenTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/16">
        <HeroSection props={HeroSectionData} />
      </div>
      <TherapyCanHelp />
      <OurApproach
        data={timelineData}
        showBg={false}
        title="Our Teen Therapy Approach"
        description="Every teen’s journey is different. At Young Sprouts Therapy, we tailor our therapeutic approach to the individual needs of each teen. Our therapists integrate a variety of evidence-based modalities to help teens navigate emotional challenges, behavioural issues, and peer or academic stress."
      />
      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-5/16">
        <TwoGridSection
          renderComponent={() => <GroupTherapyforTeens />}
          image={TeenTherapyAboutImage}
        />
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div>
          <TwoGridSection
            renderComponent={() => <BenefitsTeenTherapy />}
            image={benefitofteentherapyImage}
            rtl={true}
            row={5}
          />
        </div>
        <div className="flex flex-col gap-8 ~py-16/24 overflow-hidden">
          <div className="flex flex-col gap-6">
            <h2 className="font-medium ~text-2xl/3xl text-center text-primary">
              How We Help with Specific Teen Challenges
            </h2>
            <p className="text-center leading-6 max-w-[846px] mx-auto">
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
  image: teentherapyheroImage,
  title:
    "Teen Therapy in Vaughan & Thornhill: Building Emotional Strength and Confidence",
};

const timelineData = [
  {
    title: "Cognitive-Behavioural Therapy (CBT)",
    description:
      "CBT helps children identify negative thought patterns and learn healthier ways of thinking and behaving. This is particularly helpful for anxiety, mood disorders, and low self-esteem.",
  },
  {
    title: "Dialectical Behaviour Therapy (DBT) for Emotional Regulation",
    description:
      "DBT helps teens who struggle with emotional regulation, impulsivity, or defiance. By teaching mindfulness, distress tolerance, and healthy coping strategies, DBT supports teens in managing intense emotions and building healthier relationships with family and friends.",
  },
  {
    title: "Art Therapy",
    description:
      "Art Therapy offers a creative outlet for teens to explore and express their emotions, particularly when verbal communication feels challenging. This non-verbal approach is especially useful for teens experiencing anxiety, trauma, or self-esteem issues.",
  },
  {
    title: "Mindfulness and Stress-Reduction Techniques",
    description:
      "For teens facing school-related stress, peer pressure, or life changes, mindfulness techniques provide practical strategies to reduce anxiety and stay grounded. These skills can be applied to a variety of situations, from managing exams to navigating social challenges.",
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
