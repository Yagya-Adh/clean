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
    <div className="my-10 py-10 flex flex-col justify-center">
      <div>
        {data.slice(0, 3).map((list) => (
          <div
            className="flex flex-col justify-center items-center md:items-start md:justify-normal"
            key={list.id}
          >
            <div
              className="flex flex-row items-center py-3 opacity-80 bg-clean-green-10 hover:opacity-100 cursor-pointer"
              onClick={() => handleOpentCheck(list.id)}
            >
              <CheckedIcon className="w-5 h-5" />
              <h2 className="font-inter font-normal text-xl text-clean-black-10 uppercase ml-4 tracking-wider">
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
      <div className="flex justify-center py-10 md:py-4 w-full">
        {data?.map((item) => (
          <div key={item.id}>
            {opentCheck === item.id && item.image && (
              <Image
                src={item.image}
                alt="team_photo"
                width={500}
                height={200}
                className="w-auto h-auto object-cover object-center rounded-3xl"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalAccordion;
