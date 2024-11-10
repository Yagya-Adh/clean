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
      <div className="columns-2 break-after-avoid h-full">
        {data.slice(0, 4).map((list) => (
          <div
            className={`rounded-[43px] overflow-hidden mb-5 shadow-lg transition-transform duration-500 ease-in-out`}
            key={list.id}
          >
            <Image
              src={list.image}
              width={600}
              height={600}
              layout="responsive"
              alt="grid_group_image"
              className="object-cover object-center hover:scale-110 transition-all ease-in-out duration-500 !h-full w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridGroup;
