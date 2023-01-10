import React from 'react';

export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="font-Montserrat italic text-DarkBrown max-w-prose">
      <h6 className="font-bold mb-2 text-xl ">{title}</h6>
      <p className="text-lg mb-4">- {text}</p>
    </div>
  );
};

export default FAQ;
