"use client";
import Image from "next/image";
import { useRef } from "react";
import SocialGroup from "../social/SocialGroup";
import ourTeamData from "@/lib/data/OurTeamData.json";

interface IOurTeamData {
  id: number;
  isActive: boolean;
  name: string;
  job: string;
  describe: string;
  photo: string;
}

const data: IOurTeamData[] = ourTeamData;

const OurTeam = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClickSlide = (pointing: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const elementWidth = container.scrollWidth / data.length;
      const scrollTo = pointing * elementWidth - elementWidth;
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-screen-2xl px-10 py-4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div
          ref={scrollContainerRef}
          className="flex gap-10 py-5 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {data.map((list) => (
            <div
              className="flex-shrink-0 min-w-[100px] flex flex-col justify-center text-center"
              key={list.id}
            >
              <Image
                src={list.photo}
                alt="team_photo"
                width={250}
                height={250}
                className="object-center object-cover rounded-2xl h-auto w-auto"
              />
              <h2 className="text-3xl lg:text-6xl text-clean-black-10 py-2.5">
                {list.name}
              </h2>
              <h3 className="text-clean-black-10 lg:text-lg font-normal uppercase py-4">
                {list.job}
              </h3>
              <p className="text-clean-black-10/60 lg:text-xl max-w-sm uppercase">
                {list.describe}
              </p>
              <div className="flex flex-col items-center justify-center py-4">
                <SocialGroup />
              </div>
            </div>
          ))}
        </div>
        <div className="py-5 flex">
          {data.map((click, index) => (
            <button
              onClick={() => handleClickSlide(index + 1)}
              type="button"
              className={`rounded-full p-2 mx-0.5 ${
                click.isActive ? "bg-clean-black-10" : "bg-clean-gray-10"
              }`}
              key={click.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
