import CatMatchCard from './CatMatchCard';
import Section from './Section';

type Props = {
  matches: Match[];
};

const MatchOverview = ({ matches }: Props) => {
  return (
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
  );
};

export default MatchOverview;
