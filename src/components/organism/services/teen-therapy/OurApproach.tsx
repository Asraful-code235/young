import { VerticalTimeLine } from "../VerticalTimeLine";

type DataType = {
  title: string;
  description: string;
};

type Props = {
  data: DataType[];
};

export function OurApproach({ data }: Props) {
  return (
    <div className="w-full py-16 ~px-5/16">
      <div className="flex flex-col gap-6 mx-auto max-w-screen-xl">
        <h2 className="text-center font-medium ~text-2xl/3xl text-primary">
          Our Teen Therapy Approach
        </h2>
        <p className="text-center leading-6 max-w-[846px] mx-auto">
          Every teen’s journey is different. At Young Sprouts Therapy, we tailor
          our therapeutic approach to the individual needs of each teen. Our
          therapists integrate a variety of evidence-based modalities to help
          teens navigate emotional challenges, behavioural issues, and peer or
          academic stress.
        </p>
      </div>
      <div className="max-w-[690px] w-full mx-auto mt-6">
        <VerticalTimeLine data={data} />
      </div>
    </div>
  );
}
