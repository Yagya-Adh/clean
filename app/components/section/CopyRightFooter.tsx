const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="max-w-screen-5xl -translate-y-20 mx-auto w-full flex flex-col lg:flex-row items-center justify-center md:justify-between border-t-2 border-t-black pt-6 md:pt-8 lg:pt-10 gap-2">
      <p className="2xl:text-3xl 2xl:max-w-screen-xl text-lg md:text-xl lg:py-4 font-inter font-light text-center max-w-60 md:max-w-xl md:px-2 tracking-wider">
        © {currentYear} Cleaners. All Rights Reserved.
      </p>
      <p className="2xl:text-3xl 2xl:max-w-screen-xl text-lg md:text-xl lg:py-4 font-inter font-light text-center max-w-52 md:max-w-xl md:px-2 tracking-wider">
        Powered By{" "}
        <a href="https://www.jamstackers.com" target="_blank">
          Jamstackers
        </a>{" "}
        Built By{" "}
        <a href="https://www.jamstackers.com" target="_blank">
          Jamstackers
        </a>
      </p>
    </section>
  );
};

export default CopyRightFooter;
