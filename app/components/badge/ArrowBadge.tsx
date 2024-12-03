"use client";
import { ArrowRight } from "@/app/icons";

const ArrowBadge = () => {
  return (
    <div
      className="
        overflow-hidden  
        rounded-full     
        rotate-45
        bg-white              
        group-hover:text-white         
        text-white
        flex
        flex-col
        items-center
        justify-between
        w-12
        h-12
        group-hover:bg-black 
        group-hover:fill-white  
        "
    >
      <div
        className="
        flex
        items-center
        justify-centers
        transform 
        translate-y-5
        group-hover:-translate-y-5 
        ease-in-out 
        transition-all 
        duration-500
        "
      >
        <ArrowRight className="-rotate-45" />
      </div>
      <div
        className="
        flex
        items-center
        justify-centers
        transform 
        group-hover:-translate-y-5 
        translate-y-20
        ease-in-out 
        transition-all 
        duration-500   
           
        "
      >
        <ArrowRight className="-rotate-45" />
      </div>
    </div>
  );
};

export default ArrowBadge;
