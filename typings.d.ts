type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface ComponentBase extends Base {
  title: string;
  text: string | null;
}

interface Hero extends ComponentBase {
  title: string;
  heroImage: string;
  heroTitle: string;
  addButton: boolean;
  heroText: string;
  heroButtonPath: string;
  heroButtonText: string;
  alt?: string;
}

interface TextField extends ComponentBase {
  text: string;
  initialCapital: 'true' | 'false';
  content?: any;
}

interface Post extends Base {
  title: string;
  text: string;
  imageUrl: string;
  publishedAt: string;
  alt?: string;
}

interface PostContainer extends ComponentBase {
  title: string;
  posts: Post[];
}

interface Carousel extends ComponentBase {
  imageList: string[];
}

interface Cat extends ComponentBase {
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
interface Kitten extends ComponentBase {
  catImgUrl: string;
  status: string;
  name: string;
  colorCode: string;
  gender: string;
}

interface Match extends ComponentBase {
  name: string;
  title: string;
  motherImgUrl: string;
  fatherImgUrl: string;
  motherName: string;
  fatherName: string;
  pedigreeUrl: string;
  description: string;
}

interface Faq extends ComponentBase {
  title: string;
  text: string;
}

interface IntroTextHome extends ComponentBase {
  title: string;
  text: string;
}

interface TextboxBordered extends ComponentBase {
  title: string;
  text: TextField;
  buttonPath?: string;
  buttonText?: string;
}

interface Litter extends ComponentBase {
  title: string;
  birthDate: string;
  mother: string;
  father: string;
  pedigreeUrl: string;
  kittens: Kitten[];
}

interface CatOverview extends ComponentBase {
  title: string;
  cats: Cat[];
}

interface MatchOverview extends ComponentBase {
  matches: Match[];
}

interface KittenSection extends ComponentBase {
  litters: Litter[];
}

interface FAQOverview extends ComponentBase {
  faqs: Faq[];
}

interface ContactInformation extends ComponentBase {
  name: string;
  email: string;
  phoneNumber: string;
}

interface FormSection extends ComponentBase {
  text: string;
  contactInformation: ContactInformation;
}

interface Link extends ComponentBase {
  title: string;
  text: string;
  isInternalLink: boolean;
  internalLink?: string;
  externalLink?: string;
}

interface ExternalLink {
  text: string;
  url: string;
}

interface Page extends Base {
  sections: Section[];
}

interface PageNav {
  title: string;
  slug: string;
}

interface ComponentSection extends ComponentBase {
  title: string;
  type: 'sectionBordered' | 'sectionDivider' | 'section';
  component: Component[];
}

type Section =
  | KittenSection
  | Faq
  | IntroTextHome
  | TextboxBordered
  | Carousel
  | PostContainer
  | ContactInformation
  | FormSection
  | Hero;

type Component =
  | ComponentBase
  | TextField
  | MatchOverview
  | FAQOverview
  | CatOverview
  | Link;
