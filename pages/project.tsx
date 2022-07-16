import { motion } from "framer-motion";
import { useState } from "react";
import { fadingUp, stagger } from "../styles/Animation";
import { projects } from "../styles/data";
import { category } from "../styles/type";
import { ProjectCard } from "../Component/ProjectCard";
import ProjectNavbar from "../Component/projectNavbar";

const Project = () => {
  const [project, setProject] = useState(projects);
  const [active, setActive] = useState("all");
 

  const handlerFilterCategory = (category: category | "all") => {
    if (category === "all") {
      setProject(projects);
      setActive(category);
      return;
    }
    const newArray = projects.filter((poj) => poj.category.includes(category));
    setProject(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div className="relative grid grid-cols-12 gap-4 my-3 " variants={stagger} initial="initial" animate="animate" >
        {projects.map((project, index) => (
          <motion.div variants={fadingUp} 
            key={index}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} key={project.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Project;
