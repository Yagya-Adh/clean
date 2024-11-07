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
    <section className="max-w-screen-2xl mx-auto px-10">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center sm:text-start">
        <h3 className="text-5xl font-light capitalize font-inter text-clean-black-10">
          {heading}
        </h3>
        <div className="flex flex-col">
          <h4 className="font-inter text-sm lg:text-base uppercase py-4 text-clean-black-10/60">
            {topic}
          </h4>
          <p className="font-inter text-sm min-w-xl text-clean-black-10/60">
            {slug}
          </p>
        </div>
      </article>
    </section>
  ) : variant == "about" ? (
    <section className="max-w-screen-2xl mx-auto px-10 py-20">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <h4 className="font-inter text-sm lg:text-base uppercase py-4 text-clean-black-10/60">
            {topic}
          </h4>
          <h3 className="text-7xl font-light capitalize font-inter text-clean-black-10">
            {heading}
          </h3>
        </div>
        <div>
          <p className="font-inter text-base min-w-xl max-w-sm lg:text-start py-4 text-clean-black-10/60">
            {slug}
          </p>
        </div>
      </article>
    </section>
  ) : null;

export default SectionBanner;
