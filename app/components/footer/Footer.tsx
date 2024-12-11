import RequestAFreeQuote from "../card/RequestAFreeQuote";
import CopyRightFooter from "../section/CopyRightFooter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="bg-clean-green-10 mt-36 relative px-4">
      <div className="relative animate-fadeInUp flex flex-col justify-center items-center w-full z-10">
        <RequestAFreeQuote />
      </div>
      <section className="max-w-screen-5xl px-4 lg:px-10 mx-auto relative py-4 2xl:py-20 -translate-y-24">
        <div className="flex flex-col justify-center sm:flex-row lg:grid lg:grid-cols-2 items-center md:grid-cols-2 gap-0 sm:gap-10  2xl:gap-80 place-items-start h-full w-full 2xl:w-full">
          <div>
            <FooterLeft />
          </div>
          <div>
            <FooterRight />
          </div>
        </div>
      </section>
      <CopyRightFooter />
    </footer>
  );
};

export default Footer;
