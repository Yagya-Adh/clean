import termsData from "@/lib/data/termsConditionData.json";

interface ITermsCondition {
  id: number;
  title: string;
  describe: string;
}
const data: ITermsCondition[] = termsData;
const TermsCondition = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl font-inter font-light text-black my-10 text-center">
          Terms & Condition
        </h1>

        <p className="text-lg lg:text-xl max-w-screen-md py-4 text-center lg:text-start">
          Kindly review these Terms and Conditions thoroughly prior to utilizing
          our template.
        </p>
        <p className="text-lg lg:text-xl max-w-screen-md py-4 text-center lg:text-start">
          Your access or utilization of the template implies your acceptance of
          these Terms and Conditions.
        </p>

        <p className="text-lg lg:text-xl max-w-screen-md py-4 text-center lg:text-start">
          If you disagree with any aspect of these Terms and Conditions, please
          abstain from using the template.
        </p>
      </div>

      <div className="py-10 px-4 md:px-6 flex flex-col mx-auto max-w-screen-lg">
        {data?.map((list) => (
          <div className="flex flex-col justify-center my-7" key={list.id}>
            <div>
              <h2 className="text-3xl md:text-4xl font-inter font-light">
                <span>
                  {list.id}
                  {". "}
                </span>{" "}
                {list.title}
              </h2>
              <p className="text-lg md:text-xl tracking-wider max-w-screen-lg font-inter font-light py-4">
                {list.describe}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsCondition;
