import blogData from "@/blogData.json";
interface IUser {
  name: string;
  image: string;
}

interface IPage {
  id: number;
  title: string;
  describe: string;
}

interface IAuthor {
  name: string;
  publishDate: string;
}

interface IblogData {
  id: number;
  cardImage: string;
  cardDescription: string;
  cardTag: string;
  cardDate: string;
  user: IUser;
  mainTitle: string;
  mainDescription: string;
  author: IAuthor;
  conclusion: string;
  pages: IPage[];
  extraText: string;
}
const data: IblogData = blogData;

const ImageCardGroup = () => {
  return <section className="max-w-screen-2xl mx-auto px-10">{}</section>;
};

export default ImageCardGroup;
