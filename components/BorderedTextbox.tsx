import Button from './Button';
import TextField from './TextField';

interface Props {
  title: string;
  textField: TextField;
  buttonPath?: string;
  buttonText?: string;
}

const BorderedTextbox = ({
  title,
  textField,
  buttonPath,
  buttonText,
}: Props) => {
  return (
    <article className="relative ml-4 mr-4 border rounded border-DarkBrown bg-WhiteBG text-DarkBrown">
      <h2 className=" font-Tangerine text-3xl lg:text-5xl absolute top-[-1.5rem] bg-WhiteBG ml-8 px-4">
        {title || 'Title'}
      </h2>
      <div className="px-4 py-8 pt-8 xl:pt-16 lg:px-8">
        <TextField
          text={textField.text}
          initialCapital={textField.initialCapital}
        />
      </div>
      {buttonText && (
        <div className="flex justify-center pb-8">
          <Button isInternalLink text={buttonText} goTo={buttonPath} />
        </div>
      )}
    </article>
  );
};

export default BorderedTextbox;
