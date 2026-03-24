import React from "react";

type Props = {
  title: string;
  paragraph: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Header = ({ title, paragraph, level = 2 }: Props) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <section className="header flex flex-col gap-1">
      <Tag>{title}</Tag>
      <p>{paragraph}</p>
    </section>
  );
};

export default Header;