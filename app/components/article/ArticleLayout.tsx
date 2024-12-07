import PillButton from "../button/PillButton";

interface IarticleLayOut {
  head: string;
  title: string;
  describe: string;
  variant: "article-without-button" | "article-with-button";
}

const ArticleLayout = ({ head, title, describe, variant }: IarticleLayOut) =>
  variant === "article-with-button" ? (
    <div className="text-center text-clean-black-10 sm:text-start">
      <h6 className="uppercase text-sm py-1 font-inter font-normal">{head}</h6>
      <h1 className="text-2xl md:text-3xl lg:text-5xl py-1 md:py-2 font-inter font-normal">
        {title}
      </h1>
      <p className="text-xl lg:text-xl max-w-xl py-2 md:py-4 font-inter font-normal">
        {describe}
      </p>
      <PillButton text="Explore" />
    </div>
  ) : variant === "article-without-button" ? (
    <div className="text-center sm:text-start text-clean-black-10 font-inter">
      <h5 className="uppercase text-base md:py-1 font-inter font-normal">
        {head}
      </h5>
      <h2 className="text-2xl md:text-3xl lg:text-5xl py-1 md:py-2 font-inter font-normal">
        {title}
      </h2>
      <p className="text-xl lg:text-xl max-w-xl py-2 md:py-4 font-inter font-light">
        {describe}
      </p>
    </div>
  ) : null;

export default ArticleLayout;
