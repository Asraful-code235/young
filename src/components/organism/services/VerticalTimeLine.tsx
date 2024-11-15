type DataType = {
  title: string;
  description: string;
};

type Props = {
  data: DataType[];
};

export function VerticalTimeLine({ data }: Props) {
  return (
    <div className="-my-6 flex flex-col">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative pl-8 sm:pl-32 py-6 group flex flex-col gap-2"
        >
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-primary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <h3 className="text-primary text-lg font-medium">{item.title}</h3>
          </div>
          <p className="leading-6">{item.description}</p>
        </div>
      ))}
    </div>
  );
}