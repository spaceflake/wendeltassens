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
    <div className="flex flex-col items-center gap-8 p-8 mx-auto mb-10 lg:flex-row font-Montserrat text-DarkBrown bg-Beige/50 rounded-xl">
      <div>
        <p className="mb-8 text-lg max-w-prose">{text}</p>
        {hasLink && <Button text="Läs mer" goTo={linkUrl} />}
      </div>
      <div>
        <Image
          src={image}
          height={300}
          width={300}
          alt="Kattunge med dvärgväxt"
          className="w-auto h-auto mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default TextAndImage;
