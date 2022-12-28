import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type Props = {
  catName: string;
  catImgUrl: string | StaticImageData;
  born: string;
  mother: string;
  father: string;
  color: string;
  other?: string;
  pedigreeUrl?: string;
};

const AdultCatCard = ({
  catName,
  catImgUrl,
  born,
  mother,
  father,
  color,
  other,
  pedigreeUrl,
}: Props) => {
  return (
    <article className="font-Montserrat p-9 bg-WhiteBG rounded-xl shadow-lg flex max-h-[500px]">
      <Image
        src={catImgUrl}
        alt={catName}
        className="h-auto w-auto rounded-md grow object-cover object-top"
      ></Image>
      <div className="p-8 pb-0 flex flex-col grow">
        <span className="font-thin">SE*Wendeltassens</span>
        <h4 className="not-italic">{catName}</h4>
        <div className="divide-y divide-dashed divide-[#E1DFDE] text-sm text-DarkBrown grow mt-5">
          <div className="flex justify-between py-2">
            <span className="font-medium text-">Född</span>
            <span className="font-bold">{born}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-">Mor</span>
            <span className="font-bold">{mother}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-">Fader</span>
            <span className="font-bold">{father}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium text-">Täckning</span>
            <span className="font-bold">{color}</span>
          </div>
          <div className="flex flex-col py-2">
            <span className="font-medium text-">Övrigt</span>
            <span className="font-bold">{other}</span>
          </div>
        </div>
        <div className="self-end">
          <Button text="Stamtavla" goTo={pedigreeUrl} />
        </div>
      </div>
    </article>
  );
};

export default AdultCatCard;
