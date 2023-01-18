import CatMatchCard from './CatMatchCard';
import Section from './Section';
import SectionDividerBorder from './SectionDividerBorder';

type Props = {
  introMatchText: Textblock;
  matches: Match[];
};

const MatchSection = ({ introMatchText, matches }: Props) => {
  return (
    <>
      <Section>
        <SectionDividerBorder title="Planerade kullar" />
        <p className=" px-4 first-letter:text-8xl first-letter:float-left first-letter:mr-8 leading-8 first-letter:leading-none first-letter:font-Tangerine font-Montserrat font-semibold italic text.xl lg:text-2xl text-left max-w-prose mx-auto mt-10">
          {introMatchText.text}
        </p>
      </Section>
      <Section>
        <div className="mx-auto mb-10 lg:flex lg:justify-center space-y-6 lg:space-y-0 flex-wrap w-[90%] sm:w-[400px] lg:w-[800px]">
          {matches.map((match) => (
            <CatMatchCard
              key={match._id}
              femalename={match.motherName}
              maleName={match.fatherName}
              femaleImg={match.motherImgUrl}
              maleImg={match.fatherImgUrl}
              description={match.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default MatchSection;
