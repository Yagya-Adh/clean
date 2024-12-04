import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CardBadge from "@/app/components/badge/CardBadge";
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

type Props = {
  params: { id: string };
};

const blogFetch = (itemId: number): IblogData | undefined => {
  return blogData.find((item) => item.id === itemId);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id, 10);
  const blog = blogFetch(id);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist!",
      openGraph: {
        title: "Blog not found",
        description: "The blog you are looking for does not exist!",
      },
    };
  }

  return {
    title: `${blog.cardDescription} - Cleaner`,
    description: blog.mainDescription,
    openGraph: {
      title: `${blog.cardDescription} - Cleaner`,
      description: blog.mainDescription,
      images: [{ url: blog.cardImage }],
    },
  };
}

const BlogDetails = async ({ params }: Props) => {
  const id = parseInt(params.id, 10);
  const blog = blogFetch(id);

  if (!blog) {
    return notFound();
  }

  return (
    <main className="max-w-screen-xl mx-auto md:px-10">
      <div className="flex flex-col justify-center items-center py-10">
        <CardBadge text={blog.mainTitle} />
        <p className="py-3 lg:text-5xl capitalize text-center font-inter font-light">
          {blog.cardDescription}
        </p>
        <p className="lg:text-2xl text-center max-w-screen-sm font-inter font-light  py-2 ">
          {blog.mainDescription}
        </p>
        <Image
          src={blog.user.image}
          alt="card_image_"
          width={100}
          height={100}
          className="object-center object-cover rounded-full"
        />
        <h3 className="lg:text-xl font-inter font-normal uppercase py-2">
          {blog.author.name}
        </h3>
        <h4 className="text-2xl font-inter font-light">
          {blog.author.publishDate}
        </h4>
      </div>
      <div className="flex justify-center items-center py-10">
        <Image
          src={blog.cardImage}
          alt="card_image_"
          width={1200}
          height={400}
          className="object-center object-cover rounded-2xl w-full h-auto"
        />
      </div>
      <div className="py-10 md:px-2  lg:px-10 list-none">
        {blog.pages?.map((pageArticle) => (
          <div key={pageArticle.id} className="py-2 px-10">
            <h4 className="text-2xl lg:text-5xl capitalize font-inter font-medium py-4">
              {pageArticle.title}
            </h4>
            <p className="text-clean-black-10/80 font-inter lg:text-2xl font-light tracking-wide max-w-screen-xl">
              {pageArticle.describe}
            </p>
          </div>
        ))}

        <h3 className="border-l-8 border-l-black text-clean-black-10/80 font-inter font-normal lg:text-2xl my-4 py-4 p-10 mx-10">
          {blog.extraText}
        </h3>
      </div>
    </main>
  );
};

export default BlogDetails;
