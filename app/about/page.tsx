import CustomHeader from "../components/banner/CustomHeader";

const About = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/icon/spray.svg"
        slug="Go-To Cleaners"
        title="ABOUT US"
        describe="we’re passionate about Delivering exceptional cleaning that go beyond expectations."
        descriptionMaxwidth="max-w-96"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInUp"
        variant="with-button"
      />
    </main>
  );
};

export default About;
