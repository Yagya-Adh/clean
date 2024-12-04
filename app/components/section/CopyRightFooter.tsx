import React from "react";

const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="max-w-screen-3xl mx-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-between border-t-2 border-t-black">
      <p className="text-2xl py-10 font-inter font-light">
        © {currentYear} Cleaners. All Rights Reserved.
      </p>
      <p className="text-2xl py-10 font-inter font-light">
        Powered By{" "}
        <a href="https://wwww.jamstackers.com" target="_blank">
          Jamstackers
        </a>{" "}
        Built By{" "}
        <a href="https://wwww.jamstackers.com" target="_blank">
          Jamstackers
        </a>
      </p>
    </section>
  );
};

export default CopyRightFooter;
