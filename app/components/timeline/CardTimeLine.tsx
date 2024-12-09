import TimeLinePopulateCard from "./TimeLinePopulateCard";
import ScrollTimeLineArticle from "./ScrollTimeLineArticle";

const CardTimeLine = () => {
  return (
    <section className="max-w-screen-3xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 sm:px-32 lg:px-0 lg:py-20 items-start relative w-full">
        <div className="lg:sticky top-0 px-10">
          <ScrollTimeLineArticle />
        </div>
        <div>
          <TimeLinePopulateCard />
        </div>
      </div>
    </section>
  );
};
export default CardTimeLine;
