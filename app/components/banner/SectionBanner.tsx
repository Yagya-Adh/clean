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
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-4 sm:py-10 md:py-7 lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-20 md:gap-10 lg:gap-40 text-center items-center sm:text-start sm:flex sm:justify-center">
        <h2 className="text-4xl sm:text-3xl lg:text-6xl font-normal text-center max-w-96 font-inter text-clean-black-10">
          {heading}
        </h2>
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h3 className="font-inter font-medium text-sm lg:text-base max-w-sm uppercase py-2 md:py-4 text-center text-clean-black-10 tracking-widest text-clean-black-10/70">
            {topic}
          </h3>
          <p className="font-inter font-normal text-base lg:text-xl max-w-60 md:max-w-xl text-center sm:text-start tracking-wider text-clean-black-10/70">
            {slug}
          </p>
        </div>
      </div>
    </section>
  ) : variant == "about" ? (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-10 py-4 sm:py-7 lg:py-20">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between text-center">
        <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
          <h2 className="font-inter font-normal tracking-wider text-lg lg:text-xl uppercase py-1 text-clean-black-10 text-center">
            {topic}
          </h2>
          <h3 className="text-5xl lg:text-7xl font-light capitalize font-inter text-clean-black-10 text-center">
            {heading}
          </h3>
        </div>
        <p className="font-inter font-normal text-lg lg:text-start max-w-60 sm:max-w-xl py-2.5 sm:py-4 lg:text-xl lg:font-light text-clean-black-10 text-center">
          {slug}
        </p>
      </div>
    </section>
  ) : null;

export default SectionBanner;
