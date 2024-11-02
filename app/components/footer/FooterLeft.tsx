import Image from "next/image";
import Link from "next/link";
import footerIconData from "@/footerIcon.json";

interface IsocialIcon {
  id: number;
  icon: string;
}
const socialIcon: IsocialIcon[] = footerIconData;

const FooterLeft = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/assets/logo/cleanlogo.png"
          width={200}
          height={200}
          alt="footer_logo_"
        />
      </Link>
      <div className="flex flex-row  items-center py-2">
        {socialIcon?.slice(0, 3).map((list) => (
          <Image
            src={list.icon}
            width={20}
            height={20}
            alt="footer_logo_"
            key={list.id}
            className="mx-1"
          />
        ))}
      </div>
      <p className="text-sm font-mono max-w-60">
        Efficient Cleaning, Exceptional Results.
      </p>
    </>
  );
};

export default FooterLeft;
