import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type Props = {
  text: string;
  image: string | StaticImageData;
  hasLink?: boolean;
  linkUrl?: string;
};

const TextAndImage = ({ text, image, hasLink, linkUrl }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto font-Montserrat text-DarkBrown items-center bg-Beige/50 p-8 gap-8 rounded-xl mb-10">
      <div>
        <p className="max-w-prose text-lg mb-8">{text}</p>
        {hasLink && <Button text="Läs mer" goTo={linkUrl} />}
      </div>
      <Image
        src={image}
        alt="Kattunge med dvärgväxt"
        className="w-auto mx-auto h-auto rounded-xl"
      />
    </div>
  );
};

export default TextAndImage;
