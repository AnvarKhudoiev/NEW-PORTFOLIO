import ServicesBox from "./ServicesBox.js";
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-slate-500 text-center md:w-[50%] mx-auto">
          I help build modern, responsive, and user-friendly web applications using React,
          TypeScript, and Tailwind. From concept to deployment, I focus on clean code, performance, and seamless user experience.
        </motion.p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
