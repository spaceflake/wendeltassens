import React from 'react';
import BorderedTextbox from './BorderedTextbox';
import Section from './Section';
import SectionContent from './SectionContent';
import SectionDividerBorder from './SectionDividerBorder';

type Props = {
  componentSection: ComponentSection;
};

const ComponentSection = ({ componentSection }: Props) => {
  const { type, title, component } = componentSection;

  if (componentSection.type === 'sectionBordered') {
    return (
      <Section>
        <article className="relative ml-4 mr-4 border rounded border-DarkBrown bg-WhiteBG text-DarkBrown">
          <h2 className=" font-Tangerine text-3xl lg:text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-8 px-4">
            {title || 'Title'}
          </h2>
          <div className="px-4 py-8 pt-8 xl:pt-16 lg:px-8">
            <SectionContent components={component} />
          </div>
        </article>
      </Section>
    );
  } else if (type === 'sectionDivider') {
    return (
      <Section>
        <SectionDividerBorder title={title} />
        <SectionContent components={component} />
      </Section>
    );
  } else if (type === 'section') {
    return (
      <Section>
        <SectionContent components={component} />
      </Section>
    );
  } else {
    return <></>;
  }
};

export default ComponentSection;
