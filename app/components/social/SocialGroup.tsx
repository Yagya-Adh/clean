import Image from "next/image";
import socialIcons from "@/lib/data/socialIcons.json";

interface IsocialIconsData {
  id: number;
  social: string;
}
const data: IsocialIconsData[] = socialIcons;

const SocialGroup = () => {
  return (
    <div className="flex flex-row items-center ">
      {data.map((list) => (
        <div className="mx-2" key={list.id}>
          <Image
            src={list.social}
            alt="social"
            width={20}
            height={20}
            className="object-center object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialGroup;
