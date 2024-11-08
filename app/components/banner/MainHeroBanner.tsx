import Image from "next/image";
import React from "react";

const MainHeroBanner = () => {
  return (
    <section className="max-w-screen-3xl mx-auto px-6 md:px-10 py-10">
      <div className="rounded-[64px] bg-hero-main bg-no-repeat bg-cover p-44 sm:p-52 md:px-72 md:py-52 lg:p-96 lg:py-80 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-center font-inter z-10 backdrop:blur-0 rounded-[42px] shadow shadow-white p-8 lg:p-10 bg-transparent backdrop-blur-lg">
          <div className="flex flex-row items-center mb-4">
            <Image
              src="/assets/icon/spray.svg"
              alt="Cleaning spray icon"
              width={50}
              height={50}
              className="object-center object-cover rounded-full"
            />
            <h4 className="text-lg md:text-xl ml-4 uppercase text-clean-black-10">
              Go-to Cleaners
            </h4>
          </div>
          <h1 className="font-inter font-light text-4xl md:text-6xl lg:text-8xl py-6 md:py-50 uppercase animate-flipTopDownIn">
            Expert <br />
            <span className="font-thin italic ">Cleaning</span>
          </h1>
          <p className="text-center text-xl md:text-lg lg:text-xl text-clean-black-10 font-inter font-light max-w-md md:max-w-xl animate-flipTopDownIn">
            Creating cleaner, healthier spaces so you can focus on what matters
            most and relax on the weekends.
          </p>
          <button className="bg-white rounded-l-full rounded-r-full px-20 my-5">
            <div className="overflow-hidden group">
              <div className="translate-y-3 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500 font-inter font-light uppercase text-clean-black-10 text-xl">
                Explore
              </div>
              <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500 font-inter font-light uppercase text-clean-black-10 text-xl">
                Explore
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHeroBanner;
