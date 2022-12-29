import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Section = ({ children }: Props) => {
  return (
    <section className="container mx-auto flex justify-center py-16 lg:py-32">
      {children}
    </section>
  );
};

export default Section;
