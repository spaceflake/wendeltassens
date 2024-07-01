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
      className={` relative font-Montserrat p-5 lg:p-9 bg-WhiteBG  rounded-xl shadow-lg flex flex-col lg:h-auto w-full max-w-[1000px] ${
        inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className="relative w-full max-w-md overflow-hidden min-w-1/3 h-72 lg:h-auto grow-0 shrink-0">
        <Image
          src={cat.catImgUrl}
          alt={`Bild på katten ${cat.name}`}
          className="object-contain w-auto h-full rounded-lg lg:object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <span className="font-medium">Mor</span>
            <span className="font-bold text-right">{cat.motherName}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Fader</span>
            <span className="font-bold text-right">{cat.fatherName}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Täckning</span>
            <span className="font-bold text-right">{cat.colorCode}</span>
          </div>
          <div className="flex flex-col py-2">
            <span className="mb-2 font-medium">Övrigt</span>
            <span className="font-bold">{cat.information}</span>
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
