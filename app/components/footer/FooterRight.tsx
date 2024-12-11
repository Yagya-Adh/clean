import Link from "next/link";
import footerRightData from "@/lib/data/footerRightSideData.json";

interface InnerItem {
  id: number;
  item: string;
  linkPath: string;
}
interface IfooterRightData {
  id: number;
  title: string;
  innerItem: InnerItem[];
}
const data: IfooterRightData[] = footerRightData;
const FooterRight = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 xl:gap-10 2xl:gap-56 text-center md:text-start md:place-items-start lg:py-0 py-4">
      {data?.slice(0, 3).map((list) => (
        <div
          className="flex flex-col justify-center w-full items-center py-2 2xl:py-0"
          key={list.id}
        >
          <h3 className="text-clean-black-10 text-lg lg:text-lg  2xl:text-2xl text-text-center font-medium sm:font-normal font-inter tracking-widest">
            {list.title}
          </h3>
          {list.innerItem?.map((inner) => (
            <Link href={inner.linkPath} key={inner.id}>
              <div className="text-center overflow-hidden h-10 sm:h-12 group md:my-2">
                <div className="tracking-widest translate-y-4 group-hover:-translate-y-16 ease-in-out transition-all duration-500 text-clean-black-10 text-base sm:text-xs lg:text-xl 2xl:text-2xl 2xl:font-normal 2xl:max-w-xl 2xl:tracking-wide font-normal font-inter h-10">
                  {inner.item}
                </div>
                <div className="tracking-widest translate-y-9 group-hover:-translate-y-6 ease-in-out transition-all duration-500 text-clean-black-10 text-base sm:text-xs lg:text-xl 2xl:text-2xl 2xl:font-normal 2xl:max-w-xl 2xl:tracking-wide font-normal font-inter h-10">
                  {inner.item}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
};

export default FooterRight;
