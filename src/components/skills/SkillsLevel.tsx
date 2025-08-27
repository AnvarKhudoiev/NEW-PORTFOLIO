import { type FC } from "react";
import { motion } from 'framer-motion';


interface propsType {
  skillsName: string,
  percentage: string
}

const SkillsLevel: FC<propsType> = ({ skillsName, percentage }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
        className="mt-4 space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-sm text-right">{percentage}</p>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ width: `${percentage}` }}
            className={`h-2 bg-primary rounded-full`}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SkillsLevel;
