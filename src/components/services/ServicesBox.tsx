import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { type ReactElement } from "react";
import { motion, type Variants, type Transition } from "framer-motion";

interface Service {
  name: string;
  description: string;
  image: string;
  icon: ReactElement<any, any>;
  bgColor: string;
}

const Services: Service[] = [
  {
    name: "UX research",
    description: "Researching user needs to create intuitive interfaces.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Responsive",
    description: "Designing mobile-friendly and adaptive layouts.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description: "Building modern, responsive, user-friendly web applications using React, TypeScript, and Tailwind.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description: "Implementing robust security measures for web applications.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], 
    } as Transition,
  },
};

const ServicesBox = () => {
  return (
    <motion.section
      id="services"
      className="my-10 container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <motion.div
            key={name}
            variants={cardVariants}
            className={`${bgColor} rounded-xl bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16  space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesBox;