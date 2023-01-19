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

export const catSectionFragment: string = `
_type == 'catSection' => {
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
}`;

export const sectionFragment: string = `
  _type == 'section' => {
    ...,
    "component": component[]->{
      ...,
      ${textFieldFragment},
      ${matchOverviewFragment}
    }
  }`;
