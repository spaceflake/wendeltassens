import Image from 'next/image';
import paw from '../public/paw.svg';
import Button from './Button';

type Props = {
  cat: Cat;
  inverted?: boolean;
};

const CatCard = ({ cat, inverted }: Props) => {
  return (
    <article
      className={` relative font-Montserrat p-5 lg:p-9 bg-WhiteBG  rounded-xl shadow-lg flex flex-col lg:max-h-[500px] w-full max-w-[1000px] ${
        inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className="overflow-hidden">
        <Image
          src={cat.catImgUrl}
          alt={cat.name}
          height={300}
          width={300}
          className="object-contain w-auto h-auto mx-auto rounded-md max-sm:max-h-[200px] "
        />
      </div>
      <div className="flex flex-col p-4 pb-0 lg:p-8 grow">
        <span className="font-thin">{cat.breeder}</span>
        <h4 className="text-2xl not-italic lg:text-4xl">{cat.name}</h4>
        <div className="divide-y divide-dashed divide-[#E1DFDE] text-sm text-DarkBrown grow mt-5">
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium text-">Född</span>
            <span className="font-bold text-right">
              {cat.birthDate.split('T')[0]}
            </span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium text-">Mor</span>
            <span className="font-bold text-right">{cat.motherName}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium text-">Fader</span>
            <span className="font-bold text-right">{cat.fatherName}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
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
      <Image
        src={paw}
        alt=""
        className="absolute right-0 top-1/3 sm:top-1/2 lg:top-0 fill-none"
      />
    </article>
  );
};

export default CatCard;
