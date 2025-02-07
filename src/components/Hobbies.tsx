import { motion } from "motion/react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Knitting",
      description:
        "I enjoy creating handmade knitted items, which helps me relax and boost my creativity.",
    },
    {
      title: "Painting",
      description:
        "Exploring the world of colors and creating art pieces is my way of expressing creativity and emotions.",
    },
    {
      title: "Playing Guitar",
      description:
        "Playing the guitar allows me to unwind and explore my passion for music.",
    },
    {
      title: "Chess",
      description:
        "I love playing chess to sharpen my strategic thinking and problem-solving skills.",
    },
    {
      title: "Photography",
      description:
        "Capturing beautiful moments in nature is my way of finding inspiration and tranquility.",
    },
    {
      title: "Crafting",
      description:
        "Creating crafts from various materials helps me experiment with new ideas and techniques.",
    },
  ];

  return (
    <motion.div
      className="my-4"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 1 }}
    >
      <h4 className="text-2xl my-4 uppercase font-bold">my hobbies</h4>
      <ul className="flex flex-row flex-wrap justify-center gap-10">
        {hobbies.map(({ title, description }, index) => (
          <li key={index} className="relative">
            <img
              src={`https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/hobby0${index + 1}.png?raw=true`}
              alt={title}
              className="w-64"
            />
            <div className="absolute bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center h-full w-full top-0 left-0 z-10 p-2">
              <p className="text-white text-center font-bold text-sm m-2">
                {title}
              </p>
              <p className="text-white text-center font-light text-sm">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Hobbies;
