import React from 'react';

export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="mb-4 mr-4 ml-4 lg:mr-[11rem] lg:ml-[11rem]">
      <h2 className="font-Montserrat font-bold italic mb-2 ">{title}</h2>
      <p className="font-Montserrat italic">- {text}</p>
    </div>
  );
};

export default FAQ;
