import { Card } from "@/components/ui/card";

type ListType = {
  title: string;
  description: string;
};

type DataType = {
  title: string;
  description: string;
  list: ListType[];
};

type Props = {
  data: DataType;
};

export function WhyChooseUs({ data }: Props) {
  return (
    <section className=" flex flex-col gap-6 lg:gap-14">
      <div className="flex flex-col gap-6">
        <h2 className="~text-2xl/3xl font-medium text-primary text-center">
          {data.title}
        </h2>
        <p className="text-center leading-6 max-w-[948px] mx-auto">
          {data.description}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-11 w-full max-w-[1245px] mx-auto">
        {data.list.map((item, index) => (
          <Card
            key={index}
            className="p-6 lg:px-12 lg:py-14 flex flex-col gap-6 bg-primary rounded-lg"
          >
            <h3 className="text-white font-medium text-xl">{item.title}</h3>
            <p className="text-white leading-6">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
