import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="bg-clean-green-10">
      <section className="max-w-screen-2xl px-10 mx-auto py-40 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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
