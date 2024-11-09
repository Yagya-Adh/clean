import RequestAFreeQuote from "../card/RequestAFreeQuote";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="bg-clean-green-10 flex flex-col justify-center items-center mt-96">
      <div className="relative -top-44 animate-fadeInUp">
        <RequestAFreeQuote />
      </div>
      <section className="max-w-screen-2xl px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">
          <aside>
            <FooterLeft />
          </aside>
          <aside>
            <FooterRight />
          </aside>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
