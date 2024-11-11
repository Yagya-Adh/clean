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
    setNavOpen(!false);
  };

  return (
    <nav>
      <div className="mx-auto max-w-screen-2xl px-4 relative">
        <div className="flex items-center justify-between w-full lg:py-4 relative">
          <Link href="/">
            <Image
              src="/assets/logo/cleanlogo.png"
              alt="logo_nav_"
              height={200}
              width={200}
            />
          </Link>
          <ul className="hidden md:flex justify-center flex-row items-center">
            {data?.slice(0, 5).map((list) => (
              <li
                key={list.id}
                className="inset-0 text-xl uppercase font-inter font-light text-clean-black-10 px-4"
              >
                <div className="overflow-hidden group">
                  <div className="translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-500">
                    <Link href={list.path}>{list.name}</Link>
                  </div>
                  <div className="translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-500">
                    <Link href={list.path}>{list.name}</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>{" "}
          <div className="lg:hidden" onClick={handleNavBarToggle}>
            <FaBars className="size-8" />
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="absolute top-0 left-0  bg-clean-sliver-10 z-20 md:hidden">
          <ul className="flex flex-col justify-center items-center h-screen fixed top-0 left-0 py-10 z-10 bg-black/30 w-full">
            {data?.slice(0, 5).map((list) => (
              <li key={list.id} className="py-10">
                <div className="leading-10 text-center inset-0 text-6xl uppercase font-inter font-light text-clean-black-10 px-4">
                  <Link href={list.path}>{list.name}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
