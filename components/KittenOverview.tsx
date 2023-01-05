import Button from './Button';
import KittenCard from './KittenCard';
import KittenImg from '../public/kitten-image-1.jpg';

type Props = {
  title: string;
  birthDate: string;
  mother: string;
  father: string;
  kittens?: Kitten[];
};

const KittenOverview = ({
  title,
  birthDate,
  mother,
  father,
  kittens,
}: Props) => {
  return (
    <div className="rounded-xl bg-WhiteBG p-8 flex flex-col lg:flex-row max-w[700px] justify-between shadow-lg text-DarkBrown">
      <div className="flex flex-col pt-6">
        <h5>{title}</h5>
        <div className="divide-y divide-dashed divide-[#E1DFDE] grow">
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Född</span>
            <span className="font-bold text-right">{birthDate}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Mor</span>
            <span className="font-bold text-right">{mother}</span>
          </div>
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Fader</span>
            <span className="font-bold text-right">{father}</span>
          </div>
        </div>
        <div className="mx-auto mt-4 space-x-4 lg:mr-auto lg:ml-0">
          <Button text="Stamtavla" goTo="https://google.com" />
          <Button text="Förfrågan" goTo="/kontakt" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6 place-items-center">
        {kittens &&
          kittens.length > 0 &&
          kittens.map((kitten) => (
            <KittenCard
              key={kitten._id}
              catImgUrl={kitten.catImgUrl}
              catName={kitten.name}
              colorCode={kitten.colorCode}
              status={kitten.status}
            />
          ))}
      </div>
    </div>
  );
};

export default KittenOverview;
