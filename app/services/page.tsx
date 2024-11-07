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
        descriptionMaxwidth="max-w-72"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInUp"
        variant="without-button"
      />
      <CardTimeLine />
    </main>
  );
};

export default ServicesPage;
