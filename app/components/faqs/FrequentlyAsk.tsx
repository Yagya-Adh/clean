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
    <section className="max-w-screen-2xl mx-auto px-4 lg:px10 my-20">
      <div className=" flex flex-col items-center">
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
              sm:w-2/3            
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
            <div className="flex flex-row place-items-start justify-between w-full">
              <h4
                className="text-2xl lg:text-3xl text-clean-black-10 py-4 font-inter font-normal"
                onClick={() => handleQuestionToggle(list.id)}
              >
                {list.question}
              </h4>

              <span
                className="text-5xl font-inter font-normal text-clean-black-10 cursor-pointer flex justify-center place-items-start"
                onClick={() => handleQuestionToggle(list.id)}
              >
                {openQuestion === list.id ? "-" : "+"}
              </span>
            </div>

            <p className="text-xl text-center md:text-start md:max-w-xl font-inter font-normal text-clean-black-10">
              {openQuestion === list.id && list.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyAsk;
