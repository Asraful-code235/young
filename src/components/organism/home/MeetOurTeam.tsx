import { TeamCarousel } from "@/components/molecules/home";
import { getShortTeamList } from "@/lib/client";

export async function MeetOurTeam() {
  const teams = await getShortTeamList();
  return (
    <section className="w-full relative overflow-hidden  pb-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1176"
        viewBox="0 0 1920 1176"
        fill="none"
        className="absolute -top-20 left-0 right-0 lg:bottom-0 -z-20"
      >
        <path
          d="M1078.5 148.5C447.3 -7.0999 95.1667 211.167 0 350.5L-1 1176C85 942.5 846.278 909.083 1078.5 997C1270 1069.5 1706.67 1139.17 1922 1135V0C1903.83 160.167 1605 278.29 1078.5 148.5Z"
          fill="url(#paint0_linear_407_5301)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_407_5301"
            x1="960.5"
            y1="0"
            x2="960.5"
            y2="1176"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0196AF" stop-opacity="0.1" />
            <stop offset="1" stop-color="#0196AF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col gap-7 max-w-[1440px] mx-auto w-full ~px-5/16 py-16 lg:py-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1.5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                d="M1.03125 6.58984H3.50586C3.58789 6.35286 3.736 6.1569 3.9502 6.00195C4.16439 5.847 4.40365 5.76953 4.66797 5.76953C4.93229 5.76953 5.17155 5.847 5.38574 6.00195C5.59994 6.1569 5.74805 6.35286 5.83008 6.58984H6.71875V4.94922H7.12891C7.23828 4.94922 7.33398 4.9082 7.41602 4.82617C7.49805 4.74414 7.53906 4.64844 7.53906 4.53906C7.53906 4.42969 7.49805 4.33398 7.41602 4.25195C7.33398 4.16992 7.23828 4.12891 7.12891 4.12891H6.71875C6.71875 4.10156 6.71875 3.88281 6.71875 3.47266C6.71875 3.07161 6.71875 2.63639 6.71875 2.16699C6.71875 1.69759 6.71875 1.2806 6.71875 0.916016C6.71875 0.551433 6.71875 0.396484 6.71875 0.451172C6.54557 0.323567 6.35417 0.216472 6.14453 0.129883C5.9349 0.043294 5.71615 0 5.48828 0C4.88672 0 4.3877 0.223308 3.99121 0.669922C3.59473 1.11654 3.41016 1.59961 3.4375 2.11914C2.97266 2.21029 2.58301 2.44499 2.26855 2.82324C1.9541 3.2015 1.79688 3.63672 1.79688 4.12891C1.79688 4.32031 1.82194 4.50488 1.87207 4.68262C1.9222 4.86035 1.9974 5.02669 2.09766 5.18164C1.82422 5.31836 1.59408 5.51204 1.40723 5.7627C1.22038 6.01335 1.09505 6.28906 1.03125 6.58984ZM7.53906 3.37695C7.77604 3.45898 7.97201 3.6071 8.12695 3.82129C8.2819 4.03548 8.35938 4.27474 8.35938 4.53906C8.35938 4.80339 8.2819 5.04264 8.12695 5.25684C7.97201 5.47103 7.77604 5.61914 7.53906 5.70117V6.58984H9.17969V7C9.17969 7.10938 9.2207 7.20508 9.30273 7.28711C9.38477 7.36914 9.48047 7.41016 9.58984 7.41016C9.69922 7.41016 9.79492 7.36914 9.87695 7.28711C9.95898 7.20508 10 7.10938 10 7V6.58984H13.2266C13.1628 6.28906 13.0374 6.01335 12.8506 5.7627C12.6637 5.51204 12.4336 5.31836 12.1602 5.18164C12.2604 5.02669 12.3356 4.86035 12.3857 4.68262C12.4359 4.50488 12.4609 4.32031 12.4609 4.12891C12.4609 3.63672 12.306 3.20605 11.9961 2.83691C11.6862 2.46777 11.2943 2.23307 10.8203 2.13281C10.8477 1.58594 10.6608 1.09375 10.2598 0.65625C9.85872 0.21875 9.36198 0 8.76953 0C8.54167 0 8.32292 0.043294 8.11328 0.129883C7.90365 0.216472 7.71224 0.323567 7.53906 0.451172C7.53906 0.496745 7.53906 0.683594 7.53906 1.01172C7.53906 1.33073 7.53906 1.67025 7.53906 2.03027C7.53906 2.3903 7.53906 2.71159 7.53906 2.99414C7.53906 3.27669 7.53906 3.4043 7.53906 3.37695ZM13.2266 7.41016H10.752C10.6699 7.64714 10.5218 7.8431 10.3076 7.99805C10.0934 8.15299 9.85417 8.23047 9.58984 8.23047C9.32552 8.23047 9.08626 8.15299 8.87207 7.99805C8.65788 7.8431 8.50977 7.64714 8.42773 7.41016H7.53906V9.05078H7.12891C7.01953 9.05078 6.92383 9.0918 6.8418 9.17383C6.75977 9.25586 6.71875 9.35156 6.71875 9.46094C6.71875 9.57031 6.75977 9.66602 6.8418 9.74805C6.92383 9.83008 7.01953 9.87109 7.12891 9.87109H7.53906V13.5488C7.71224 13.6764 7.90365 13.7835 8.11328 13.8701C8.32292 13.9567 8.54167 14 8.76953 14C9.37109 14 9.87012 13.7767 10.2666 13.3301C10.6631 12.8835 10.8477 12.4004 10.8203 11.8809C11.2852 11.7897 11.6748 11.555 11.9893 11.1768C12.3037 10.7985 12.4609 10.3633 12.4609 9.87109C12.4609 9.67969 12.4359 9.49512 12.3857 9.31738C12.3356 9.13965 12.2604 8.97331 12.1602 8.81836C12.4336 8.68164 12.6637 8.48796 12.8506 8.2373C13.0374 7.98665 13.1628 7.71094 13.2266 7.41016ZM6.71875 10.623C6.48177 10.541 6.28581 10.3929 6.13086 10.1787C5.97591 9.96452 5.89844 9.72526 5.89844 9.46094C5.89844 9.19661 5.97591 8.95736 6.13086 8.74316C6.28581 8.52897 6.48177 8.38086 6.71875 8.29883V7.41016H5.07812V7C5.07812 6.89062 5.03711 6.79492 4.95508 6.71289C4.87305 6.63086 4.77734 6.58984 4.66797 6.58984C4.55859 6.58984 4.46289 6.63086 4.38086 6.71289C4.29883 6.79492 4.25781 6.89062 4.25781 7V7.41016H1.03125C1.09505 7.71094 1.22038 7.98665 1.40723 8.2373C1.59408 8.48796 1.82422 8.68164 2.09766 8.81836C1.9974 8.97331 1.9222 9.13965 1.87207 9.31738C1.82194 9.49512 1.79688 9.67969 1.79688 9.87109C1.79688 10.3633 1.95182 10.7939 2.26172 11.1631C2.57161 11.5322 2.96354 11.7669 3.4375 11.8672C3.41016 12.4141 3.59701 12.9062 3.99805 13.3438C4.39909 13.7812 4.89583 14 5.48828 14C5.71615 14 5.9349 13.9567 6.14453 13.8701C6.35417 13.7835 6.54557 13.6764 6.71875 13.5488V10.623Z"
                fill="#B9905D"
              />
            </svg>
            <p className="text-[#8A969E] text-sm text-center">Our Team</p>
          </div>
          <h2 className="text-[#293B46] font-medium text-center ~text-3xl/4xl">
            Meet Our Team Behind the Best Counseling
          </h2>
          <p className="max-w-[648px] mx-auto w-full text-center leading-6 text-gray-500">
            We offer a variety of services to support your mindfulness journey.
            Choose what best suits your needs.
          </p>
        </div>
        <TeamCarousel teams={teams} />
      </div>
    </section>
  );
}
