import Image from "next/image";
import cleanerCardData from "@/lib/data/cleanerCardGroupData.json";

interface IcleanerCardData {
  id: number;
  title: string;
  describe: string;
  logo: string;
  color: string;
}
const data: IcleanerCardData[] = cleanerCardData;

const CleanCardGroup = () => {
  return (
    <section className="max-w-screen-sm md:max-w-screen-2xl  md:max-w-screen-3xl mx-auto px-10  md:px-4 lg:px-4 py-20">
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        items-center
        justify-center        
        gap-10
        "
      >
        {data?.slice(0, 4).map((list) => (
          <div
            className={`
                rounded-2xl
                 flex 
                 flex-col 
                 justify-center
                 py-20
                 px-10
                 md:px-4
                 h-full
                 shadow-sm 
                animate-fadeInUp
                 ${list.color ? list.color : ""}
                 `}
            key={list.id}
          >
            <Image
              src={list.logo}
              width={50}
              height={50}
              alt="clean_card_group"
            />

            <h4 className="font-normal font-inter uppercase text-5xl text-clean-black-10 py-7">
              {list.title}
            </h4>
            <p className="text-clean-black-10 max-w-sm text-xl font-light font-inter">
              {list.describe}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleanCardGroup;
