import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import navbarData from "@/lib/data/navbarData.json";
interface InavabarData {
  id: number;
  path: string;
  name: string;
}
const data: InavabarData[] = navbarData;

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <div className="flex items-center justify-between w-full py-4">
          <Link href="/">
            <Image
              src="/assets/logo/cleanlogo.png"
              alt="logo_nav_"
              height={200}
              width={200}
            />
          </Link>
          <ul className="hidden lg:flex items-center">
            {data?.slice(0, 5).map((list) => (
              <li
                key={list.id}
                className="text-xl uppercase font-mono font-thin text-clean-black-10 px-4"
              >
                <div className="overflow-hidden group">
                  <div
                    className={`translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500`}
                  >
                    <Link href={list.path}>{list.name}</Link>
                  </div>
                  <div
                    className={`translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500`}
                  >
                    <Link href={list.path}>{list.name}</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>{" "}
          <div className="lg:hidden">
            <FaBars className="size-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
