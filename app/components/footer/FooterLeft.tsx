import Image from "next/image";
import Link from "next/link";
import footerIconData from "@/lib/data/footerIcon.json";
import { InstaGramIcom, TiktokIcon, YoutubeIcon } from "@/app/icons";

interface IsocialIcon {
  id: number;
  icon: string;
  url: string;
  name: string;
}
const socialIcon: IsocialIcon[] = footerIconData;

const FooterLeft = () => {
  return (
    <div className="text-center md:text-start flex flex-col justify-center items-center md:items-start">
      <Link href="/">
        <Image
          src="/assets/logo/cleanlogo.png"
          width={200}
          height={200}
          alt="footer_logo_"
          className="h-10 sm:h-14 w-auto"
        />
      </Link>
      <div className="flex flex-row items-center py-4">
        {socialIcon?.slice(0, 3).map((list) => (
          <div key={list.id}>
            {list.name == "instagram" && (
              <Link href={list.url} target="_blank">
                <InstaGramIcom className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
              </Link>
            )}
            {list.name == "tiktok" && (
              <Link href={list.url} target="_blank">
                <TiktokIcon className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
              </Link>
            )}

            {list.name == "youtube" && (
              <Link href={list.url} target="_blank">
                <YoutubeIcon className="w-6 h-6 rounded-full mx-2 fill-white bg-black p-1" />
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="text-lg lg:text-2xl font-inter font-normal max-w-60 py-2 lg:max-w-60 text-clean-black-10">
        Efficient Cleaning, Exceptional Results.
      </p>
    </div>
  );
};

export default FooterLeft;
