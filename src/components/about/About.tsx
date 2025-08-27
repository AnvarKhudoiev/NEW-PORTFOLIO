import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
            className=" font-bold relative">
            <div
              className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </motion.div>
          <div className="text-slate-500">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
            >
              Front-End Developer with hands-on experience in academic projects,
              demonstrating strong skills in React, JavaScript, TypeScript and
              responsive design.
            </motion.p>
            <br />
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
            >
              Highly motivated and quick learner, eager to take on real-world
              challenges and continuously expand technical knowledge while
              contributing to dynamic development teams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
              className="">
              <a
                href="../../assets/CV.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+77472465850"
                title="Call +77472465850 "
                className="outline-btn my-6"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
