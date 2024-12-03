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
  const [opentCheck, setOpenCheck] = useState<number | null>(null);

  const handleOpentCheck = (id: number) => {
    setOpenCheck((prevID) => (prevID === id ? null : id));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-end md:gap-40 w-full min-h-full">
      <div className="py-10">
        {data.slice(0, 3).map((list) => (
          <div
            className="flex flex-col md:flex-row justify-center items-center md:justify-normal "
            key={list.id}
          >
            <div
              className="flex flex-row items-center py-3 opacity-80 bg-clean-green-10 hover:opacity-100 cursor-pointer"
              onClick={() => handleOpentCheck(list.id)}
            >
              <CheckedIcon className="w-8 h-8" />
              <h2 className="font-inter font-normal text-clean-black-10 uppercase ml-4 tracking-wider text-xl">
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

      <div>
        <Image
          src="/assets/images/cleansingLiquid.webp"
          alt="team_photo"
          width={500}
          height={200}
          className="w-auto h-auto object-cover object-center rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ProfessionalAccordion;
