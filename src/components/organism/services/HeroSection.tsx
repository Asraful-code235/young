import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

import HeroImage from "/public/services/Parenting Counselling.webp";

type props = {
  image: StaticImageData | string;
  title: string;
};

type PropType = {
  props: props;
};

export function HeroSection({ props }: PropType) {
  return (
    <section className="w-full relative rounded-lg lg:rounded-3xl p-4 overflow-hidden h-full min-h-[216px] lg:min-h-[400px] lg:h-full flex items-center justify-center ">
      <Image
        src={props?.image ? props.image : HeroImage}
        alt="Parenting Counselling in Vaughan & Thornhill"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        className="w-full aspect-auto -z-10"
      />
      <div className="flex flex-col h-full items-center justify-center gap-6 lg:gap-12">
        <header className="flex flex-col gap-2.5 lg:gap-4">
          <h3 className="text-center ~text-sm/2xl font-medium text-white">
            Young Sprouts
          </h3>
          <h1 className="text-center w-full max-w-[820px] mx-auto text-white ~text-base/4xl font-bold">
            {props?.title}
          </h1>
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
          <Button
            variant={"default"}
            className="bg-white text-primary hover:bg-primary hover:text-white py-3 max-w-[270px] w-full"
          >
            Book a Free Consult
          </Button>
          <Button
            variant={"outline"}
            className="border border-white hover:border-primary text-white py-3 max-w-[270px] w-full"
          >
            Call Now -(647)370-7622
          </Button>
        </div>
      </div>
    </section>
  );
}
