"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Logo } from "@/assets";
import Text from "../atom/Text";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  return (
    <header className="w-full flex items-center justify-between gap-4 py-1.5 max-w-[1440px] mx-auto ~px-5/10 ">
      <Link href={"/"}>
        <Image
          src={Logo}
          className="w-[85px] lg:w-[133px] "
          width={140}
          height={50}
          alt="logo"
        />
      </Link>
      <nav className=" hidden lg:flex items-center gap-8">
        <Link href={"/"}>
          <Text type="p" size="medium" className="">
            Home
          </Text>
        </Link>
        <div>
          <ul>
            <DropdownMenu
              open={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
            >
              <DropdownMenuTrigger
                onMouseEnter={() => setIsOpen(true)}
                className="outlino-none border-none focus:outline-none"
              >
                <Text
                  type="p"
                  size="medium"
                  className="flex items-center gap-1.5"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z"
                      fill="#A79AA1"
                    />
                  </svg>
                </Text>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" absolute left-0 -ml-8">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Type of Therapy</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link
                          href={"/services/therapy-type/parenting-counselling"}
                        >
                          Parenting
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/services/therapy-type/child-therapy"}>
                          Child Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/services/therapy-type/teen-therapy"}>
                          Teen Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/services/therapy-type/couples-therapy"}>
                          Couples Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/services/therapy-type/group-therapy"}>
                          Group Therapy
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Conditions we supports</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link
                          href={"/services/conditions-we-support/adhd-therapy"}
                        >
                          ADHD Coaching & Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/anxiety-therapy"
                          }
                        >
                          Anxiety Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/burnout-therapy"
                          }
                        >
                          Burnout Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/behavioral-therapy"
                          }
                        >
                          Behavioral Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/depression-therapy"
                          }
                        >
                          Depression Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={"/services/conditions-we-support/grief-therapy"}
                        >
                          Grief Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/trauma-therapy"
                          }
                        >
                          Trauma Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/autism-therapy"
                          }
                        >
                          Autism Therapy
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href={
                            "/services/conditions-we-support/clinical-supervision"
                          }
                        >
                          Clinical Supervision
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Therapy modalities</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <span>Art Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Anxiety Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Acceptance and Commitment Therapy (ACT)</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Cognitive Behavioral Therapy (CBT)</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Dialectical Behavioral Therapy (DBT)</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Emotion Focused Therapy (EFT)</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Narrative Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Play Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Parent-Child Interaction Therapy (PCIT) </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Solution-Focused Therapy (SFT) </span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem className="cursor-pointer">
                  Approach & Specialties
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
        <div>
          <ul>
            <DropdownMenu
              open={isOpenAbout}
              onOpenChange={(open) => setIsOpenAbout(open)}
            >
              <DropdownMenuTrigger
                onMouseEnter={() => setIsOpenAbout(true)}
                className="outlino-none border-none focus:outline-none"
              >
                <Text
                  type="p"
                  size="medium"
                  className="flex items-center gap-1.5"
                >
                  About us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z"
                      fill="#A79AA1"
                    />
                  </svg>
                </Text>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" absolute left-0 -ml-8">
                <DropdownMenuItem className="cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Fees
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Faq
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
        <Link href={"/"}>
          <Text type="p" size="medium" className="">
            Contact Us
          </Text>
        </Link>
        <Link href={"/"}>
          <Text type="p" size="medium" className="">
            Blog
          </Text>
        </Link>
      </nav>
      <Button className="bg-primary text-white rounded-md p-2 !py-2.5 ~text-sm/base">
        Book a Free Consult
      </Button>
    </header>
  );
}
