import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  text: string;
  imgUrl?: string | StaticImageData;
  date: string;
};

const Post = ({ title, text, imgUrl, date }: Props) => {
  // format date to "YYYY-MM-DD"
  const dateFormatted = new Date(date).toISOString().split('T')[0];

  return (
    <article className="bg-WhiteBG rounded-xl overflow-hidden lg:max-h-[480px] lg:max-w-[1000px] flex flex-col-reverse lg:flex-row-reverse shadow-xl">
      <div className="px-12 pt-10 pb-12 pl-10 pr-10 grow lg:py-12">
        <div className="space-x-4 text-sm font-thin font-Montserrat text-DarkBrown">
          <span>{dateFormatted}</span>
        </div>
        <h4>{title}</h4>
        <p className="mt-4 text-sm font-Montserrat text-DarkBrown lg:mt-7 lg:text-base">
          {text}
        </p>
      </div>
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={500}
          height={500}
          className="object-cover w-auto h-auto aspect-square"
        />
      )}
    </article>
  );
};

export default Post;
