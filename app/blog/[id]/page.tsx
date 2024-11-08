"use client";
import CardBadge from "@/app/components/badge/CardBadge";
import blogData from "@/blogData.json";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IblogData | null>(null);

  useEffect(() => {
    const blogPost = blogData.find(
      (item) => item.id === parseInt(id as string, 10)
    );
    setBlog(blogPost || null);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-screen-2xl mx-auto md:px-10">
      <section>
        <div className="flex flex-col justify-center items-center py-10">
          <CardBadge text={blog.mainTitle} />
          <p className="text-4xl capitalize py-3">{blog.cardDescription}</p>
          <p className="text-base text-center uppercase max-w-screen-sm py-2">
            {" "}
            {blog.mainDescription}
          </p>
          <Image
            src={blog.user.image}
            alt="card_image_"
            width={60}
            height={60}
            className="object-center object-cover rounded-full"
          />
          <h5 className="text-sm uppercase py-2"> {blog.author.name}</h5>
          <h6 className="text-base uppercase">{blog.author.publishDate}</h6>
        </div>
        <div className="flex justify-center items-center py-10">
          <Image
            src={blog.cardImage}
            alt="card_image_"
            width={800}
            height={400}
            className="object-center object-cover rounded-2xl"
          />
        </div>
        <summary className="py-10 md:px-2 lg:px-40 list-none">
          {blog.pages?.map((pageArticle) => (
            <div key={pageArticle.id} className="py-2">
              <h4 className="text-5xl font-semibold py-1">
                {pageArticle.title}
              </h4>
              <p className="text-clean-black-10/80 text-xl font-sans">
                {pageArticle.describe}
              </p>
            </div>
          ))}
        </summary>
      </section>
    </main>
  );
};

export default BlogDetails;
