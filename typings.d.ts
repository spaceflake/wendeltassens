type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  _id: string;
  title: string;
  text: string;
  imageUrl: string;
  publishedAt: string;
}

type Component = {
  _type: string | null;
  title: string;
  text: string | null;
};

type Page = {
  heroTitle: string;
  heroImgUrl: string;
  heroBtnPath: string;
  components: Component[];
}[];
