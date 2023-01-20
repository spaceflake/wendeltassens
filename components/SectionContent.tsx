import Button from './Button';
import CatCard from './CatCard';
import FAQ from './FAQ';
import MatchOverview from './MatchOverview';
import TextField from './TextField';

type Props = {
  components: Component[];
};

const SectionContent = ({ components }: Props) => {
  return (
    <>
      {components.map((component) => {
        switch (component._type) {
          case 'textField':
            const textField = component as TextField;
            return <TextField key={component._id} textField={textField} />;
          case 'matchOverview':
            const matchOverview = component as MatchOverview;

            return (
              <MatchOverview
                key={component._id}
                matches={matchOverview.matches}
              />
            );

          case 'FAQOverview':
            const faqOverview = component as FAQOverview;
            return (
              <div
                key={component._id}
                className="flex flex-col gap-4 items-stretch max-w-[1000px] w-full mx-auto p-4"
              >
                {faqOverview.faqs.map((faq) => (
                  <FAQ key={faq._id} title={faq.title} text={faq.text} />
                ))}
              </div>
            );

          case 'catOverview':
            const catOverview = component as CatOverview;
            return (
              <div
                key={component._id}
                className="flex flex-col items-center space-y-4"
              >
                {catOverview.cats.map((cat) => (
                  <CatCard key={cat._id} cat={cat} />
                ))}
              </div>
            );

          case 'link':
            const link = component as Link;
            return (
              <Button
                key={component._id}
                isInternalLink={link.isInternalLink}
                text={link.text}
                goTo={
                  link.isInternalLink ? link.internalLink : link.externalLink
                }
              />
            );

          default: {
            return null;
          }
        }
      })}
    </>
  );
};

export default SectionContent;
