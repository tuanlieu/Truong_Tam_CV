const PageTag = ({ title, color }: { title: string, color?: number}) => {
  return (
    <div className={`px-12 py-2 border-4 inline-block m-8 ${color ? `border-white` : 'border-black'}`}>
      <h3 className={`font-bold text-xl uppercase tracking-widest ${color ? `text-white` : 'text-black'}`}>{title}</h3>
    </div>
  );
};

export default PageTag;
