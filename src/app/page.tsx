import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import { TypeWritten } from "./components/ui/TypeWritten";
import { ParallaxScrollDemo } from "./components/ui/ParallaxScrollDemo";
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
          width={1500}
          height={1000}
          priority // Prioritize loading for critical backgrounds
          objectPosition="center"
          className="dark-background z-0 w-full h-96 md:h-[690px] object-cover "
          />
        <div className="absolute top-32 px-6 md:top-60 lg:w-[600px] lg:left-36 w-full">
          <TypeWritten />
        </div>
      </div>
      <div className="p-9">
        <div className="font-bold text-3xl flex w-full justify-center items-center gap-3">
          <div className="w-full h-1 bg-black"></div>
          <p>Photo</p>
          <div className="w-full h-1 bg-black"></div>
        </div>
        <ParallaxScrollDemo />
      </div>
    </main>
  );
}
