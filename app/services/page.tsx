import { Metadata } from "next";
import CustomHeader from "../components/banner/CustomHeader";
import ImageGridGroup from "../components/section/ImageGridGroup";
import ProfessionalCleaning from "../components/section/ProfessionalCleaning";
import Testimonials from "../components/section/Testimonials";
import CardTimeLine from "../components/timeline/CardTimeLine";

export const metadata: Metadata = {
  title: "Services - Cleaner",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Services - Cleaner",
    description: "Cleaning service template for your home, office, soon...",
    images: ["/assets/logo/cleanlog.png"],
  },
};
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
      <ProfessionalCleaning />
      <Testimonials />
      <ImageGridGroup />
    </main>
  );
};

export default ServicesPage;
