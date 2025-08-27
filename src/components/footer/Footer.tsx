import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0,}}
      whileInView={{ opacity: 1,}}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center py-6 dark:bg-slate-950 dark:text-white">
      <p className="container">
        Copyright &copy; 2024 The Coding Journey
      </p>
    </motion.footer>
  );
};

export default Footer;
