import React from 'react';

type Props = {
  children?: React.ReactNode;
  color?: boolean;
  rounded?: boolean;
};

const Section = ({ children, color, rounded }: Props) => {
  return (
    <section
      className={`container mx-auto flex justify-center py-16 lg:py-32 ${
        color && 'bg-Beige'
      } ${rounded && 'rounded-xl'}}`}
    >
      {children}
    </section>
  );
};

export default Section;
