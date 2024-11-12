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
    <header className="w-full flex items-center justify-between gap-4 py-1.5 max-w-[1440px] mx-auto ~px-5/16 ">
      <div>
        <Image
          src={Logo}
          className="w-[133px] "
          width={140}
          height={50}
          alt="logo"
        />
      </div>
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
                        <span>Parenting</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Child Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Teen Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Couples Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Group Therapy</span>
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
                        <span>ADHD Coaching & Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Anxiety Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Burnout Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Behavioral Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Depression Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Grief Counselling</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Trauma Therapy</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Autism Spectrum</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Clinical Supervision</span>
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
      <Button className="bg-primary text-white rounded-md p-2 !py-2.5">
        Book a Free Consult
      </Button>
    </header>
  );
}
