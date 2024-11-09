import MainHeroBanner from "./components/banner/MainHeroBanner";
import CardHeroBlock from "./components/card/CardHeroBlock";
import FrequentlyAsk from "./components/faqs/FrequentlyAsk";

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
      />
      <FrequentlyAsk />
    </main>
  );
};

export default Home;
