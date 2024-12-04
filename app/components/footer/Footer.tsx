import RequestAFreeQuote from "../card/RequestAFreeQuote";
import CopyRightFooter from "../section/CopyRightFooter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="bg-clean-green-10 flex flex-col justify-center items-center mt-96 w-full">
      <div className="relative -top-44 left-0 animate-fadeInUp">
        <RequestAFreeQuote />
      </div>
      <section className="max-w-screen-2xl px-4 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
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
