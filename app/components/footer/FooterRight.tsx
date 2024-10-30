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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-20  text-center md:text-start  md:items-start ">
      {data?.slice(0, 3).map((list) => (
        <article key={list.id}>
          <h1>{list.title}</h1>
          <div>
            {list.innerItem?.map((inner) => (
              <h2 className="" key={inner.id}>
                <div className="overflow-hidden group">
                  <div
                    className={`translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500`}
                  >
                    {inner.item}
                  </div>
                  <div
                    className={`translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500`}
                  >
                    {inner.item}
                  </div>
                </div>
              </h2>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default FooterRight;
