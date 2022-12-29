import React from 'react';

type Props = {
  children?: React.ReactNode;
  color?: boolean;
  rounded?: boolean;
};

const Section = ({ children, color, rounded }: Props) => {
  return (
    <section
      className={`container mx-auto flex justify-center pt-16 lg:pt-36 ${
        color && 'bg-Beige'
      } ${rounded && 'rounded-xl'}}`}
    >
      {children}
    </section>
  );
};

export default Section;
