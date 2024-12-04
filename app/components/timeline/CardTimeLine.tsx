import TimeLinePopulateCard from "./TimeLinePopulateCard";
import ScrollTimeLineArticle from "./ScrollTimeLineArticle";

const CardTimeLine = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-10 lg:px-40  lg:py-20 items-start relative ">
        <aside className="lg:sticky top-0 px-10">
          <ScrollTimeLineArticle />
        </aside>
        <aside>
          <TimeLinePopulateCard />
        </aside>
      </div>
    </section>
  );
};
export default CardTimeLine;
