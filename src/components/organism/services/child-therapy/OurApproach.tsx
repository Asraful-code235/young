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
    <div className="w-full  bg-[#F4FDFF] py-16 ~px-5/16">
      <div className="flex flex-col gap-6 mx-auto max-w-screen-xl">
        <h2 className="text-center font-medium ~text-2xl/3xl text-primary">
          Our Child Therapy Approach
        </h2>
        <p className="text-center leading-6 max-w-[846px] mx-auto">
          Our therapy approach is personalized for each child, integrating a
          range of modalities based on their individual needs. We use a blend of
          traditional and creative therapeutic approaches to engage children in
          a way that resonates with them.
        </p>
      </div>
      <div className="max-w-[690px] w-full mx-auto mt-6">
        <VerticalTimeLine data={data} />
      </div>
    </div>
  );
}
