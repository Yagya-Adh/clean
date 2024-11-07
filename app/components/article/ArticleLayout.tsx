import PillButton from "../button/PillButton";

interface IarticleLayOut {
  head: string;
  title: string;
  describe: string;
  variant: "article-without-button" | "article-with-button";
}

const ArticleLayout = ({ head, title, describe, variant }: IarticleLayOut) =>
  variant === "article-with-button" ? (
    <article className="text-center sm:text-start">
      <h6 className="uppercase text-sm py-1">{head}</h6>
      <h1 className="text-2xl md:text-3xl lg:text-5xl py-1 md:py-2">{title}</h1>
      <p className="font-sans text-xl lg:text-xl max-w-xl py-2  md:py-4">
        {describe}
      </p>
      <PillButton text="Explore" />
    </article>
  ) : variant === "article-without-button" ? (
    <article className="text-center sm:text-start">
      <h5 className="uppercase text-sm md:py-1">{head}</h5>
      <h2 className="text-2xl md:text-3xl lg:text-5xl py-1 md:py-2">{title}</h2>
      <p className="font-sans text-xl lg:text-xl max-w-xl py-2 md:py-4 ">
        {describe}
      </p>
    </article>
  ) : null;

export default ArticleLayout;
