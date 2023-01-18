export interface FAQProps {
  title: string;
  text: string;
}

const FAQ = ({ title, text }: FAQProps) => {
  return (
    <div className="flex bg-[#FFFFFF] shadow-lg rounded-md hover:bg-Beige/40 transition-colors font-Montserrat italic text-DarkBrown w-full">
      <details className="group items-stretch w-full open:bg-Beige/50 p-4">
        <summary className="cursor-pointer flex items-center justify-between">
          <h6 className="font-bold text-lg">{title}</h6>
          <a className="text-2xl flex justify-center transition group-open:rotate-180">
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
          </a>
        </summary>
        <p className="text-base p-2 max-w-prose">{text}</p>
      </details>
    </div>
  );
};

export default FAQ;
