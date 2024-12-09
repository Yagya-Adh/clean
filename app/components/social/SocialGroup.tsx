import socialIcons from "@/lib/data/socialIcons.json";
import { InstaGramIcom, TiktokIcon, YoutubeIcon } from "@/app/icons";
import Link from "next/link";

interface IsocialIconsData {
  id: number;
  social: string;
  name: string;
  linkPath: string;
}
const data: IsocialIconsData[] = socialIcons;

const SocialGroup = () => {
  return (
    <div className="flex flex-row items-center">
      {data.map((list) => (
        <div className="mx-2" key={list.id}>
          {list.name == "instagram" && (
            <Link href={list.linkPath} target="_blank">
              <InstaGramIcom className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
            </Link>
          )}
          {list.name == "tiktok" && (
            <Link href={list.linkPath} target="_blank">
              <TiktokIcon className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
            </Link>
          )}
          {list.name == "youtube" && (
            <Link href={list.linkPath} target="_blank">
              <YoutubeIcon className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialGroup;
