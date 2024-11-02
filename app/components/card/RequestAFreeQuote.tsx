import Image from "next/image";
import SubscribeBox from "./SubscribeBox";

const RequestAFreeQuote = () => {
  return (
    <section
      className="
    rounded-[62px]       
    flex flex-col 
    justify-center 
    items-center
    overflow-hidden   
    relative
    "
    >
      <Image
        src="/assets/images/requestcard.webp"
        alt="request_card_"
        width={800}
        height={800}
        className="h-full w-full rounded-[62px] relative"
      />

      <div
        className=" 
        absolute
        top-0 
        left-0"
      >
        <article
          className="
        flex flex-col
        justify-center 
        items-center
        p-4 
        lg:p-40 
        lg:pt-20"
        >
          <h1 className="text-4xl py-4">
            <span className="font-light">Request A </span>
            <span className="font-mono italic"> Free Quote</span>
          </h1>
          <p className="tex-sm text-center">
            Find out how affordable clean can be — Request your free quote
            today!
          </p>
          <SubscribeBox />
        </article>
      </div>
    </section>
  );
};

export default RequestAFreeQuote;
