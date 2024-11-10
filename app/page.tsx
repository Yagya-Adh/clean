import CustomHeader from "./components/banner/CustomHeader";
import MainHeroBanner from "./components/banner/MainHeroBanner";
import SectionBanner from "./components/banner/SectionBanner";
import CardHeroBlock from "./components/card/CardHeroBlock";
import ImageCardGroup from "./components/card/ImageCardGroup";
import ValueNumber from "./components/card/ValueNumber";
import FrequentlyAsk from "./components/faqs/FrequentlyAsk";
import ProfessionalCleaning from "./components/section/ProfessionalCleaning";
import Testimonials from "./components/section/Testimonials";

const Home = () => {
  return (
    <main>
      <MainHeroBanner />
      <CardHeroBlock
        head="FRESH"
        preTitle="Home"
        italicTitle=" Refresh."
        describe="Experience the ultimate expert cleaning — Creating spaces where comfort and productivity thrive."
        textOrder="order-1"
        cleanCycle="2X"
        cleanType="Deep Cleaning"
        iconPath="/assets/icon/happyPlus.svg"
        imagePath="/assets/images/cleanhomerefresh.webp"
        positionCard="absolute top-20 right-40"
      />
      <CardHeroBlock
        head="Regular"
        preTitle="Office"
        italicTitle=" Cleaners."
        describe="The cleaning team that cares — Experts in creating pristine homes and productive workspaces."
        textOrder="order-0"
        cleanCycle="24/7"
        cleanType="Maintenance"
        iconPath="/assets/icon/brush.svg"
        imagePath="/assets/images/officeMaintenance.webp"
        positionCard="absolute top-20 -left-24"
      />
      <SectionBanner
        variant="blog"
        heading="Latest Posts"
        topic="Our recent articles"
        slug="Simplify your tasks and maintaining the cleanliness."
      />
      <ValueNumber />
      <ProfessionalCleaning />
      <Testimonials />
      <SectionBanner
        variant="blog"
        heading="Latest Posts"
        topic="Our recent articles"
        slug="Simplify your tasks and maintaining the cleanliness."
      />
      <ImageCardGroup />
      <CustomHeader
        icon="/assets/logo/faq.svg"
        slug="FAQS"
        title="Have Questions?"
        describe="We’re committed to making your experience as smooth and straightforward as possible."
        descriptionMaxwidth="max-w-lg"
        variant="without-button"
      />
      <FrequentlyAsk />
    </main>
  );
};

export default Home;
