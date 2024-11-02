import { GoArrowRight } from "react-icons/go";

const SubscribeBox = () => {
  return (
    <form className="py-10 px-2">
      <div
        className="
       bg-black 
        rounded-xl 
        flex flex-row
        items-center
        p-3
        w-full
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
          bg-clean-green-10
          hover:bg-white
           rounded-sm 
           text-center
           items-center
           px-5 py-2
            transition-all
            duration-700
            ease-linear
           "
        >
          <GoArrowRight className="size-8" />
        </button>
      </div>
    </form>
  );
};

export default SubscribeBox;
