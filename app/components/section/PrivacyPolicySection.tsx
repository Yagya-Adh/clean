import privacyPolicyData from "@/lib/data/privacyPolicyData.json";

interface IPrivacyInnerPoint {
  id: number;
  point: string;
  describe: string;
}

interface IPrivacyPolicy {
  id: number;
  title: string;
  describe?: string;
  innerPoint?: IPrivacyInnerPoint[];
}
const data: IPrivacyPolicy[] = privacyPolicyData;

const PrivacyPolicySection = () => {
  return (
    <section
      className="max-w-screen-5xl mx-auto px-4 md:px-10
    "
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl 2xl:text-8xl font-inter font-light text-black my-10 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg lg:text-lg 2xl:text-3xl tracking-wider 2xl:max-w-screen-lg max-w-screen-md py-4 text-center lg:text-start">
          Our dedication lies in safeguarding the confidentiality and safety of
          the personal information belonging to our users. This Privacy Policy
          delineates the categories of data we gather, our utilization of this
          information, and the options you possess concerning your personal
          data. When you engage with our website, you are giving your consent
          for the collection and utilization of your data in accordance with the
          details provided in this policy.
        </p>
        <p className="text-lg lg:text-lg 2xl:text-3xl tracking-wider 2xl:max-w-screen-lg max-w-screen-md py-4 text-center lg:text-start">
          Our dedication lies in safeguarding the confidentiality and safety of
          the personal information belonging to our users. This Privacy Policy
          delineates the categories of data we gather, our utilization of this
          information, and the options you possess concerning your personal
          data. When you engage with our website, you are giving your consent
          for the collection and utilization of your data in accordance with the
          details provided in this policy.
        </p>

        <p className="text-lg lg:text-lg 2xl:text-3xl tracking-wider 2xl:max-w-screen-lg max-w-screen-md py-4 text-center lg:text-start">
          Our dedication lies in safeguarding the confidentiality and safety of
          the personal information belonging to our users. This Privacy Policy
          delineates the categories of data we gather, our utilization of this
          information, and the options you possess concerning your personal
          data. When you engage with our website, you are giving your consent
          for the collection and utilization of your data in accordance with the
          details provided in this policy.
        </p>
      </div>

      <div className="py-10 px-4 md:px-6 flex flex-col mx-auto max-w-screen-lg">
        {data?.map((list) => (
          <div className="flex flex-col" key={list.id}>
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-inter font-light text-black py-4">
              {list.id}
              {". "}
              {list.title}
              {":"}
            </h2>
            <p className="text-lg md:text-xl 2xl:text-3xl tracking-wider max-w-screen-xl font-inter font-light py-2 p-2">
              {list?.describe}
            </p>
            <ul className="flex flex-col justify-center items-center">
              {list.innerPoint?.map((item) => (
                <li
                  key={item.id}
                  className="items-start py-2 text-lg 2xl:text-3xl font-inter font-light tracking-wide"
                >
                  <span className="font-bold font-inter 2xl:text-4xl text-3xl">
                    {"."}{" "}
                  </span>
                  <span className="text-lg font-inter font-semibold 2xl:text-3xl tracking-widee">
                    {item.point}
                    {": "}
                  </span>{" "}
                  {item?.describe}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
