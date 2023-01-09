type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  title: string;
  text: string;
  imageUrl: string;
  publishedAt: string;
}

interface PostContainer extends Component {
  title: string;
  posts: Post[];
}

interface Component extends Base {
  title: string;
  text: string | null;
}

interface Carousel extends Component {
  imageList: string[];
}

interface Cat extends Component {
  catImgUrl: string;
  breeder: string;
  name: string;
  birthDate: string;
  motherName: string;
  fatherName: string;
  colorCode: string;
  information: string;
  pedigreeUrl: string;
  gender: string;
}
interface Kitten extends Component {
  catImgUrl: string;
  status: string;
  name: string;
  colorCode: string;
  gender: string;
}

interface Match extends Component {
  name: string;
  title: string;
  motherImgUrl: string;
  fatherImgUrl: string;
  motherName: string;
  fatherName: string;
  pedigreeUrl: string;
}

interface Faq extends Component {
  title: string;
  text: string;
}

interface IntroTextHome extends Component {
  title: string;
  text: string;
}

interface Textblock extends Component {
  title: string;
  page: string;
  section: string;
  text: string;
}

interface TextboxBordered extends Component {
  title: string;
  text: string;
}

interface TextImageCard extends Component {
  title: string;
  text: string;
  image: string;
  link: string;
}
interface Litter extends Component {
  title: string;
  birthDate: string;
  mother: string;
  father: string;
  pedigreeUrl: string;
  kittens: Kitten[];
}

interface CatSection extends Component {
  title: string;
  cats: Cat[];
}

interface MatchSection extends Component {
  matches: Match[];
}

interface KittenSection extends Component {
  litters: Litter[];
}

interface FAQSection extends Component {
  faqs: Faq[];
}

interface ContactInformation extends Component {
  name: string;
  email: string;
  phoneNumber: string;
}

type Component =
  | CatSection
  | MatchSection
  | KittenSection
  | Faq
  | IntroTextHome
  | Textblock
  | TextboxBordered
  | TextImageCard
  | Carousel
  | PostContainer
  | FAQSection
  | ContactInformation;

interface Page extends Base {
  title: string;
  heroTitle: string;
  heroImgUrl: string;
  heroBtnPath: string;
  heroBtnText: string;
  addButton: boolean;
  components: Component[];
}
