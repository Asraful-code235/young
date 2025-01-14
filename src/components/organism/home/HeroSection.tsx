import Text from "@/components/atom/Text";
import Title from "@/components/atom/Title";
import { ContactDialog } from "@/components/molecules/home/contact-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[393px] h-full lg:min-h-[80vh] flex items-center w-full overflow-hidden py-6">
      {/* Desktop and Mobile Background Images */}
      <picture>
        {/* Mobile Image */}
        <source
          media="(max-width: 768px)"
         srcSet="/images/mobilebg.webp"
          type="image/webp"
        />
        {/* Desktop Image */}
        <source
          media="(min-width: 769px)"
          srcSet="/images/homebg.webp"
          type="image/webp"
        />
        {/* Fallback Image */}
        <img
          src="/images/homebg.webp"
          alt="Young Sprouts Therapy - Child and Family Therapy in Vaughan"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          loading="eager"
        />
      </picture>
      
      <div className="relative max-w-[1440px] mx-auto ~px-4/10 z-40 w-full flex flex-col gap-8 lg:gap-16">
        <div className="homeGradient max-lg:px-1.5 max-lg:py-3.5 flex flex-col gap-[18px]">
          <Title
            size="big"
            type="h1"
            className="flex flex-col ~text-xl/6xl max-lg:text-white"
          >
            <span className="~text-xl/5xl font-medium max-lg:text-white">
              Expert{" "}
              <strong className="text-white lg:text-secondary">
                Child, Teen, and Family
              </strong>
            </span>
            Therapy in Vaughan
          </Title>
          <Text
            size="medium"
            className="~text-base/2xl font-normal text-[#482C2C] lg:text-[#91818A]"
          >
            Supporting Growth Through Psychotherapy and Counselling
          </Text>
          <Text
            size="medium"
            className="~text-sm/base font-normal max-lg:text-[#482C2C] max-w-[650px]"
          >
            Supporting Families in Vaughan and Thornhill with Personalized,
            Evidence-Based Therapy
          </Text>
        </div>
        
        <div className="flex flex-col max-sm:hidden sm:flex-row max-lg:items-center gap-4 lg:gap-5 w-full z-20">
          <ContactDialog />
          <Link
            href="/#book-consultation"
            className="max-sm:w-full flex max-sm:items-center max-lg:justify-center"
          >
            <Button variant="outlineV2" className="max-w-[260px] w-full">
              Schedule a Free Consult
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
