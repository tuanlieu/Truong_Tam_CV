const Personal = () => {
  const archives = [
    {
      title: "Hackathon Winner",
      description:
        "Secured 1st place in a national-level hackathon by developing an AI-powered chatbot within 24 hours.",
    },
    {
      title: "Certified Python Developer",
      description:
        "Achieved a professional certification in Python programming with a specialization in data analysis.",
    },
    {
      title: "Open-Source Contributor",
      description:
        "Contributed to multiple open-source projects, including bug fixes and feature enhancements in JavaScript libraries.",
    },
  ];

  return (
    <div className="my-4">
      <h4 className="text-2xl my-4 uppercase font-bold">my achievements</h4>
      <ul className="flex flex-row flex-wrap justify-center gap-10">
        {archives.map(({title, description}, index) => (
          <li key={index} className="relative">
            <img
              src={`https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/arch0${index + 1}.png?raw=true`}
              alt={title}
              className="w-64"
            />
            <div className="absolute bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center h-full w-full top-0 left-0 z-10 p-2">
              <p className="text-white text-center font-bold text-sm m-2">{title}</p>
              <p className="text-white text-center font-light text-sm">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Personal;
