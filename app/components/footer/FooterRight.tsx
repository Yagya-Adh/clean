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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-start md:place-items-start py-4">
      {data?.slice(0, 3).map((list) => (
        <div
          className="flex flex-col justify-center w-full items-center"
          key={list.id}
        >
          <h3 className="text-clean-black-10 text-sm sm:text-lg text-center font-semibold sm:font-medium font-inter">
            {list.title}
          </h3>
          {list.innerItem?.map((inner) => (
            <Link href={inner.linkPath} key={inner.id}>
              <div className="text-center overflow-hidden h-10 group md:my-2">
                <div className="translate-y-4 group-hover:-translate-y-16 ease-in-out transition-all duration-500 text-clean-black-10 text-lg font-normal font-inter h-10">
                  {inner.item}
                </div>
                <div className="translate-y-9 group-hover:-translate-y-6 ease-in-out transition-all duration-500 text-clean-black-10 text-lg font-normal font-inter h-10">
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
