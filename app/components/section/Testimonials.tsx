"use client";
import { useState } from "react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import testimonialData from "@/lib/data/testimonialsData.json";

interface IAuthorTestimonials {
  name: string;
  image: string;
  job: string;
}
interface Itestimonials {
  id: number;
  cardBackground: string;
  message: string;
  author: IAuthorTestimonials;
}

const data: Itestimonials[] = testimonialData;
const testimonialsPerPage = 3;

const Testimonials = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(data.length / testimonialsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  const startIndex = page * testimonialsPerPage;
  const currentTestimonials = data.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <div className="flex justify-end py-10">
        <div className="flex items-center">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
          >
            <MdOutlineKeyboardArrowLeft className="size-12" />
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages - 1}
          >
            <MdOutlineKeyboardArrowRight className="size-12" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 py-4 px-4">
        {currentTestimonials.map((list, index) => (
          <div
            className={`relative rounded-[42px] flex flex-col justify-center items-center text-center py-10 px-10
              ${list.cardBackground ? list.cardBackground : ""} ${
              index === 1 ? "lg:h-[500px]  bg-clean-blue-10" : "lg:h-[450px]"
            }`}
            key={list.id}
          >
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden shadow-lg flex justify-center items-center">
                <Image
                  src={list.author.image}
                  alt="testimonials_author"
                  width={110}
                  height={110}
                  className="object-cover aspect-square"
                />
              </div>
            </div>
            <div>
              <p className="font-inter font-light text-clean-black-10 text-base lg:text-2xl max-w-xl py-10 px-4 text-center">
                {list.message}
              </p>

              <h3 className="font-inter font-normal text-clean-black-10 text-base lg:text-base uppercase text-center">
                {list.author.name}
              </h3>
              <h4 className="font-inter font-light text-clean-black-10 text-sm lg:text-base uppercase text-center">
                {list.author.job}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="py-5 flex items-center justify-center w-full">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            className={`rounded-full p-2 mx-0.5 ${
              index === page ? "bg-clean-black-10" : "bg-clean-gray-10"
            }`}
            key={index}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
