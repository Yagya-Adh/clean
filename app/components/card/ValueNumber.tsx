import valueData from "@/lib/data/valueData.json";

interface IvalueData {
  id: number;
  valueAmount: string;
  hasSup: string;
  valueType: string;
}

const data: IvalueData[] = valueData;

const ValueNumber = () => {
  return (
    <section className="max-w-screen-4xl mx-auto px-4 py-10 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {data?.slice(0, 3).map((list) => (
          <div
            className="text-center text-clean-black-10 py-5 2xl:py-20 animate-fadeflipLeftIn"
            key={list.id}
          >
            <h3 className="font-inter text-7xl py-2 sm:text-6xl md:text-6xl xl:text-9xl 2xl:text-[192px] font-normal">
              {list.valueAmount}
              <sup className="text-6xl md:text-4xl xl:text-7xl 2xl:text-8xl font-bold">
                {list.hasSup !== "" ? list.hasSup : ""}
              </sup>
            </h3>
            <h4 className="font-inter text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-normal">
              {list.valueType}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueNumber;
