import Image from "next/image";
import imageGridGroupData from "@/lib/data/imageGridGroupData.json";

interface IimageGridGroupData {
  id: number;
  image: string;
  span?: string;
}

const data: IimageGridGroupData[] = imageGridGroupData;

const ImageGridGroup = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 grid-flow-col gap-5">
        {data.slice(0, 4).map((list) => (
          <div
            className={`rounded-[43px] overflow-hidden ${list.span} shadow-lg transition-transform duration-500 ease-in-out`}
            key={list.id}
          >
            <Image
              src={list.image}
              width={1200}
              height={1200}
              layout="responsive"
              alt="grid_group_image"
              className="object-cover object-center hover:scale-105 !h-full w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridGroup;
