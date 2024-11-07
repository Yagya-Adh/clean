import serviceTimeLineData from "@/cleanServiceTimeLineData.json";
import ArticleLayout from "../article/ArticleLayout";

interface IserviceTimeLineData {
  id: number;
  cleanType: string;
  CleaningTitle: string;
  cleanDescribe: string;
}
const data: IserviceTimeLineData[] = serviceTimeLineData;
const TimeLinePopulateCard = () => {
  return (
    <div className="px-4 py-4">
      {data?.map((list) => (
        <div
          key={list.id}
          className="bg-white/40 rounded-[62px] py-10 px-10 my-4"
        >
          <ArticleLayout
            head={list.cleanType}
            title={list.CleaningTitle}
            describe={list.cleanDescribe}
            variant="article-without-button"
          />
        </div>
      ))}
    </div>
  );
};

export default TimeLinePopulateCard;
