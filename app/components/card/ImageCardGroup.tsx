import blogData from "@/blogData.json";
import Image from "next/image";
import CardBadge from "../badge/CardBadge";
import Link from "next/link";
import ArrowBadge from "../badge/ArrowBadge";

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
  conclusion: string;
  pages: IPage[];
  extraText: string;
}

const data: IblogData[] = blogData;

const ImageCardGroup = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data?.slice(0, 4).map((list) => (
          <Link
            className="
              flex             
              flex-col 
              overflow-hidden 
              row-span-1
              py-10 
              group
              h-full   
            "
            key={list.id}
            href={`/blog/${list.id}`}
          >
            <div className="relative w-full h-[600px]">
              <Image
                src={list.cardImage}
                alt="card_image_"
                width={800}
                height={800}
                className="object-center w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 right-10">
                <ArrowBadge />
              </div>
            </div>
            <div
              className="
                relative 
                flex 
                flex-col 
                md:flex-row
                justify-center 
                sm:justify-between 
                items-center 
                py-4
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
                <span className="py-2 md:ml-4">{list.cardDate}</span>
              </div>
              <div className="border-b w-1/6 border-black hidden lg:block"></div>
              <div className="flex items-center justify-between md:-order-none order-1">
                <Image
                  src={list.user.image}
                  alt="card_image_"
                  width={50}
                  height={50}
                  className="object-center object-cover rounded-full"
                />
                <h2
                  className="
                    uppercase 
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
            <h4
              className="
                font-thin 
                text-2xl 
                md:text-4xl 
                order-3 
                md:-order-none
                text-center 
                md:text-start
                md:py-4
              "
            >
              {list.cardDescription}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageCardGroup;
