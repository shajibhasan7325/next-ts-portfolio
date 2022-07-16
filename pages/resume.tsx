import { languages, tools } from "../styles/data"
import { Bar } from "../Component/Bar"
import { motion } from "framer-motion"
import { fadingUp } from "../styles/Animation"



 const Resume = () => {
  
  return (
    <div className="px-6 py-2 ">
      {/* Education  & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">Lorem ipsum dolor sit amet.</h5>
            <p className="font-semibold ">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="my-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus et quod praesentium assumenda in? Fugit.</p>

          </div>
        </motion.div>

        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">Lorem ipsum dolor sit amet.</h5>
            <p className="font-semibold ">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="my-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus et quod praesentium assumenda in? Fugit.</p>

          </div>
        </motion.div>

      </div>
       

      {/* langues  */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Langues & Framework</h5>
          <div className="my-2 ">
          {
            languages.map(language =><Bar data={language} key={language.name} />)
          }
          </div>
        </div>


        <div>
          <h5 className="my-3 text-2xl font-bold ">Tools & softwares</h5>
          <div className="my-2 ">
          {
            tools.map(tool =><Bar data={tool} key={tool.name} />)
          }
          </div>
        </div>

      </div>

    </div>
  )
}
 export default Resume
