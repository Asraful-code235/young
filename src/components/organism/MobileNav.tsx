"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12H15M3 6H21M3 18H21"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full bg-primary overflow-y-scroll"
      >
        <SheetHeader>
          <SheetDescription className="text-white mt-20">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Type of Therapy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 items-start [&[data-state=close]]:p-2 pl-4">
                  <Link href="/">Parenting</Link>
                  <Link href="/">Child Therapy</Link>
                  <Link href="/">Teen Therapy</Link>
                  <Link href="/">Couples Therapy</Link>
                  <Link href="/">Group Therapy</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Conditions we supports</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 items-start [&[data-state=close]]:p-2 pl-4">
                  <Link href="/">ADHD Coaching & Therapy</Link>
                  <Link href="/">Anxiety Therapy</Link>
                  <Link href="/">Burnout Therapy</Link>
                  <Link href="/">Behavioral Therapy</Link>
                  <Link href="/">Depression Therapy</Link>
                  <Link href="/">Grief Counselling</Link>
                  <Link href="/">Trauma Therapy</Link>
                  <Link href="/">Autism Spectrum</Link>
                  <Link href="/">Clinical Supervision</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="[&[data-state=open]]:shadow-none [&[data-state=open]]:rounded-none border-none"
              >
                <AccordionTrigger>Therapy modalities</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-7 items-start [&[data-state=close]]:p-2 pl-4">
                  <Link href="/">Art Therapy</Link>
                  <Link href="/">Acceptance and Commitment Therapy (ACT)</Link>
                  <Link href="/">Cognitive Behavioral Therapy (CBT)</Link>
                  <Link href="/">Dialectical Behavioral Therapy (DBT)</Link>
                  <Link href="/">Depression Therapy</Link>
                  <Link href="/">Emotion Focused Therapy (EFT)</Link>
                  <Link href="/">Narrative Therapy</Link>
                  <Link href="/">Play Therapy</Link>
                  <Link href="/">Parent-Child Interaction Therapy (PCIT) </Link>
                  <Link href="/">Solution-Focused Therapy (SFT) </Link>
                  <Link href="/">Approach & Specialties </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
