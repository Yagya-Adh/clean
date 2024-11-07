import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const data = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/blog", name: "Blog" },
  { id: 5, path: "/contact", name: "Contact" },
];
const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-20">
        <div className="flex items-center justify-between w-full">
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
                className="text-xl uppercase font-mono font-thin text-clean-black-10 py-4 px-4"
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
          </ul>

          <div className="lg:hidden">
            <FaBars className="size-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
