import Image, { StaticImageData } from 'next/image';
import Button from './Button';

type Props = {
  cat: Cat;
  inverted?: boolean;
};

const AdultCatCard = ({ cat, inverted }: Props) => {
  return (
    <article
      className={`font-Montserrat p-5 lg:p-9 bg-WhiteBG rounded-xl shadow-lg flex flex-col lg:max-h-[500px] w-full max-w-[1000px] ${
        inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <Image
        src={cat.catImgUrl}
        alt={cat.name}
        width={500}
        height={500}
        className="h-auto w-auto rounded-md grow object-cover object-top aspect-video"
      ></Image>
      <div className="p-4 lg:p-8 pb-0 flex flex-col grow">
        <span className="font-thin">{cat.breeder}</span>
        <h4 className="not-italic text-2xl lg:text-4xl">{cat.name}</h4>
        <div className="divide-y divide-dashed divide-[#E1DFDE] text-sm text-DarkBrown grow mt-5">
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Född</span>
            <span className="font-bold text-right">
              {cat.birthDate.split('T')[0]}
            </span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Mor</span>
            <span className="font-bold text-right">{cat.motherName}</span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Fader</span>
            <span className="font-bold text-right">{cat.fatherName}</span>
          </div>
          <div className="flex justify-between py-2 gap-3">
            <span className="font-medium text-">Täckning</span>
            <span className="font-bold text-right">{cat.colorCode}</span>
          </div>
          <div className="flex flex-col py-2">
            <span className="font-medium text-">Övrigt</span>
            <span className="font-bold text-right">{cat.information}</span>
          </div>
        </div>
        <div className="self-end mt-4">
          <Button text="Stamtavla" goTo={cat.pedigreeUrl} />
        </div>
      </div>
    </article>
  );
};

export default AdultCatCard;
