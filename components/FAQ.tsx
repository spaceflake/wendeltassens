'use client';
import React, { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="font-Montserrat italic text-DarkBrown max-w-prose">
      <div className="w-full">
        <div className="mx-auto max-w-md rounded 2xl bg-white flex">
          <div className="flex ml-4 bg-[#FFFFFF] shadow-lg p-4 rounded-md m-4 hover:bg-Beige/40 transition-colors">
            <details className="group">
              <summary className="cursor-pointer flex justify-center">
                <a className="text-2xl flex align-top">
                  <FiChevronDown className="transition group-open:rotate-180 mr-2" />
                </a>
                <h6 className="font-bold mb-2 text-lg">{title}</h6>
              </summary>
              <p className="text-base mb-4">{text}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
