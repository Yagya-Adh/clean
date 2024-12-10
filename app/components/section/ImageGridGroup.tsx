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
    <section className="max-w-screen-4xl mx-auto px-4 lg:px-10 2xl:py-20">
      <div className="columns-2 row-auto break-after-avoid  ">
        {data.slice(0, 4).map((list) => (
          <div
            className="rounded-3xl overflow-hidden mb-5 shadow-lg transition-transform duration-500 ease-in-out max-h-[720px]"
            key={list.id}
          >
            <Image
              src={list.image}
              width={800}
              height={800}
              layout="responsive"
              alt="grid_group_image"
              className="object-cover object-center hover:scale-125 transition-all ease-in-out duration-500 h-[250px] xl:h-full 2xl:h-[900px] sm:w-full w-auto lg:h-auto:"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridGroup;
