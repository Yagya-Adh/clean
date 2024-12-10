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
      <div className="mx-auto max-w-screen-4xl px-4 sm:px-20 pt-10 pb-8 lg:pb-0">
        <div className="flex items-center justify-between w-full lg:py-10 relative">
          <Link href="/">
            <Image
              src="/assets/logo/cleanlogo.png"
              alt="logo_nav_"
              height={180}
              width={180}
              className="min-h-5 max-h-14 h-7 sm:h-9 xl:h-auto w-auto object-cover origin-center 2xl:h-96"
            />
          </Link>
          <ul className="hidden xl:flex justify-center flex-row items-center">
            {data?.slice(0, 5).map((list) => (
              <li key={list.id} className="inset-0  overflow-hidden group">
                <div className="translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500">
                  <Link
                    href={list.path}
                    className="h-8 text-sm md:text-xl px-2 md:px-4 uppercase font-inter font-light 2xl:text-3xl text-clean-black-10"
                  >
                    {list.name}
                  </Link>
                </div>
                <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500">
                  <Link
                    href={list.path}
                    className="h-8 text-sm md:text-xl px-2 md:px-4 uppercase font-inter font-light 2xl:text-3xl text-clean-black-10"
                  >
                    {list.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <button className="xl:hidden" onClick={handleNavBarToggle}>
            <FaBars className="h-5 w-5 md:h-7 md:w-7" />
          </button>
        </div>
      </div>
      <div
        role="button"
        onClick={handleNavBarToggle}
        className={`
          xl:hidden
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
            className="text-center inset-0 text-4xl uppercase font-inter font-light text-clean-black-10 px-4 py-4 sm:py-7 tracking-wider"
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
