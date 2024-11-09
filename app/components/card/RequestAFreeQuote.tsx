import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const RequestAFreeQuote = () => {
  return (
    <section
      className="
    rounded-[62px]       
    flex 
    flex-col 
    justify-center 
    items-center
    overflow-hidden   
    relative
    "
    >
      <Image
        src="/assets/images/requestcard.webp"
        alt="request_card_"
        width={900}
        height={900}
        className=" rounded-[62px] h-full  w-full relative"
      />
      <div
        className="
        absolute
        flex
        flex-col
        justify-center 
        items-center
        p-20 
        py-40
        lg:p-40 
        lg:pt-2
        "
      >
        <h4 className="text-4xl lg:text-7xl max-w-60 md:max-w-screen-xl text-center text-clean-black-10 font-inter py-4">
          <span className="font-light">Request A </span>
          <span className="font-inter font-thin italic"> Free Quote</span>
        </h4>
        <p className="max-w-60 md:max-w-sm text-xl md:text-xl text-center tracking-wider font-light text-clean-black-10 font-inter">
          Find out how affordable clean can be — Request your free quote today!
        </p>
        <form className="py-10 px-2">
          <div
            className="
            bg-black 
            rounded-xl 
            flex 
            flex-row
            items-center
            lg:w-full
            p-3
            "
          >
            <input
              type="text"
              className="
              px-10 
              pe-20
              bg-transparent
              outline-none
              text-base
              text-white
              "
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="
              px-8
              py-5
              text-clean-black-10
              bg-clean-green-10
              hover:bg-white
              rounded-sm 
              text-center
              items-center
              transition-all
              duration-700
              ease-linear
           "
            >
              <GoArrowRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestAFreeQuote;
