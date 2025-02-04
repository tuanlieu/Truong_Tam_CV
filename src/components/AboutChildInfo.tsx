const AboutChildInfo = ({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="text-left relative w-80">
      <span className="opacity-10 absolute top-2 -left-2 w-10 h-10">
        {children}
      </span>
      <h4 className="uppercase text-lg font-bold tracking-wider">{title}</h4>
      <p className="font-light">{content}</p>
    </div>
  );
};

export default AboutChildInfo;
