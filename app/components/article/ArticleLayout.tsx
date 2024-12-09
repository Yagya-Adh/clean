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
      <h3 className="uppercase text-sm py-1 font-inter font-medium">{head}</h3>
      <h2 className="text-2xl sm:text-4xl md:text-6xl py-1 md:py-2 font-inter font-light">
        {title}
      </h2>
      <p className="text-lg md:text-xl max-w-xl md:py-4 font-inter font-normal tracking-wider">
        {describe}
      </p>
      <PillButton text="Explore" />
    </div>
  ) : variant === "article-without-button" ? (
    <div className="text-clean-black-10 font-inter px-4 py-4">
      <h3 className="uppercase text-base md:py-1 lg:text-lg font-inter font-normal tracking-wider md:text-start text-center">
        {head}
      </h3>
      <h2 className="text-xl md:text-3xl lg:text-5xl lg:font-light md:font-normal py-2.5 font-inter font-medium md:text-start text-center">
        {title}
      </h2>
      <p className="text-lg  md:text-2xl lg:text-xl lg:font-light lg:max-w-screen-sm max-w-60 md:max-w-sm md:text-start text-center font-inter font-normal">
        {describe}
      </p>
    </div>
  ) : null;

export default ArticleLayout;
