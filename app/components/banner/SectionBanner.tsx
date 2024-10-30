interface IsectionBannerProps {
  heading: string;
  topic: string;
  slug: string;
}

const SectionBanner = ({ heading, topic, slug }: IsectionBannerProps) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-10">
      <article className="flex flex-col justify-center md:flex-row md:items-center md:justify-between text-center sm:text-start">
        <h1 className="text-6xl capitalize">{heading}</h1>
        <div className="flex flex-col">
          <h4 className="font-mono text-2xl uppercase py-4">{topic}</h4>
          <p className="font-mono text-xl min-w-xl">{slug}</p>
        </div>
      </article>
    </section>
  );
};

export default SectionBanner;
