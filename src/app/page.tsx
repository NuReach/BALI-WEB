import Image from "next/image";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div className="">
       <Image
          src="/cover.jpg" // Replace with your image path
          alt="Background Image" // Provide an alt text description
          objectFit="cover" // Adjust how the image fits (cover, contain, etc.)
          width={1000}
          height={1500}
          priority // Prioritize loading for critical backgrounds
          objectPosition="center"
          className="dark-background z-0 w-full h-96 md:h-[660px] object-cover mb-36 "
          />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolore non. Error, odit voluptatem inventore fuga quos earum ullam excepturi animi quia aut ipsa maxime! Eveniet commodi quis debitis sint.
      </div>
    </main>
  );
}
