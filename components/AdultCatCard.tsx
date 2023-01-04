import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type Props = {
  breeder?: string;
  catName: string;
  catImgUrl: string | StaticImageData;
  born: string;
  mother: string;
  father: string;
  color: string;
  other?: string;
  pedigreeUrl?: string;
  inverted?: boolean;
};

const AdultCatCard = ({
  breeder,
  catName,
  catImgUrl,
  born,
  mother,
  father,
  color,
  other,
  pedigreeUrl,
  inverted,
}: Props) => {
  return (
    <article
      className={`font-Montserrat p-5 lg:p-9 bg-WhiteBG rounded-xl shadow-lg flex flex-col lg:max-h-[500px] w-full max-w-[1000px] ${
        inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <Image
        src={catImgUrl}
        alt={catName}
        width={500}
        height={500}
        className="h-auto w-auto rounded-md grow object-cover object-top aspect-video"
      ></Image>
      <div className="p-4 lg:p-8 pb-0 flex flex-col grow">
        <span className="font-thin">{breeder}</span>
        <h4 className="not-italic text-2xl lg:text-4xl">{catName}</h4>
        <div className="divide-y divide-dashed divide-[#E1DFDE] text-sm text-DarkBrown grow mt-5">
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Född</span>
            <span className="font-bold text-right">{born}</span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Mor</span>
            <span className="font-bold text-right">{mother}</span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Fader</span>
            <span className="font-bold text-right">{father}</span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Täckning</span>
            <span className="font-bold text-right">{color}</span>
          </div>
          <div className="flex flex-col py-2">
            <span className="font-medium text-">Övrigt</span>
            <span className="font-bold text-right">{other}</span>
          </div>
        </div>
        <div className="self-end mt-4">
          <Button text="Stamtavla" goTo={pedigreeUrl} />
        </div>
      </div>
    </article>
  );
};

export default AdultCatCard;
