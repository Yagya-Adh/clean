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
    <section className="max-w-screen-2xl mx-auto px-4 lg:px-10">
      <div className="columns-2 row-auto break-after-avoid  ">
        {data.slice(0, 4).map((list) => (
          <div
            className="rounded-3xl overflow-hidden mb-5 shadow-lg transition-transform duration-500 ease-in-out sm:max-h-[450px] max-h-[720px]"
            key={list.id}
          >
            <Image
              src={list.image}
              width={800}
              height={800}
              layout="responsive"
              alt="grid_group_image"
              className="object-cover object-center hover:scale-125 transition-all ease-in-out duration-500 sm:h-full sm:w-full h-auto w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridGroup;
