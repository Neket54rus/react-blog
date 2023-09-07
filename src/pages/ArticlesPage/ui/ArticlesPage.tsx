import { memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;

  return <div className={className}>Articles Page</div>;
});

export default ArticlesPage;
