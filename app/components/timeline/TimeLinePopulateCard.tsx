import ArticleLayout from "../article/ArticleLayout";
import serviceTimeLineData from "@/lib/data/cleanServiceTimeLineData.json";
interface IserviceTimeLineData {
  id: number;
  cleanType: string;
  CleaningTitle: string;
  cleanDescribe: string;
}
const data: IserviceTimeLineData[] = serviceTimeLineData;
const TimeLinePopulateCard = () => {
  return (
    <>
      {data?.map((list) => (
        <div
          key={list.id}
          className="bg-white/40 rounded-3xl px-10 py-4 my-4 flex-col justify-center flex items-center"
        >
          <ArticleLayout
            head={list.cleanType}
            title={list.CleaningTitle}
            describe={list.cleanDescribe}
            variant="article-without-button"
          />
        </div>
      ))}
    </>
  );
};

export default TimeLinePopulateCard;
