import { SprayIcon } from "@/app/icons";

const MainHeroBanner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-10">
      <div className="rounded-4xl bg-hero-main bg-no-repeat bg-cover p-10 sm:p-52 md:px-72 md:py-52 lg:p-96 lg:py-85 w-full flex flex-col justify-center">
        <div className=" relative lg:-top-72 left-0 flex flex-col justify-center items-center text-center font-inter z-10 backdrop:blur-0 rounded-3xl p-10 lg:p-10 bg-transparent backdrop-blur-lg">
          <div className="flex flex-row justify-center items-center mb-4 w-full">
            <SprayIcon className="w-8 h-10" />
            <h4 className="text-base md:text-xl text-clean-black-10 ml-2 uppercase font-inter font-normal">
              Go-to Cleaners
            </h4>
          </div>
          <h1 className="font-inter font-light text-4xl md:text-6xl lg:text-8xl py-6 md:py-50 uppercase animate-flipTopDownIn">
            Expert <br />
            <span className="font-thin italic ">Cleaning</span>
          </h1>
          <p className="text-center text-base md:text-xl lg:text-xl text-clean-black-10 font-inter font-light max-w-md md:max-w-xl animate-flipTopDownIn">
            Creating cleaner, healthier spaces so you can focus on what matters
            most and relax on the weekends.
          </p>
          <button className="bg-white rounded-l-full rounded-r-full px-10 lg:px-20 my-5">
            <div className="overflow-hidden group">
              <div className="translate-y-3 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500 font-inter font-light uppercase text-clean-black-10 text-base">
                Explore
              </div>
              <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500 font-inter font-light uppercase text-clean-black-10 text-base">
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
