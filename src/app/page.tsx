import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import { TypeWritten } from "./components/ui/TypeWritten";
import { ParallaxScrollDemo } from "./components/ui/ParallaxScrollDemo";
import RoomOne from "./components/ui/RoomOne";
import RoomTwo from "./components/ui/RoomTwo";
import Footer from "./components/ui/Footer";
import { BentoGridDemo } from "./components/ui/BentoGridDemo";
export default function Home() {
  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <section className="">
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
        <div className="absolute w-full flex justify-center top-52 md:top-80 lg:w-[600px]  lg:top-[410px] lg:left-36  text-white">
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-xs px-6 md:text-lg">Booking your stay at our resort is as easy as a breeze</p>
            <div className="mt-3">
              <button className="p-3 px-6  bg-black rounded-lg hover:scale-105 transition text-xs md:text-sm shadow-sm shadow-white">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-3">
        <div className="font-bold text-3xl flex w-full justify-center items-center gap-3">
          <div className="w-full h-1 bg-black"></div>
          <p>Room</p>
          <div className="w-full h-1 bg-black"></div>
        </div>
        <div className="flex flex-col gap-3">
          <RoomOne />
          <RoomTwo />
        </div>
      </section>
      <section className="p-3">
        <div className="font-bold text-lg md:text-3xl flex w-full justify-center items-center gap-3">
          <div className="w-full h-1 bg-black"></div>
          <p>Photos</p>
          <div className="w-full h-1 bg-black"></div>
        </div>
        <ParallaxScrollDemo />
      </section>
      <section className="p-3">
        <div className="font-bold text-lg md:text-3xl flex w-full justify-center items-center gap-3">
          <div className="w-full h-1 bg-black"></div>
          <p>Activities</p>
          <div className="w-full h-1 bg-black"></div>
        </div>
        <div>
          <BentoGridDemo />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
