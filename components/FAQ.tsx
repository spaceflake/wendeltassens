import React from 'react';

export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="mb-4 mr-4 ml-4 lg:mr-[11rem] lg:ml-[11rem] font-Montserrat italic text-DarkBrown">
      <h6 className="font-bold mb-2 ">{title}</h6>
      <p className="">- {text}</p>
    </div>
  );
};

export default FAQ;
