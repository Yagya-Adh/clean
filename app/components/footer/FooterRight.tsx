import footerRightData from "@/footerRightSideData.json";

interface InnerItem {
  id: number;
  item: string;
}
interface IfooterRightData {
  id: number;
  title: string;
  innerItem: InnerItem[];
}
const data: IfooterRightData[] = footerRightData;
const FooterRight = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-20 text-center md:text-start  md:items-start py-10">
      {data?.slice(0, 3).map((list) => (
        <div key={list.id}>
          <h3 className="text-clean-black-10 text-xl text-center font-normal font-inter mb-1">
            {list.title}
          </h3>
          {list.innerItem?.map((inner) => (
            <h2 className="text-center overflow-hidden group " key={inner.id}>
              <div className="translate-y-4 group-hover:-translate-y-16 ease-in-out transition-all duration-300  text-clean-black-10 text-xl font-normal font-inter p-0 my-1">
                {inner.item}
              </div>
              <div className="translate-y-10 group-hover:-translate-y-4 ease-in-out transition-all duration-300  text-clean-black-10 text-xl font-normal font-inter p-0 my-1">
                {inner.item}
              </div>
            </h2>
          ))}
        </div>
      ))}
    </section>
  );
};

export default FooterRight;
