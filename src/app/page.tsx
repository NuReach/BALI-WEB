import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import { TypeWritten } from "./components/ui/TypeWritten";
import { ParallaxScrollDemo } from "./components/ui/ParallaxScrollDemo";
import RoomOne from "./components/ui/RoomOne";
import RoomTwo from "./components/ui/RoomTwo";
import Footer from "./components/ui/Footer";
import { BentoGridDemo } from "./components/ui/BentoGridDemo";
import { Mail, MapPinIcon, Phone } from "lucide-react";
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
      <section className="p-3">
        <div className="font-bold text-lg md:text-3xl flex w-full justify-center items-center gap-3">
          <div className="w-full h-1 bg-black"></div>
          <p>Contact </p>
          <div className="w-full h-1 bg-black"></div>
        </div>
        <div className="columns-1 md:columns-2 gap-3 space-y-3 px-3 md:px-24 mt-6">
          <div className="border rounded-lg p-9 gap-3 flex flex-col items-center justify-center h-full md:h-48 "> 
              <h1 className="font-bold text-lg">Phone</h1>
              <Phone />
              <p>+85578441752</p>
          </div>
          <div className="border rounded-lg p-9 gap-3 flex flex-col items-center justify-center h-full md:h-48 "> 
              <h1 className="font-bold text-lg">Address</h1>
              <MapPinIcon />
              <p className="text-center">Cambodia, Kompot, Taneb Street, Krong Kampot 12342</p>
          </div>
        </div>
      </section>
      <section className=" px-3 md:px-28">
        <iframe  className="w-full h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.818965259291!2d104.14642157487991!3d10.593323089544587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31083751b9aa177d%3A0xbfb09980843da450!2sBali%20Villa%20Kampot!5e0!3m2!1sen!2skh!4v1717401876702!5m2!1sen!2skh"></iframe>
      </section>
      
      <Footer />
    </main>
  );
}
