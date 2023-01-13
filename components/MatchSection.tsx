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
      <section className="m-auto">
        <div className="mt-16 mb-10 lg:mt-36">
          {matches.map((match) => (
            <CatMatchCard
              key={match._id}
              femalename={match.motherName}
              maleName={match.fatherName}
              femaleImg={match.motherImgUrl}
              maleImg={match.fatherImgUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MatchSection;
