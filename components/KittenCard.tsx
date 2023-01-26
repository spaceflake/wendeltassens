import Image, { StaticImageData } from 'next/image';

type Props = {
  catName: string;
  gender: string;
  catImgUrl: string | StaticImageData;
  colorCode: string;
  status: string;
};

const KittenCard = ({
  catName,
  catImgUrl,
  colorCode,
  status,
  gender,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 overflow-hidden rounded-lg shadow-md shrink-0 max-w-[300px] mx-auto">
      <div className="relative overflow-hidden">
        <Image
          src={catImgUrl}
          alt={`Bild på kattungen ${catName}`}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2 py-2 pl-2 pr-6 text-sm text-DarkBrown">
        <div className="leading-tight">
          <p className="font-bold">{catName}</p>
          <p className="font-medium">{gender}</p>
          <p className="font-medium">{colorCode}</p>
        </div>
        <p
          className={`text-xs font-Montserrat font-bold col-span-1 ${
            status === 'Tillgänglig' ? 'bg-AngelBlue' : 'bg-Beige'
          } ${
            status === 'Tillgänglig' ? 'text-WhiteBG' : 'text-DarkBrown'
          } p-[6px] rounded`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default KittenCard;
