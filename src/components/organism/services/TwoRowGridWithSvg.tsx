import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface TwoGridSectionProps {
  renderComponent: () => JSX.Element;
  image: StaticImageData | string;
  className?: string;
}

export function TwoRowGridWithSvg({
  renderComponent,
  image,
  className,
}: TwoGridSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col lg:flex-row  relative gap-[44px] lg:gap-20 ",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full lg:max-w-[564px] h-full rounded-tl-3xl rounded-br-3xl flex-shrink-0"
        )}
      >
        <Image
          src={image}
          alt="section_image"
          placeholder="blur"
          width={1000}
          height={1000}
          className=" object-center object-cover w-full h-full  flex-shrink-0 "
        />
      </div>
      <article className={cn("max-w-[776px]")}>{renderComponent()}</article>
    </section>
  );
}
