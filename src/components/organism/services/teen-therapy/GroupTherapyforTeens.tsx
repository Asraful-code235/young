import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function GroupTherapyforTeens() {
  return (
    <article className="flex flex-col gap-4 max-lg:mt-5">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Group Therapy for Teens
        </h2>
        <p className="leading-6">
          At Young Sprouts Therapy, we offer group therapy sessions that allow
          teens to connect with others who are facing similar challenges. In a
          supportive group setting, teens can share their experiences, learn
          from their peers, and develop new coping skills. Group therapy is
          especially helpful for teens dealing with social anxiety, peer
          pressure, or low self-esteem.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Content</p>
        </div>
        <p className="leading-6">
          Group therapy sessions are guided by a licensed therapist who fosters
          a safe and open environment. Teens gain valuable insights from others
          in the group while developing stronger communication and emotional
          regulation skills. These sessions help build social confidence and
          resilience in a collaborative setting.
        </p>
        <h2 className="font-medium ~text-2xl/3xl text-primary">
          Workshops for Parents
        </h2>
        <p className="leading-6">
          We also offer workshops for parents designed to support you in
          understanding your teen&apos;s emotional and behavioural challenges.
          These workshops provide parents with practical tools to help their
          teens navigate issues like anxiety, academic stress, and social
          pressure.
        </p>
        <div className="flex items-center gap-2.5">
          <Image
            src={"/svg/magicicon.svg"}
            alt="icon"
            width={48}
            height={45}
            className="w-3 h-3 aspect-auto"
          />
          <p>Content</p>
        </div>
        <ul className=" list-disc">
          <li className="ml-5 lg:ml-4">
            Our parent workshops focus on topics such as effective communication
            strategies, supporting your teen through emotional stress, and
            fostering resilience at home. By attending these workshops, parents
            gain insights into how to reinforce the coping strategies their
            teens learn in therapy.
          </li>
        </ul>
        <p className="mt-4">
          Stay tuned for updates on upcoming workshops or contact us to learn
          more about our parent education programs.
        </p>
        <Button asChild className="sm:max-w-[270px] w-full py-3">
          <Link
            href={"https://calendly.com/youngsproutstherapy/15-minute-consult"}
            target="_blank"
          >
            Book a Free Consult
          </Link>
        </Button>
      </div>
    </article>
  );
}
