import Button from './Button';
import KittenCard from './KittenCard';

type Props = {
  title: string;
  birthDate: string;
  mother: string;
  father: string;
  kittens?: Kitten[];
  linkUrl?: string;
};

const KittenOverview = ({
  title,
  birthDate,
  mother,
  father,
  kittens,
  linkUrl,
}: Props) => {
  return (
    <div className="gap-8 px-4 py-8 sm:p-8 space-y-4 shadow-lg h-fit sm:grid sm:grid-cols-2 rounded-xl bg-WhiteBG text-DarkBrown w-full max-w-[800px]">
      <div className="flex flex-col">
        <h5 className="text-[2.75rem]">{title}</h5>
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
          <div className="flex justify-between gap-3 py-2">
            <span className="font-medium">Antal kattungar</span>
            <span className="font-bold text-right">{kittens?.length}</span>
          </div>
        </div>
        <div className="flex gap-2 mx-auto mt-4 lg:mr-auto lg:ml-0">
          <Button text="Stamtavla" goTo={linkUrl} />
          <Button isInternalLink text="Förfrågan" goTo="/kontakt" />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 overflow-y-auto h-60">
        {kittens &&
          kittens.length > 0 &&
          kittens.map((kitten) => (
            <KittenCard
              key={kitten._id}
              catImgUrl={kitten.catImgUrl}
              catName={kitten.name}
              gender={kitten.gender}
              colorCode={kitten.colorCode}
              status={kitten.status}
            />
          ))}
      </div>
    </div>
  );
};

export default KittenOverview;
