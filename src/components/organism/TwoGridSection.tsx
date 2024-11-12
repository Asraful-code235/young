import { cn } from "@/lib/utils";
import Image from "next/image";

interface TwoGridSectionProps {
  renderComponent: () => JSX.Element;
  image: string;
  className?: string;
}

export function TwoGridSection({
  renderComponent,
  image,
  className,
}: TwoGridSectionProps) {
  return (
    <section
      className={cn("grid grid-cols-1 ~lg:grid-cols-2 ~lg:gap-24", className)}
    >
      <div>{renderComponent()}</div>{" "}
      <article>
        <Image
          src={image}
          alt="section_image"
          layout="fill"
          objectFit="cover"
          decoding="async"
          loading="lazy"
          objectPosition="center"
        />
      </article>
    </section>
  );
}
