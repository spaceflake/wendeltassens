import React from 'react';
import KittenOverview from './KittenOverview';

type Props = {};

const KittenSection = (props: Props) => {
  return (
    <div className="py-[150px] mt-16 lg:mt-36 bg-[#80756B]/10 shadow-inner flex flex-col items-center space-y-4">
      <h2>Tillgängliga kattungar</h2>
      <KittenOverview
        birthDate="2022-11-24"
        father="SE*Mångudinnan Vikings Ragnar"
        mother="SE*Wendeltassens Mary Austin"
        title="Månskenskullen"
      />
      <KittenOverview
        birthDate="2022-11-24"
        father="SE*Mångudinnan Vikings Ragnar"
        mother="SE*Wendeltassens Mary Austin"
        title="Månskenskullen"
      />
    </div>
  );
};

export default KittenSection;
