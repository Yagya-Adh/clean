import Image from "next/image";

const ArrowBadge = () => {
  return (
    <div
      className="
      overflow-hidden  
      rounded-full     
      rotate-45
      bg-white              
      group-hover:text-white
      items-center
      px-4 
      py-2
    "
    >
      <div
        className={`translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500`}
      >
        <Image
          src="/assets/icon/arrow_outward.svg"
          alt="card_arrow_"
          width={22}
          height={22}
          className="
            -rotate-45
            transition-all
            duration-500
            translate-y-0
            group-hover:-translate-y-4                              
            "
        />
      </div>
      <div
        className={`translate-y-16 transform group-hover:-translate-y-0 ease-in-out transition-all duration-500`}
      >
        <Image
          src="/assets/icon/arrow_outward.svg"
          alt="card_arrow_"
          width={22}
          height={22}
          className="
    -rotate-45
    transition-all
    duration-500
    translate-y-0
    group-hover:-translate-y-4                              
    "
        />
      </div>
    </div>
  );
};

export default ArrowBadge;
