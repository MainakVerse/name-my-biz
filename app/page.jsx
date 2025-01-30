import Search from "@/components/Search";
import { Filter, Globe, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:h-screen md:w-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-1"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="md:px-0 px-5">
          <h1 className="text-5xl text-white capitalize font-semibold text-center mb-3">Name My Biz</h1>
          <p className="text-white text-center text-xl">Want to start a business? Find unique names and a <u>.com</u> domain</p>

          <Search />
        </div>

        <div className="md:flex justify-between gap-10 md:px-56 px-5 mt-28">
          <div className="md:mb-0 mb-10 p-4 bg-primary rounded-md">
            <Lightbulb className="text-white mb-3" size={30} />
            <h4 className="text-white text-xl font-semibold">Generate Idea</h4>
            <p className="text-white">
              Want to have a catchy business name that will stun your customers? Don't put pressure on your head and let our AI show the creativity. Get the coolest business names for yourself.
            </p>
          </div>
          <div className="md:mb-0 mb-10 p-4 bg-primary rounded-md">
            <Filter className="text-white mb-3" size={30} />
            <h4 className="text-white text-xl font-semibold">Filter Result</h4>
            <p className="text-white">
              Once you decide your business sector or the product you want to sell, we will suggest you a bunch of creative names. Now, no need to be overwhelmed with so much. Just filter them as per your need.
            </p>
          </div>
          <div className="md:mb-0 mb-10 p-4 bg-primary rounded-md">
            <Globe className="text-white mb-3" size={30} />
            <h4 className="text-white text-xl font-semibold">Get the Domain</h4>
            <p className="text-white">
              Done with choosing a creative badass name for your business? Now, check if there is a suitable domain. The equation is simple, all are rushing for a .com one. Don't panic. We will filter that too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}