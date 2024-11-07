import CustomHeader from "../components/banner/CustomHeader";
import CardTimeLine from "../components/timeline/CardTimeLine";

const ServicesPage = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/icon/checked.svg"
        slug="Expert Cleaning"
        title="Services"
        describe="Quality & Expert Cleaning for individuals and companies."
        descriptionMaxwidth="max-w-sm"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInLeft"
        variant="without-button"
      />
      <CardTimeLine />
    </main>
  );
};

export default ServicesPage;
