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
    setOpenQuestion((prevID) => (prevID === id ? id : null));
  };
  return (
    <section className="max-w-screen-2xl mx-auto px-10 my-20">
      {data?.slice(0, 6).map((list) => (
        <div
          className="flex flex-col  justify-center items-center"
          key={list.id}
        >
          <article className="flex flex-row j justify-between items-center  rounded-full py-10 bg-white hover:bg-transparent shadow-lg my-4 px-10 w-1/2 animate-fadeInUp">
            <h1 className="text-2xl text-clean-black-10">{list.question}</h1>

            <span
              className="text-4xl text-clean-black-10"
              onClick={() => handleQuestionToggle(list.id)}
            >
              {openQuestion === list.id ? "-" : "+"}
            </span>

            {openQuestion === list.id && (
              <p className="font-sans text-clean-black-10">{list.answer}</p>
            )}
          </article>
        </div>
      ))}
    </section>
  );
};

export default FrequentlyAsk;
