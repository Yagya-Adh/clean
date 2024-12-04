import { Metadata } from "next";
import ContactMain from "../components/contact/ContactMain";

export const metadata: Metadata = {
  title: "Contact - Cleaner",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Contact - Cleaner",
    description: "Cleaning service template for your home, office, soon...",
    images: ["/assets/logo/cleanlog.png"],
  },
};
const ContactPage = () => {
  return <ContactMain />;
};

export default ContactPage;
