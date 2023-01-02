import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

const PostContainer = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col justify-center px-3">
      <h2 className="text-center">{title}</h2>
      <div className="flex flex-col items-center mt-8 space-y-4 lg:mt-16">
        {children}
      </div>
    </div>
  );
};

export default PostContainer;
