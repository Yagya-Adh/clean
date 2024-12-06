"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import navbarData from "@/lib/data/navbarData.json";
import { useState } from "react";

interface InavabarData {
  id: number;
  path: string;
  name: string;
}
const data: InavabarData[] = navbarData;

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavBarToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav>
      <div className="mx-auto max-w-screen-3xl px-4 pt-10 md:pt-4">
        <div className="flex items-center justify-between w-full lg:py-10 relative">
          <Link href="/">
            <Image
              src="/assets/logo/cleanlogo.png"
              alt="logo_nav_"
              height={200}
              width={200}
              className="h-8 lg:h-14 min-h-10 w-auto object-cover origin-center"
            />
          </Link>
          <ul className="hidden lg:flex justify-center flex-row items-center p-0">
            {data?.slice(0, 5).map((list) => (
              <li key={list.id} className="inset-0 px-4 overflow-hidden group">
                <div className="translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500">
                  <Link
                    href={list.path}
                    className="text-xl uppercase font-inter font-light text-clean-black-10"
                  >
                    {list.name}
                  </Link>
                </div>
                <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500">
                  <Link
                    href={list.path}
                    className="text-xl uppercase font-inter font-light text-clean-black-10"
                  >
                    {list.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <button className="lg:hidden" onClick={handleNavBarToggle}>
            <FaBars className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>
      </div>

      <div
        className={`
          leading-10  
          z-20
          fixed 
          top-0 left-0 
          w-full h-full
          bg-clean-sliver-10 
          flex 
          flex-col 
          justify-center 
          items-center 
          transform 
          transition-transform 
          duration-500 
          ease-in-out 
          ${navOpen ? "translate-y-10" : "-translate-y-full"}`}
      >
        {data?.slice(0, 5).map((list) => (
          <Link
            key={list.id}
            className="text-center inset-0 text-4xl uppercase font-inter font-light text-clean-black-10 px-4"
            href={list.path}
            onClick={handleNavBarToggle}
          >
            {list.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
