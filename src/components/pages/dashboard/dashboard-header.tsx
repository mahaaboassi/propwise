import React from "react";

type Props = {
  title: string;
  paragraph?: string;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Header = ({ title, paragraph, level = 2, className }: Props) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <section className={`header`}>
      <Tag className={className}>{title}</Tag>
      {paragraph && <p className="mt-2">{paragraph}</p>}
    </section>
  );
};

export default Header;