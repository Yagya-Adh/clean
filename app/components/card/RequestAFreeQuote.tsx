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
      {/*  <div
        className=" 
        bg-no-repeat
        bg-footer-card-image
        bg-cover px-52 py-40 sm:px-80 sm:py-64 lg:px-96 lg:py-72 
        "
      >
        <Image
          src="/assets/images/requestcard.webp"
          alt="request_card_"
          width={900}
          height={900}
          className=" rounded-[62px] relative"
        />
      </div> */}

      <div
        className="
        absolute
        flex
        flex-col
        justify-center 
        items-center
        p-4 
        lg:p-40 
        lg:pt-2
        "
      >
        <h4 className="text-7xl py-4 text-clean-black-10 font-inter">
          <span className="font-light">Request A </span>
          <span className="font-inter font-thin italic"> Free Quote</span>
        </h4>
        <p className="max-w-xl text-2xl text-center font-light text-clean-black-10 font-inter">
          Find out how affordable clean can be — Request your free quote today!
        </p>
        <form className="py-10 px-2">
          <div
            className="
            bg-black 
            rounded-xl 
            flex flex-row
            items-center
            w-full
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
              px-5
              py-2
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
              <GoArrowRight className="size-6" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RequestAFreeQuote;
