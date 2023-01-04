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

type BaseComponent = {
  _type: string | null;
  title: string;
  text: string | null;
};

type Cat = {
  catImgUrl: string;
  breeder: string;
  name: string;
  birthDate: string;
  motherName: string;
  fatherName: string;
  colorCode: string;
  information: string;
  pedigreeUrl: string;
};

interface CatSection extends BaseComponent {
  cats: Cat[];
}

type Component = BaseComponent | CatSection;

type Page = {
  heroTitle: string;
  heroImgUrl: string;
  heroBtnPath: string;
  heroBtnText: string;
  components: Component[];
}[];
