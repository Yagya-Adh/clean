import CustomHeader from "../components/banner/CustomHeader";
import SectionBanner from "../components/banner/SectionBanner";
import CleanCardGroup from "../components/card/CleanCardGroup";
import CleanImageCard from "../components/card/CleanImageCard";
import ValueNumber from "../components/card/ValueNumber";
import OurTeam from "../components/slider/OurTeam";

const About = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/icon/spray.svg"
        slug="Go-To Cleaners"
        title="ABOUT US"
        describe="we’re passionate about Delivering exceptional cleaning that go beyond expectations."
        descriptionMaxwidth="max-w-sm"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInUp"
        variant="with-button"
      />
      <CleanImageCard />
      <SectionBanner
        variant="about"
        heading="Our Team"
        topic="GET TO KNOW"
        slug="Meet the dedicated professionals behind our top-tier cleaning services. Relax on the weekends."
      />
      <OurTeam />
      <ValueNumber />
      <CleanCardGroup />
    </main>
  );
};

export default About;
