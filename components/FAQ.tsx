export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="flex bg-[#FFFFFF] shadow-lg rounded-md hover:bg-Beige/40 transition-colors font-Montserrat italic text-DarkBrown w-full">
      <details className="items-stretch w-full p-4 group open:bg-Beige/50">
        <summary className="flex items-center justify-between cursor-pointer">
          <h6 className="text-sm font-bold md:text-lg">{title}</h6>
          <span className="flex justify-center ml-2 text-2xl transition group-open:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>
        <p className="p-2 text-sm md:text-base max-w-prose">{text}</p>
      </details>
    </div>
  );
};

export default FAQ;
