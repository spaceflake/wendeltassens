import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  text: string;
  imgUrl?: string | StaticImageData;
  date: string;
};

const Post = ({ title, text, imgUrl, date }: Props) => {
  const dateFormatted = new Date(date).toISOString().split('T')[0];

  return (
    <article
      className={`bg-WhiteBG rounded-xl overflow-hidden md:pb-0 flex flex-col shadow-xl`}
    >
      <div className="px-12 pt-10 pb-12 pl-10 pr-10 lg:py-12 grow">
        <div className="space-x-4 text-sm font-thin font-Montserrat text-DarkBrown">
          <span>{dateFormatted}</span>
        </div>
        <h4>{title}</h4>
        <p className="mt-4 text-sm font-Montserrat text-DarkBrown lg:mt-7 lg:text-base">
          {text}
        </p>
      </div>
      <div className="p-4">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={title}
            height={300}
            width={300}
            className="object-cover w-full h-full rounded-bl-md max-h-64"
          />
        )}
      </div>
    </article>
  );
};

export default Post;
