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
    <section className="max-w-screen-xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center py-4 md:py-10">
        {data?.slice(0, 3).map((list) => (
          <div
            className="text-center text-clean-black-10 py-5 animate-fadeflipLeftIn"
            key={list.id}
          >
            <h3 className="font-inter text-7xl lg:text-9xl font-normal">
              {list.valueAmount}
              <sup className="lg:text-7xl font-bold">
                {list.hasSup !== "" ? list.hasSup : ""}
              </sup>
            </h3>
            <h4 className="font-inter text-xl font-normal">{list.valueType}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueNumber;
