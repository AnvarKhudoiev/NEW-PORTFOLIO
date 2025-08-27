import Person from '../../assets/anvar-no-bg.png'
import BG from '../../assets/person-bg.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center md:h-[600px] space-y-4 py-12 md:py-0 ">
          <div className="relative z-20">
            <div className="space-y-2 grid justify-items-center md:justify-items-start md:max-w-[500px]">
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                className="uppercase ">Hello</motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }}
                className="text-4xl md:text-6xl text-center md:text-start font-bold text-black/80 dark:text-white">
                I&rsquo;m Anvar Khudoiev
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}
                className="text-3xl text-gray-700 dark:text-white">
                Front-end Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
                className="text-black/75 dark:text-white/70 text-center md:text-left">
                I am a Front-End Developer with hands-on experience in React and TypeScript, having built fully responsive projects
                and completed an internship, demonstrating strong teamwork, adaptability, and passion for continuous learning in frontend development.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1}}
                href="mailto:geiserovakmal@gamil.com"
                className="inline-block primary-btn !my-3 transition-colors duration-300"
              >
                Hire me
              </motion.a>
            </div>
          </div>
          {/* image section */}
          <div className="relative hidden md:block">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
              src={BG}
              alt=""
              className="md:top-[0px] xl:top-[-100px] xl:left-5  md:-left-5 absolute md:w-[600px] rotate-45 md:h-[500px]  img-shadow xl:w-[1300px] xl:h-[1000px]"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
              src={Person}
              className="w-full sm:max-w-sm mx-auto z-20 relative top-20"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
