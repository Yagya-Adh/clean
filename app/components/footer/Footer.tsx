import RequestAFreeQuote from "../card/RequestAFreeQuote";
import CopyRightFooter from "../section/CopyRightFooter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="bg-clean-green-10 mt-36 relative px-4 ">
      <div className="relative animate-fadeInUp flex flex-col justify-center items-center w-full z-10">
        <RequestAFreeQuote />
      </div>
      <section className="max-w-screen-3xl px-4 lg:px-10 mx-auto relative py-4 -translate-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-10 h-full w-full">
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
