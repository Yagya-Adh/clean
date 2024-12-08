import Link from "next/link";
import Image from "next/image";
import CardBadge from "../badge/CardBadge";
import ArrowBadge from "../badge/ArrowBadge";
import Anchor from "../anchor/Anchor";
import blogData from "@/lib/data/blogData.json";

interface IUser {
  name: string;
  image: string;
}
interface IPage {
  id: number;
  title: string;
  describe: string;
}
interface IAuthor {
  name: string;
  publishDate: string;
}
interface IblogData {
  id: number;
  cardImage: string;
  cardDescription: string;
  cardTag: string;
  cardDate: string;
  user: IUser;
  mainTitle: string;
  mainDescription: string;
  author: IAuthor;
  conclusion?: string;
  pages: IPage[];
  extraText: string;
}

const data: IblogData[] = blogData;

const ImageCardGroup = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-20 xl:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-10">
        {data?.slice(0, 4).map((list) => (
          <Link
            className="
            flex-col 
            overflow-hidden 
            row-span-1
            py-2             
            group
            h-full   
            flex             
            "
            key={list.id}
            href={`/blog/${list.id}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={list.cardImage}
                alt="card_image_"
                width={800}
                height={800}
                className="object-center object-cover rounded-3xl h-full w-auto sm:w-full sm:h-full md:h-auto md:w-auto lg:h-[800px] lg:w-[800px]:"
              />
              <div className="absolute bottom-4 right-10">
                <ArrowBadge />
              </div>
            </div>
            <div
              className="
              flex 
              flex-col 
              sm:flex-row
              justify-center 
              sm:justify-between 
              items-center               
              relative 
              "
            >
              <div
                className="
                flex 
                flex-col 
                md:flex-row 
                md:items-center 
                order-2 md:-order-none 
                text-center 
                md:text-start
                "
              >
                <CardBadge text={list.cardTag} />
                <span className="py-2 md:ml-4 font-inter font-normal text-xs lg:font-normal lg:text-xl tracking-widest">
                  {list.cardDate}
                </span>
              </div>
              <div className="border-b w-1/6 border-black hidden lg:block"></div>
              <div className="flex items-center justify-between md:-order-none order-1 py-2.5">
                <Image
                  src={list.user.image}
                  alt="card_image_"
                  width={50}
                  height={50}
                  className="object-center object-cover rounded-full h-auto w-auto"
                />
                <h2
                  className="
                  tracking-widest
                  font-inter
                  font-semibold
                  sm:font-medium
                  lg:font-normal
                  uppercase 
                  text-xs
                  sm:text-sm
                  md:text-lg
                  lg:text-xl
                  flex flex-col 
                  items-center 
                  justify-center 
                  text-center  
                  ml-8
                  py-4 
                  "
                >
                  {list.author.name}
                  <span className="border-b border-black w-1/2 py-1"></span>
                </h2>
              </div>
            </div>
            <p
              className="
              font-inter
              font-normal 
            
              md:font-normal
              lg:font-light
              text-2xl 
              sm:text-4xl 
              md:text-5xl

              lg:text-6xl
              order-3 
              md:-order-none
              text-center 
              md:text-start
              md:py-4
              "
            >
              {list.cardDescription}
            </p>
          </Link>
        ))}
      </div>
      <div className="my-4 flex inset-0 justify-center items-center">
        <Anchor link="/about" text="VIEW ALL" />
      </div>
    </section>
  );
};

export default ImageCardGroup;
