"use client";
import Image from "next/image";
import { useState } from "react";
import { CheckedIcon } from "@/app/icons";
import professionalCleanData from "@/lib/data/professionalCleanData.json";

interface IServiceData {
  id: number;
  topic: string;
  describe: string;
  image?: string;
}
const data: IServiceData[] = professionalCleanData;

const ProfessionalAccordion = () => {
  const [opentCheck, setOpenCheck] = useState<number | null>(
    data[0]?.id || null
  );

  const handleOpentCheck = (id: number) => {
    setOpenCheck((prevID) => (prevID === id ? null : id));
  };

  return (
    <div className="flex lg:flex-row lg:justify-between flex-col justify-center items-center lg:z-10 relative top-1 lg:-top-64 left-0 py-4">
      <div className="md:py-10 py-4">
        {data.slice(0, 3).map((list) => (
          <div
            className="flex flex-col justify-center items-center lg:items-start lg:justify-normal"
            key={list.id}
          >
            <div
              className="flex flex-row items-center py-3 opacity-80 bg-clean-green-10 hover:opacity-100 cursor-pointer"
              onClick={() => handleOpentCheck(list.id)}
            >
              <CheckedIcon className="w-5 h-5" />
              <h2 className="font-inter font-normal text-sm sm:text-xl text-clean-black-10 uppercase ml-4 tracking-wider">
                {list.topic}
              </h2>
            </div>
            {opentCheck === list.id && (
              <p className="font-inter font-light text-clean-black-10 text-xl max-w-xl">
                {list.describe}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:justify-end lg:py-4 w-full">
        {data?.map((item) => (
          <div key={item.id}>
            {opentCheck === item.id && item.image && (
              <Image
                src={item.image}
                alt="team_photo"
                width={400}
                height={400}
                className="xl:h-[300] h-auto w-auto object-cover object-center rounded-3xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalAccordion;
