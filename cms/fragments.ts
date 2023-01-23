export const heroFragment: string = `
_type == 'hero' => {
  title,
  "heroImage": heroImage.asset->url,
  heroTitle,
  addButton,
  heroText,
  heroButtonPath,
  heroButtonText,
}`;

export const postContainerFragment: string = `
  _type == 'postContainer' => {
    ...,
    posts[]->{
      ...,
      "imageUrl": image.asset->url,
    }
  }
`;

export const catOverviewFragment: string = `
_type == 'catOverview' => {
  cats[]->{
    ...,
    "catImgUrl": catImgUrl.asset->url,
  }
}`;

export const kittenSectionFragment: string = `
_type == 'kittenSection' => {
  ...,
  "litters": litters[]->{
    ...,
    "kittens": kittens[]->{
      ...,
      "catImgUrl": catImgUrl.asset->url,
    },
  },
}`;

export const matchOverviewFragment: string = `
_type == 'matchOverview' => {
  ...,
  "matches": matches[]->{
    ...,
    "fatherImgUrl": fatherImgUrl.asset->url,
    "motherImgUrl": motherImgUrl.asset->url,
  },
}`;

export const textFieldFragment: string = `
_type == 'textField' => {
  ...,
  content[] => {
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }
}`;

export const faqOverviewFragment: string = `
  _type == 'FAQOverview' => {
    ...,
    "faqs": faqs[]->{
      ...,
    }
  }`;

export const linkFragment: string = `
  _type == 'link' => {
    ...,
    "internalLink": internalLink->slug,
  }`;

export const sectionFragment: string = `
  _type == 'section' => {
    ...,
    "component": component[]->{
      ...,
      ${textFieldFragment},
      ${matchOverviewFragment},
      ${faqOverviewFragment},
      ${catOverviewFragment},
      ${linkFragment},
    }
  }`;

export const formSectionFragment: string = `
  _type == 'formSection' => {
    ...,
    contactInformation ->{
      ...,
    },
  }`;

export const carouselFragment: string = `
  _type == 'carousel' => {
    ...,
    "imageList": imageList[].asset->url,
  }`;

export const termsFragment: string = `
  _type == 'terms' => {
    ...,
    content[]{
      ...,
    }
  }`;
