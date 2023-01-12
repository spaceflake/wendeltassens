import React from 'react';
import KittenOverview from './KittenOverview';

type Props = {
  litters: Litter[] | null;
};

const KittenSection = ({ litters }: Props) => {
  return (
    <div className="pb-[150px] mt-16 lg:mt-36 bg-[#80756B]/10 shadow-inner flex flex-col items-center space-y-4">
      <h2 className="py-16">Tillgängliga kattungar</h2>
      <>
        {litters && litters.length > 0 ? (
          litters.map((litter) => (
            <KittenOverview
              key={litter._id}
              birthDate={litter.birthDate.split('T')[0]}
              father={litter.father}
              mother={litter.mother}
              title={litter.title}
              kittens={litter.kittens}
            />
          ))
        ) : (
          <p>Inga tillgängliga kattungar</p>
        )}
      </>
    </div>
  );
};

export default KittenSection;
