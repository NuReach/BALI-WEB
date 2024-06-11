import { cn } from "@/utils/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { Bike } from "lucide-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full lg:px-32 mt-3">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Kayaking at Our Resort",
    description: "Experience the tranquility of gliding along the serene waters of our resort's private lagoon in a sleek kayak, surrounded by breathtaking natural beauty.",
    header: <Image alt="kayak" width={300} height={300} src={'/kayak.jpg'} className="rounded-lg w-full overflow-hidden object-cover" />,
  },
  {
    title: "Experience Fishing at Our Resort",
    description: "Enjoy a day of serene fishing in our resort's private lake, surrounded by stunning natural scenery.",
    header: <Image alt="fishing" width={300} height={300} src={'/fishing.jpg'} className="rounded-lg overflow-hidden object-cover" />,
  },
  {
    title: "Convenience at Your Fingertips: Explore Our Resort's Minimart",
    description: "Stocked with all your essentials and a variety of indulgences, our resort's minimart ensures convenience and comfort throughout your stay.",
    header: <Image alt="minimart" width={300} height={300} src={'/minimart.jpg'} className="rounded-lg w-full overflow-hidden object-cover" />,
  },
  {
    title: "Discover Archery at Our Resort",
    description:
      "Channel your inner marksman and experience the thrill of precision with our resort's exhilarating archery activities, set against the backdrop of breathtaking natural surroundings",
    header: <Image alt="arrow" width={3000} height={3000} src={'/arrow.jpg'} className="rounded-lg w-full overflow-hidden object-cover" />,
  },
  {
    title: "Motorcycle Experiences at Our Resort",
    description: "Embark on thrilling motorcycle journeys through scenic routes and rugged terrain, exploring the wonders of our resort's surrounding landscapes with adrenaline-pumping excitement.",
    header: <Image alt="motor" width={300} height={300} src={'/motor.jpg'} className="rounded-lg w-full overflow-hidden object-cover" />,
  },
];
