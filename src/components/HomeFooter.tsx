import { useState } from "react";

const HomeFooter = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full h-screen"></div>
      <div className=" bg-gradient-to-r from-gray-900 to-gray-700 w-full bottom-0 text-white text-base px-40 opacity-90 py-4">
        <h2 className="text-lg my-2">IT Berries</h2>
        <p className="my-2">
        I am fascinated by the IT industry from the small but wonderful things that technology brings to daily life. From writing the first lines of code to solving practical problems, I realized that IT is not only a tool, but also a world full of creativity and challenges. My biggest motivation is to constantly learn and apply technology to create useful solutions, contributing to making life smarter and more effective.{" "}
          {show
            ? "From the first time I wrote the first lines of code, I was fascinated by the colorful world of technology. Every time I solved a programming problem, I felt extremely excited and proud. The most memorable memory was when I built a small application to help my friends manage their time more effectively. That success inspired me to pursue the path of becoming a software engineer. I want to create meaningful technology products that contribute to improving people's lives. My biggest motivation is to constantly learn and explore new technologies, thereby creating creative and useful solutions."
            : "..."}
        </p>
        <button
          className="px-4  border-l-2 border-r-2 border-white my-2"
          onClick={() => setShow(!show)}
        >
          {!show ? "Read More" : "Read Less"}
        </button>
      </div>
    </>
  );
};

export default HomeFooter;
