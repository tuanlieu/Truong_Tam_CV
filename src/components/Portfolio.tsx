import { motion } from "motion/react";
import { useState } from "react";
import PortfolioItem from "../types/PortfolioItem";
import PageTag from "./PageTag";

const Portfolio = () => {
  const [filter, setFilter] = useState<"ALL" | "CODED" | "DESIGNED">("ALL");

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      type: "CODED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj1.png?raw=true",
      title: "CodeMaster",
      description:
        "A comprehensive coding platform designed to enhance programming skills through interactive challenges and real-time feedback.",
    },
    {
      id: 2,
      type: "DESIGNED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj2.png?raw=true",
      title: "DesignHub",
      description:
        "A creative design tool that empowers users to craft stunning visuals with ease, featuring a wide array of templates and customization options.",
    },
    {
      id: 3,
      type: "CODED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj3.png?raw=true",
      title: "DevConnect",
      description:
        "A collaborative coding environment that connects developers worldwide, enabling seamless project management and code sharing.",
    },
    {
      id: 4,
      type: "DESIGNED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj4.png?raw=true",
      title: "Artistry",
      description:
        "An innovative design application that transforms ideas into reality, offering advanced tools for both novice and professional designers.",
    },
    {
      id: 5,
      type: "CODED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj5.png?raw=true",
      title: "CodeCraft",
      description:
        "A dynamic coding workshop that provides hands-on experience with the latest programming languages and frameworks.",
    },
    {
      id: 6,
      type: "DESIGNED",
      imageUrl: "https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/prj6.png?raw=true",
      title: "DesignSphere",
      description:
        "A versatile design suite that combines intuitive interfaces with powerful features, perfect for creating professional-grade graphics.",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === "ALL" || item.type === filter
  );

  return (
    <motion.div
      className=" mx-auto h-screen w-screen text-center bg-gray-200"
      initial={{ opacity: 0, margin: "0px", textAlign: "left" }}
      animate={{ opacity: 1, margin: "auto", textAlign: "center" }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="h-48 bg-gray-300 w-full pb-4 pt-16"
        style={{
          backgroundImage: `https://github.com/tuanlieu/Truong_Tam_CV/blob/main/src/assets/banner.jpg?raw=true`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, height: "0rem"}}
        animate={{ opacity: 1, height: "12rem" }}
        transition={{ duration: 1 }}
      >
        <PageTag title="Portfolio" color={1} />
      </motion.div>
      <div className="space-y-8 bg-black py-8 px-4">
        <ul className="flex justify-center gap-4">
          {["ALL", "CODED", "DESIGNED"].map((type) => (
            <li key={type}>
              <button
                onClick={() => setFilter(type as "ALL" | "CODED" | "DESIGNED")}
                className={`px-4 py-2 text-white ${
                  filter === type
                    ? "opacity-100 border-b-2 border-white"
                    : "hover:opacity-80 border-b-2 border-transparent opacity-50"
                }`}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map(({ id, imageUrl, title, description }) => (
            <li
              key={id}
              className="group relative overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  <p className="font-bold text-xl tracking-wider">{title}</p>
                  <p className="font-light tracking-wide text-sm block w-3/4 m-auto mt-2">
                    {description}
                  </p>
                  <div className="flex gap-4 mt-4 justify-center">
                    <a
                      href="#"
                      className="text-base border-r-2 border-l-2 px-2"
                    >
                      Demo
                    </a>
                    <a
                      href="#"
                      className="text-base border-r-2 border-l-2 px-2"
                    >
                      More
                    </a>
                  </div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Portfolio;
