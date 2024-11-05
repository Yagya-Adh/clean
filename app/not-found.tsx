import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <main>
      <Image
        src="/assets/images/pagenotfound.webp"
        alt="not-found"
        width={1000}
        height={1000}
        className="-z-10"
      />

      <div className="absolute top-0 left-0 z-10">
        <div className="bg-black/40 w-screen h-screen">
          <article className="flex flex-col justify-center items-center">
            <Image
              src="/assets/icon/warnchat.png"
              alt="not-found"
              width={150}
              height={150}
              className="bg-transparent bg-white"
            />

            <h1 className="text-7xl max-w-96 text-center text-clean-green-10">
              Page Not Found
            </h1>
            <p>
              The page you are looking for doesn&apos;t exist or has been moved
            </p>

            <Link
              href="/"
              className="
            px-4 py-2 
            text-xl
            text-black 
            hover:text-white
            rounded-xl
            bg-clean-green-10
            hover:bg-black
            "
            >
              Back To Home
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
