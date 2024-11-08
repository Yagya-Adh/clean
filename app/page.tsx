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
      />
      <FrequentlyAsk />
    </main>
  );
};

export default Home;
