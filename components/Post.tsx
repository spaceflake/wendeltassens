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
    <article
      className={`bg-WhiteBG rounded-xl overflow-hidden h-full lg:max-w-[1000px] pb-6 md:pb-0 flex-1 flex-col-reverse md:grid ${
        imgUrl ? 'md:grid-cols-2' : 'md:grid-cols-1'
      } shadow-xl w-full`}
    >
      <div className="px-12 pt-10 pb-12 pl-10 pr-10 lg:py-12">
        <div className="space-x-4 text-sm font-thin font-Montserrat text-DarkBrown">
          <span>{dateFormatted}</span>
        </div>
        <h4>{title}</h4>
        <p className="mt-4 text-sm font-Montserrat text-DarkBrown lg:mt-7 lg:text-base">
          {text}
        </p>
      </div>
      <div className="h-full ">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={title}
            height={300}
            width={300}
            className="object-contain w-full h-full md:object-cover rounded-bl-md max-h-[300px]"
          />
        )}
      </div>
    </article>
  );
};

export default Post;
