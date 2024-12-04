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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-16 text-center md:text-start md:place-items-start py-10 px-4 lg:px-10 w-full">
      {data?.slice(0, 3).map((list) => (
        <div key={list.id}>
          <h3 className="text-clean-black-10 text-lg text-center font-normal font-inter md:mb-4">
            {list.title}
          </h3>
          {list.innerItem?.map((inner) => (
            <Link href={inner.linkPath} key={inner.id}>
              <div className="text-center overflow-hidden group">
                <div className="translate-y-4 group-hover:-translate-y-16 ease-in-out transition-all duration-500 text-clean-black-10 text-lg font-normal font-inter p-0  ">
                  {inner.item}
                </div>
                <div className="translate-y-10 group-hover:-translate-y-4 ease-in-out transition-all duration-500 text-clean-black-10 text-lg font-normal font-inter p-0  ">
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
