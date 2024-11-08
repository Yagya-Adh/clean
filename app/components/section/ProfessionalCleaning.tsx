"use client";
import Image from "next/image";
import { useState } from "react";
import professionalCleanData from "@/lib/data/professionalCleanData.json";
interface IServiceData {
  id: number;
  topic: string;
  describe: string;
  image?: string;
}
const data: IServiceData[] = professionalCleanData;

const ProfessionalCleaning = () => {
  const [opentCheck, setOpenCheck] = useState<number | null>(null);

  const handleOpentCheck = (id: number) => {
    setOpenCheck((prevID) => (prevID === id ? null : id));
  };

  return (
    <section className="bg-no-repeat bg-curves-wave h-full bg-clean-green-10 object-cover bg-contain py-40 rounded-b-[62px] px-10">
      <div className="mx-auto max-w-screen-2xl px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end px-10">
          <aside className="flex flex-col justify-between py-10">
            <Image
              src="/assets/icon/efficient.svg"
              alt="time_"
              width={47}
              height={47}
            />
            <h2 className="font-inter font-light text-5xl  text-clean-black-10 py-4">
              Professional Cleaning <br /> For Every Occasion
            </h2>
            <p className="font-inter font-light text-2xl  text-clean-black-10 max-w-xl">
              Whether you’re maintaining a pristine workspace, or simply keeping
              your home in top shape, our services are designed to meet all your
              needs.
            </p>
            {data.slice(0, 3).map((list) => (
              <div key={list.id}>
                <div
                  className="flex lg:flex-row flex-col items-center py-5 opacity-80  bg-clean-green-10 hover:opacity-100 cursor-pointer"
                  onClick={() => handleOpentCheck(list.id)}
                >
                  <Image
                    src="/assets/icon/checked.svg"
                    alt="checked_icon"
                    width={24}
                    height={24}
                  />
                  <h2 className="font-inter font-normal text-clean-black-10 text-base uppercase ml-4">
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
          </aside>

          <aside className="w-full">
            <Image
              src="/assets/images/cleansingLiquid.webp"
              alt="team_photo"
              width={500}
              height={200}
              className="w-full object-cover rounded-[42px]"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCleaning;
