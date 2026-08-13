import BlogCards from "@/components/BlogCards";
import BlogCardItem from "@/components/BlogCardItem";
import CategoryBox from "@/components/CategoryBox";
import Seo from "@/components/common/Seo";

export default function Blog() {
  return (
    <>
      <Seo title="Blogs" />
      <BlogCards />
      <CategoryBox />
      <BlogCardItem />
    </>
  );
}
