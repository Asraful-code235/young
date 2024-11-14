import { Banner, HeroSection, TimeLine } from "@/components/organism/services";
import {
  GroupTherapyforTeens,
  OurApproach,
  TherapyCanHelp,
} from "@/components/organism/services/teen-therapy";
import { TwoGridSection } from "@/components/organism";

import teentherapyheroImage from "/public/services/teentherapyheroImage.webp";
import TeenTherapyAboutImage from "/public/services/TeenTherapyAboutImage.webp";
import teentherapymaximumsuccess from "/public/services/teentherapymaximumsuccess.webp";

export function TeenTherapy() {
  return (
    <section className=" ~pb-16/20 pt-6 lg:pt-2.5 flex flex-col gap-7">
      <div className="max-w-[1440px] w-full mx-auto ~px-4/16">
        <HeroSection props={HeroSectionData} />
      </div>
      <TherapyCanHelp />
      <OurApproach data={timelineData} />
      <div className="~py-5/28 max-w-[1440px] w-full mx-auto ~px-5/16">
        <TwoGridSection
          renderComponent={() => <GroupTherapyforTeens />}
          image={TeenTherapyAboutImage}
        />
        <div className="~py-12/24">
          <Banner data={BannerData} />
        </div>
        <div className="flex flex-col gap-8 ~py-10/16 overflow-hidden">
          <div className="flex flex-col gap-6">
            <h2 className="font-medium ~text-2xl/3xl text-center text-primary">
              How We Help with Specific Teen Challenges
            </h2>
            <p className="text-center leading-6">
              Our therapists specialize in addressing a wide range of challenges
              that teens face, including
            </p>
          </div>
          <TimeLine props={TimeLineSectionData} />
        </div>
      </div>
    </section>
  );
}
const HeroSectionData = {
  image: teentherapyheroImage,
  title: "Parenting Counselling in Vaughan & Thornhill",
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
