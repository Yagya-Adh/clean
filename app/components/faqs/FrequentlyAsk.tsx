"use client";
import React, { useState } from "react";
import frequentlyAskData from "@/lib/data/frequentlyAskData.json";

interface IfaqDATA {
  id: number;
  question: string;
  answer: string;
}
const data: IfaqDATA[] = frequentlyAskData;

const FrequentlyAsk = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionToggle = (id: number) => {
    setOpenQuestion((prevID) => (prevID === id ? null : id));
  };

  return (
    <section className="max-w-screen-5xl mx-auto px-4 lg:px-10 py-10">
      <div className="flex flex-col items-center">
        {data?.slice(0, 6).map((list) => (
          <div
            key={list.id}
            className={`
            flex 
            flex-col           
            rounded-3xl 
            hover:bg-transparent 
            shadow-lg 
            animate-fadeInUp 
            bg-white   
            w-full  
            md:w-3/4                     
            px-7
            py-4
            my-4
            ${
              openQuestion === list.id
                ? "translate-y-1 transition-all ease-linear duration-500"
                : "-translate-y-0 transition-all ease-linear duration-500"
            }
              `}
          >
            <div className="flex flex-row place-items-center justify-between w-full h-full">
              <h3
                className="text-xl sm:text-xl xl:text-3xl 2xl:text-5xl text-clean-black-10 py-4 font-inter font-normal"
                onClick={() => handleQuestionToggle(list.id)}
              >
                {list.question}
              </h3>
              <span
                className="text-5xl sm:text-4xl 2xl:text-6xl font-inter font-light text-clean-black-10 cursor-pointer flex justify-center place-items-start"
                onClick={() => handleQuestionToggle(list.id)}
              >
                {openQuestion === list.id ? "-" : "+"}
              </span>
            </div>
            <p className="text-sm md:text-lg max-w-82 2xl:text-4xl 2xl:max-w-screen-lg text-center md:text-start md:max-w-xl font-inter font-normal text-clean-black-10 2xl:py-4">
              {openQuestion === list.id && list.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAsk;
