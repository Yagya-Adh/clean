"use client";
import React, { useState } from "react";
import frequentlyAskData from "@/frequentlyAskData.json";

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
    <section className="max-w-screen-2xl mx-auto md:px-10 my-20">
      {data?.slice(0, 6).map((list) => (
        <div
          className="flex flex-col justify-center items-center py-4 px-4 md:px-20 animate-fadeInUp"
          key={list.id}
        >
          <article
            className={`
          flex 
          flex-col 
          items-center 
          justify-between 
          rounded-3xl 
          bg-white 
          hover:bg-transparent 
          shadow-lg 
          animate-fadeInUp 
          md:w-1/2         
          px-10 py-10       
          ${
            openQuestion === list.id
              ? "translate-y-1 transition-all ease-linear duration-500"
              : "-translate-y-0 transition-all ease-linear duration-500"
          }
              `}
          >
            <div
              className="flex flex-row justify-between w-full"
              onClick={() => handleQuestionToggle(list.id)}
            >
              <h4 className="text-3xl text-clean-black-10 py-4">
                {list.question}
              </h4>

              <span
                className="text-4xl text-clean-black-10 cursor-pointer"
                onClick={() => handleQuestionToggle(list.id)}
              >
                {openQuestion === list.id ? <span>- </span> : <span>+</span>}
              </span>
            </div>

            <p className="text-xl font-sans">
              {openQuestion === list.id && list.answer}
            </p>
          </article>
        </div>
      ))}
    </section>
  );
};

export default FrequentlyAsk;
