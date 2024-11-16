import {
  AcceptanceTherapy,
  ArtTherapy,
  CognitiveTherapy,
} from "@/components/pages/services/therapy-modalities";

interface ContidionsWeSupportTypeProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ContidionsWeSupportTypeProps) {
  const titles: Record<string, string> = {
    "art-therapy": "Art Therapy",
    "Acceptance-commitment-therapy": "Acceptance Commitment Therapy",
    "cognitive-behavioral-therapy": "Cognitive Behavioral Therapy",
  };

  const title = titles[params.slug] || "Young Sprouts Therapy";

  return {
    title: `Young Sprouts Therapy - ${title}`,
  };
}

export default async function ConditionsWeSupportPage({
  params: { slug },
}: ContidionsWeSupportTypeProps) {
  let content = null;

  switch (slug) {
    case "art-therapy":
      content = <ArtTherapy />;
      break;
    case "Acceptance-commitment-therapy":
      content = <AcceptanceTherapy />;
      break;
    case "cognitive-behavioral-therapy":
      content = <CognitiveTherapy />;
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
