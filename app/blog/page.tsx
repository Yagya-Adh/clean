import CustomHeader from "../components/banner/CustomHeader";
import SectionBanner from "../components/banner/SectionBanner";
import ImageCardGroup from "../components/card/ImageCardGroup";

const BlogPage = () => {
  return (
    <main>
      <CustomHeader
        icon="/assets/icon/happyPlus.svg"
        slug="News & Insights"
        title="Blog"
        describe="Stay tuned for helpful guides and inspiring content."
        descriptionMaxwidth="max-w-sm"
        isdescribeCapital={true}
        fadeAnimation="animate-fadeInUp"
        variant="without-button"
      />
      <SectionBanner
        variant="blog"
        heading="Latest Posts"
        topic="Our recent articles"
        slug="Simplify your tasks and maintaining the cleanliness."
      />
      <ImageCardGroup />
    </main>
  );
};

export default BlogPage;
