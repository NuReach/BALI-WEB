"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypeWritten() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "The",
    },
    {
      text: "Best",
    },
    {
        text: "Villa",
    },
    {
        text: "In",
    },
    {
    text: "Kompot",
    },
    {
      text: "Bali",
      className: "text-blue-500 font-bold ",
    },
    {
    text: "Villa",
    className: "text-blue-500 font-bold ",
    },
    {
    text: "Kompot.",
    className: "text-blue-500 font-bold ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffect words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
