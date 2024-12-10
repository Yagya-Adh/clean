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
    <section className="max-w-screen-5xl mx-auto px-4 py-4 pb-10 2xl:pb-48">
      <div className="grid grid-cols-1 gap-10 sm:flex sm:flex-wrap sm:justify-center sm:items-center xl:flex-nowrap">
        {data?.slice(0, 4).map((list) => (
          <div
            className={`
            flex 
            flex-col 
            justify-center
            sm:justify-center
            sm:items-start
            items-center
            rounded-2xl
            md:px-10  
            px-10          
            py-10              
            md:py-20 
            lg:py-14 
            2xl:py-20
            2xl:px-14        
            shadow-sm 
            animate-fadeInUp           
            ${list.color ? list.color : ""}
            `}
            key={list.id}
          >
            <Image
              src={list.logo}
              width={70}
              height={70}
              alt="clean_card_group "
              className="object-center object-cover 2xl:h-28 2xl:w-28"
            />
            <h4 className="font-normal 2xl:text-8xl xl:text-font-inter uppercase text-2xl lg:text-5xl text-clean-black-10 text-center py-7">
              {list.title}
            </h4>
            <p className="text-clean-black-10 2xl:text-3xl 2xl:max-w-screen-xl max-w-52 xl:max-w-sm text-center text-sm sm:text-start lg:text-xl  font-normal font-inter tracking-wider uppercase">
              {list.describe}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CleanCardGroup;
