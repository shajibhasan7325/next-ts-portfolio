import { motion } from "framer-motion";
import { services } from "../styles/data";
import { ServiceCard } from "./Component/ServiceCard";
import { fadingUp, stagger } from "../styles/Animation"


const Index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h5 className="my-3 font-medium ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        necessitatibus aliquam molestias reiciendis commodi consectetur
        voluptatum dolore rerum nemo pariatur corporis porro iusto facere
        adipisci non numquam, sunt laborum recusandae?
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide text-center ">
          what i offer
        </h6>

        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate" >
          {services.map((service, i) => (
            <motion.div variants={fadingUp} 
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200 "
              key={i}
            >
              <ServiceCard key={1} service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default Index;
