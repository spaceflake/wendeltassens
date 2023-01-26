import Post from './Post';

type Props = {
  title: string | null | undefined;
  posts: Post[];
};

const PostContainer = ({ title, posts }: Props) => {
  return (
    <div className="flex flex-col justify-center p-8 px-3 rounded-lg bg-Beige">
      <h2 className="text-center">{title || 'Rubrik'}</h2>
      <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 lg:mt-16">
        {posts.map((post) => (
          <Post
            key={post._id}
            title={post.title}
            text={post.text}
            imgUrl={post.imageUrl}
            alt={post.alt}
            date={post.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
