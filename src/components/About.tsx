import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { motion } from "motion/react";
import { useState } from "react";
import AboutChildInfo from "./AboutChildInfo";
import DivideTag from "./DivideTag";
import ExperienceInfo from "./ExperienceInfo";
import Hobbies from "./Hobbies";
import PageTag from "./PageTag";
import Personal from "./Personal";

const About = () => {
  const [explore, setExplore] = useState(false);
  const experiences = [
    {
      company: "TechNova Solutions",
      role: "Full-Stack Developer",
      duration: "2019 - 2022",
      description:
        "Developed and maintained web applications using React, Node.js, and MongoDB. Spearheaded the migration of legacy systems to modern frameworks, resulting in a 30% performance improvement.",
    },
    {
      company: "Skyline Innovations",
      role: "Software Engineer",
      duration: "2022 - Present",
      description:
        "Worked on a cloud-based SaaS product, focusing on backend development with Python and Django. Implemented RESTful APIs and optimized database queries, reducing server response time by 25%.",
    },
    {
      company: "NextGen Robotics",
      role: "Embedded Systems Developer",
      duration: "2017 - 2019",
      description:
        "Designed and programmed firmware for robotic systems using C++ and Arduino. Collaborated with hardware engineers to integrate IoT sensors, enhancing system accuracy by 40%.",
    },
  ];

  return (
    <div className="bg-gray-200 w-full h-full pt-8">
      <motion.div
        className="text-center w-3/4 m-auto bg-gray-200 pt-8"
        initial={{ opacity: 0, margin: "0px", textAlign: "left" }}
        animate={{ opacity: 1, margin: "auto", textAlign: "center" }}
        transition={{ duration: 1 }}
      >
        <PageTag title="About me" color={0} />
        <p className="my-4 text-sm font-light block w-1/2 m-auto">
          I am a passionate programmer with 2 years of experience in [your main
          field of expertise]. I focus on developing creative, efficient
          solutions and always seek to improve my skills to create value for the
          project and team.
        </p>
        <Personal />
        {explore ? <Hobbies /> : null}
        <button
          className="px-4 border-l-2 border-r-2 border-black my-2"
          onClick={() => setExplore(!explore)}
        >
          {!explore ? "More" : " Less"}
        </button>
        <DivideTag />
        <ul className="flex flex-row flex-wrap justify-center gap-4">
          <li>
            <AboutChildInfo
              title="Design"
              content="Design modern and intuitive user interfaces with tools like Figma, Adobe XD, and always prioritize user experience."
            >
              <DesignServicesIcon className="text-lg" />
            </AboutChildInfo>
          </li>
          <li>
            <AboutChildInfo
              title="Development"
              content="Proficient in programming languages ​​like Python, JavaScript and build high quality web applications using frameworks like React, Django."
            >
              <CodeIcon className="text-lg" />
            </AboutChildInfo>
          </li>
          <li>
            <AboutChildInfo
              title="Maintenance"
              content="Ensure system stability, security and optimized performance through regular testing and error detection."
            >
              <EngineeringIcon className="text-lg" />
            </AboutChildInfo>
          </li>
        </ul>
        <DivideTag />
        <h4 className="text-2xl my-4 uppercase font-bold">Work Experience</h4>
        <ul className="flex flex-row flex-wrap justify-center gap-10 py-10">
          {experiences.map((experience) => (
            <ExperienceInfo {...experience} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
