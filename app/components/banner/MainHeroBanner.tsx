import { SprayIcon } from "@/app/icons";

const MainHeroBanner = () => {
  return (
    <section className="max-w-screen-5xl mx-auto px-4 md:px-10 lg:px-20 py-4 h-full">
      <div className="rounded-4xl bg-hero-main bg-no-repeat bg-cover p-6 lg:py-80 max-w-full flex flex-col justify-center">
        <div className="relative lg:-top-64 left-0 flex flex-col justify-center items-center text-center font-inter z-10 border border-white/15 backdrop:blur-3xl rounded-3xl p-10 md:p-4 2xl:py-16 md:w-1/2 mx-auto bg-white/15 backdrop-blur-2xl">
          <div className="flex flex-row justify-center items-center mt-4 w-full">
            <SprayIcon className="w-8 h-10" />
            <h3 className="text-sm lg:text-xl xl:text-2xl text-clean-black-10 ml-2 uppercase tracking-widest font-inter font-normal">
              Go-to Cleaners
            </h3>
          </div>
          <h1 className="font-inter font-light text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl py-4 uppercase animate-flipTopDownIn">
            Expert <br />
            <span className="font-thin italic">Cleaning</span>
          </h1>
          <p className="text-center text-base md:text-xl xl:text-3xl xl:max-w-screen-md text-clean-black-10 font-inter font-light max-w-md md:max-w-xl animate-flipTopDownIn">
            Creating cleaner, healthier spaces so you can focus on what matters
            most and relax on the weekends.
          </p>
          <button className="bg-white group rounded-full px-10 lg:px-20 my-5 hover:bg-clean-green-10 ease-in-out transition-all duration-500">
            <div className="overflow-hidden">
              <div className="translate-y-3 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500 font-inter font-normal tracking-wider uppercase text-clean-black-10 text-base xl:text-2xl">
                Explore
              </div>
              <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500 font-inter font-normal tracking-wider uppercase text-clean-black-10 text-base xl:text-2xl">
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
