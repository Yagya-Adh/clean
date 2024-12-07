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
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center sm:text-start">
        <h2 className="text-6xl font-light capitalize font-inter text-clean-black-10">
          {heading}
        </h2>
        <div className="flex flex-col">
          <h3 className="font-inter font-normal text-sm lg:text-base uppercase py-4 text-clean-black-10">
            {topic}
          </h3>
          <p className="font-inter  font-light text-base lg:text-xl min-w-xl text-clean-black-10">
            {slug}
          </p>
        </div>
      </div>
    </section>
  ) : variant == "about" ? (
    <section className="max-w-screen-xl mx-auto px-4 lg:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="flex flex-col justify-center text-center md:items-start place-items-center md:text-start ">
          <h2 className="font-inter font-light text-xl lg:text-xl uppercase py-4 text-clean-black-10">
            {topic}
          </h2>
          <h3 className="text-5xl lg:text-7xl font-light capitalize font-inter text-clean-black-10">
            {heading}
          </h3>
        </div>
        <p className="font-inter font-light text-lg lg:text-start text-center min-w-sm max-w-lg py-4 text-clean-black-10">
          {slug}
        </p>
      </div>
    </section>
  ) : null;

export default SectionBanner;
