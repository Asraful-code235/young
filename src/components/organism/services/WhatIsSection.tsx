type DataType = {
  title: string;
  description: string;
};

type Props = {
  data: DataType;
};

export function WhatIsSection({ data }: Props) {
  return (
    <section className="max-w-[1020px] mx-auto w-full ~py-11/14 flex flex-col gap-6">
      <h2 className="text-primary ~text-2xl/3xl font-medium text-center">
        {data.title}
      </h2>
      <p className="text-[#333] text-center leading-6 ">{data.description}</p>
    </section>
  );
}
