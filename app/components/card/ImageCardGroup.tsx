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
    <section className="max-w-screen-2xl mx-auto px-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data?.slice(0, 4).map((list) => (
          <Link
            className="
            flex             
            flex-col 
            overflow-hidden 
            py-10 
            group"
            key={list.id}
            href={`/blog/${list.id}`}
          >
            <div className="h-full relative">
              <Image
                src={list.cardImage}
                alt="card_image_"
                width={400}
                height={400}
                className="object-center object-cover w-full h-full rounded-2xl"
              />
              <ArrowBadge />
            </div>
            <div className="relative flex justify-between items-center py-4">
              <CardBadge text={list.cardTag} />
              <span>{list.cardDate}</span>
              <div className="border-b w-1/6 border-black"></div>
              <div className="flex items-center justify-between">
                <Image
                  src={list.user.image}
                  alt="card_image_"
                  width={50}
                  height={50}
                  className="object-center object-cover rounded-full"
                />
                <h2 className="uppercase flex flex-col items-center justify-center py-4 text-center  ml-8">
                  {list.author.name}
                  <span className="border-b border-black w-1/2 py-1"></span>
                </h2>
              </div>
            </div>
            <h1 className="font-light text-4xl py-4">{list.cardDescription}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImageCardGroup;
