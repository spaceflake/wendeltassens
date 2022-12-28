import Image, { StaticImageData } from 'next/image';

type Props = {
  catName: string;
  catImgUrl: string | StaticImageData;
  colorCode: string;
  status: string;
};

const KittenCard = ({ catName, catImgUrl, colorCode, status }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden w-[100px] relative">
      <Image
        src={catImgUrl}
        alt="Kattunge"
        className="w-[100px] aspect-square col-span-1"
      />
      <p className="absolute bottom-2 z-10 text-xs font-Montserrat font-bold col-span-1 bg-AngelBlue p-[6px] text-WhiteBG rounded left-1/2 -translate-x-1/2">
        {status}
      </p>
    </div>
  );
};

export default KittenCard;
