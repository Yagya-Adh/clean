interface IsectionBannerProps {
  heading: string;
  topic: string;
  slug: string;
  variant: "about" | "blog";
}

const SectionBanner = ({
  heading,
  topic,
  slug,
  variant,
}: IsectionBannerProps) =>
  variant == "blog" ? (
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 py-4 sm:py-10 md:py-7 lg:py-10 xl:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20 md:gap-10 lg:gap-40 text-center items-center sm:text-start lg:flex sm:justify-between">
        <h2 className="text-4xl sm:text-3xl lg:text-7xl font-light text-center max-w-xl font-inter text-clean-black-10">
          {heading}
        </h2>
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h3 className="font-inter font-medium text-sm lg:text-base xl:text-xl 2xl:text-4xl xl:max-w-lg max-w-sm uppercase py-2 md:py-4 text-center text-clean-black-10 tracking-widest text-clean-black-10/70">
            {topic}
          </h3>
          <p className="font-inter font-normal text-base lg:text-xl xl:text-2xl 2xl:text-3xl xl:max-w-screen-xl max-w-60 md:max-w-xl text-center sm:text-start tracking-wider text-clean-black-10/70">
            {slug}
          </p>
        </div>
      </div>
    </section>
  ) : variant == "about" ? (
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 py-4 sm:py-7 lg:py-20 hidden sm:block">
      <div className="flex flex-col justify-center items-start lg:flex-row lg:justify-between text-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h2 className="font-inter font-normal 2xl:text-4xl 2xl:text-normal tracking-wider text-lg lg:text-xl uppercase py-1 text-clean-black-10 text-center">
            {topic}
          </h2>
          <h3 className="text-5xl lg:text-7xl 2xl:text-8xl font-light capitalize font-inter text-clean-black-10 text-center">
            {heading}
          </h3>
        </div>
        <p className="font-inter font-normal text-lg 2xl:text-4xl 2xl:font-normal 2xl:max-w-screen-lg lg:text-start max-w-60 sm:max-w-xl py-2.5 sm:py-4 lg:text-xl lg:font-light text-clean-black-10 text-center">
          {slug}
        </p>
      </div>
    </section>
  ) : null;

export default SectionBanner;
