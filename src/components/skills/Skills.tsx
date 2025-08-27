import SkillsLevel from "./SkillsLevel.js";
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
            className="sm:order-2 font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </motion.div>
          <div className="text-slate-500 sm:order-1">
            <SkillsLevel skillsName="JavaScript" percentage="75%" />
            <SkillsLevel skillsName="TypeScript" percentage="75%" />
            <SkillsLevel skillsName="React" percentage="85%" />
            <SkillsLevel skillsName="RESTful API" percentage="85%" />
            <SkillsLevel skillsName="HTML, CSS" percentage="90%" />
            <SkillsLevel skillsName="Tailwind" percentage="85%" />
            <SkillsLevel skillsName="Bootstrap" percentage="80%" />
            <SkillsLevel skillsName="Figma" percentage="60%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
