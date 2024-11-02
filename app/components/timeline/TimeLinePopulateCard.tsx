import serviceTimeLineData from "@/cleanServiceTimeLineData.json";

interface IserviceTimeLineData {
  id: number;
  cleanType: string;
  CleaningTitle: string;
  cleanDescribe: string;
}
const data: IserviceTimeLineData[] = serviceTimeLineData;
const TimeLinePopulateCard = () => {
  return (
    <div className="h-full px-10">
      {data?.map((list) => (
        <article
          key={list.id}
          className="
          flex flex-col
          justify-center
          rounded-[62px]         
          text-clean-black-10
          bg-white/20
           shadow-xl 
           font-sans
           px-20 py-10 my-4 
           "
        >
          <h3 className="uppercase text-xl">{list.cleanType}</h3>
          <h4 className="text-5xl  py-2">{list.CleaningTitle}</h4>
          <p className="text-xl max-w-xl">{list.cleanDescribe}</p>
        </article>
      ))}
    </div>
  );
};

export default TimeLinePopulateCard;
