import { memo } from 'react';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className } = props;

  return <div className={className}>IMAGE</div>;
});
