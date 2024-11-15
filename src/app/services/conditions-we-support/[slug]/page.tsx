import {
  AdhdTherapy,
  AnxietyTherapy,
} from "@/components/pages/services/conditions-we-support";

interface TherapyTypeProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TherapyTypeProps) {
  // Map the slug to a corresponding capability title
  const titles: Record<string, string> = {
    "adhd-therapy": "Adhd Therapy",
    "anxiety-therapy": "Anxiety Therapy",
  };

  const title = titles[params.slug] || "Young Sprouts Therapy";

  return {
    title: `Young Sprouts Therapy - ${title}`,
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: TherapyTypeProps) {
  let content = null;

  switch (slug) {
    case "adhd-therapy":
      content = <AdhdTherapy />;
      break;
    case "anxiety-therapy":
      content = <AnxietyTherapy />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
