import { GoArrowRight } from "react-icons/go";

const RequestAFreeQuote = () => {
  return (
    <div className="bg-footer-card-image bg-no-repeat bg-cover bg-center rounded-3xl p-2 md:p-4 lg:p-10 -translate-y-32">
      <div
        className="
          flex
          flex-col
          justify-center 
          items-center         
          relative
          md:px-14
          sm:p-10
          p-7
          2xl:p-14
          "
      >
        <h4 className="text-4xl sm:text-5xl xl:text-8xl 2xl:text-9xl 2xl:max-w-screen-xl max-w-60 md:max-w-screen-xl text-center text-clean-black-10 font-inter py-4 lg:py-10">
          <span className="font-light">Request A </span>
          <span className="font-inter font-thin italic"> Free Quote</span>
        </h4>
        <p className="max-w-60 md:max-w-sm text-xs xl:text-xl 2xl:text-4xl 2xl:max-w-screen-md text-center tracking-wider font-light text-clean-black-10 font-inter">
          Find out how affordable clean can be — Request your free quote today!
        </p>
        <form className="py-10 px-4 flex">
          <div
            className="
              bg-black 
              rounded-xl 
              flex
              flex-col
              justify-center 
              items-center
              lg:flex-row
              lg:w-full
              p-3
              my-2
              "
          >
            <input
              type="text"
              className="
                px-2 py-2 
                lg:px-10 
                lg:pe-20
                bg-transparent
                outline-none
                text-base
                text-white                
                text-center
                lg:text-start
                2xl:py-10
                2xl:px-20
                2xl:text-4xl
              "
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="
                py-5
                px-8
                text-clean-black-10
                bg-clean-green-10
                hover:bg-white
                rounded-sm 
                text-center
                items-center
                transition-all
                duration-700
                ease-linear
                2xl:px-16
                2xl:py-8
                "
            >
              <GoArrowRight className="size-4 2xl:h-14 2xl:w-14" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestAFreeQuote;
