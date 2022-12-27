type Props = {
  title: string;
};

const SectionDividerBorder = ({ title }: Props) => {
  return (
    <div className="flex items-center py-6">
      <div className="border-b border-DarkBrown w-[10vw]"></div>
      <h2 className="font-Tangerine font-bold text-DarkBrown text-6xl px-6">
        {title}
      </h2>
      <div className="border-b border-DarkBrown grow"></div>
    </div>
  );
};

export default SectionDividerBorder;
