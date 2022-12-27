import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  text: string;
  imgUrl?: string | StaticImageData;
  date?: string;
  author?: string;
};

const Post = ({ title, text, imgUrl, date, author }: Props) => {
  return (
    <article className="bg-WhiteBG rounded-xl overflow-hidden lg:max-h-[480px] flex flex-col-reverse lg:flex-row-reverse gap-10 shadow-xl">
      <div className="grow pb-12 lg:py-12 px-12 lg:pl-0 pr-10">
        <div className="space-x-4 text-sm font-Montserrat font-thin text-DarkBrown">
          <span>{date}</span>
          <span>{author}</span>
        </div>
        <h4>{title}</h4>
        <p className="font-Montserrat text-DarkBrown mt-7">{text}</p>
      </div>
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          className="object-cover aspect-square w-auto h-auto"
        />
      )}
    </article>
  );
};

export default Post;
