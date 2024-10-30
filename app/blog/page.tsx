import CustomHeader from "../components/banner/CustomHeader";
import SectionBanner from "../components/banner/SectionBanner";

const BlogPage = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/logo/happyPlus.svg"
        slug="News & Insights"
        title="Blog"
        describe="Stay tuned for helpful guides and inspiring content."
        descriptionMaxwidth="max-w-72"
        isdescribeCapital={true}
      />
      <SectionBanner
        heading="Latest Posts"
        topic="Our recent articles"
        slug="Simplify your tasks and maintaining the cleanliness."
      />
    </main>
  );
};

export default BlogPage;
