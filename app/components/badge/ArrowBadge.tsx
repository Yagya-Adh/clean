import Image from "next/image";

const ArrowBadge = () => {
  return (
    <div
      className="
overflow-hidden  
rounded-full 
absolute 
right-4 
bottom-4 
rotate-45
bg-white              
group-hover:bg-black
group-hover:text-white
p-5  
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
        className={`translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500`}
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
