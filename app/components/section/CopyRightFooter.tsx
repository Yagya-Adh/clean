const CopyRightFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="max-w-screen-3xl mx-auto w-full flex flex-col md:flex-row items-center justify-center md:justify-between border-t-2 border-t-black py-3 sm:py-10">
      <p className="md:text-2xl py-2 sm:py-4 font-inter font-normal md:font-light text-center max-w-60 md:max-w-xl md:px-2">
        © {currentYear} Cleaners. All Rights Reserved.
      </p>
      <p className="md:text-2xl sm:py-4 font-inter font-normal md:font-light text-center max-w-52 md:max-w-xl md:px-2">
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
