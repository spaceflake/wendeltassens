import React from 'react';
import MatchOverview from './MatchOverview';
import TextField from './TextField';

type Props = {
  components: Component[];
};

const SectionContent = ({ components }: Props) => {
  return (
    <>
      {components.map((component) => {
        console.log(component._type);
        switch (component._type) {
          case 'textField':
            const textField = component as TextField;
            return <TextField key={component._id} textField={textField} />;
          case 'matchOverview':
            const matchOverview = component as MatchOverview;

            return <MatchOverview matches={matchOverview.matches} />;

          default: {
            return null;
          }
        }
      })}
    </>
  );
};

export default SectionContent;
