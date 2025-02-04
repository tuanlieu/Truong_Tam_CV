import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "motion/react";
import { useContext, useEffect } from "react";
import HeaderContext from "./contexts/Context";
import HomeFooter from "./HomeFooter";

const Welcome = () => {
  const context = useContext(HeaderContext);
  useEffect(() => {
    context?.setWelcome(true);
    return () => {
      context?.setWelcome(false);
    };
  }, [context]);
  const styleLeft: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0", // Màu trắng xám
    clipPath: "polygon(0 0, 50% 0, 30% 100%, 0 100%)",
  };
  const styleRight: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000", // Màu đen
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
    zIndex: -1,
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styleRight}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styleLeft}
      />
      <motion.div
        className="absolute z-10 top-48 left-20"
        initial={{ opacity: 0, top: "150px", left: "50px" }}
        animate={{ opacity: 1, top: "192px", left: "80px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold m-8">Hi, I am</h2>
        <h1 className="text-4xl font-bold text-gray-900 m-8">
          Pham Truong Tam
        </h1>
        <p className="text-lg text-gray-600 m-8">
          Front-end Developer / UI Designer
        </p>
        <ul className="flex m-8">
          <li className="bg-gray-400 shadow-lg mx-2 p-1 rounded-md">
            <a
              href="https://www.facebook.com/share/19hNcsnotR/?mibextid=wwXIfr"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </li>
          <li className="bg-gray-400 shadow-lg mx-2 p-1 rounded-md">
            <a href="https://github.com/tuanlieu/phamtruongtam" target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li className="bg-gray-400 shadow-lg mx-2 p-1 rounded-md">
            <a
              href="https://www.instagram.com/pvtuan1990?igsh=eXdtOWFsYnp0Ymx1&utm_source=qr"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.img
        src="/src/assets/anhPrfEdited.png"
        alt=""
        className="absolute right-64 bottom-0 w-1/3"
        initial={{ opacity: 0, bottom: "-100px" }}
        animate={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 1 }}
      />
      <HomeFooter />
    </div>
  );
};

export default Welcome;
