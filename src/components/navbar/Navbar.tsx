import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { motion } from 'framer-motion'


interface navMenu {
  name: string,
  link: string
}

const navMenus: navMenu[] = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: ".#services",
  },
  {
    name: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <nav id="home" className="bg-secondary dark:bg-gray-900">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.6 }}

            className="text-3xl md:text-5xl font-bold text-primary flex justify-center items-center ">
            A.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="hidden sm:block">
            <ul className="flex items-center gap-4 dark:text-white">
              {navMenus.map((navMenu, index) => {
                return (
                  <li
                    key={index}>
                    <motion.a
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3,  ease: 'easeInOut' }}
                      className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                      href={navMenu.link}
                    >
                      {navMenu.name}
                    </motion.a>
                  </li>
                );
              })}
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </motion.div>
          {/* Mobile Responsive Menu */}
          <div
            className="sm:hidden z-50">
            <div className="flex items-center gap-4">
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
              <FiMenu
                className="text-2xl cursor-pointer dark:text-white "
                onClick={toggleMenu}
              />
            </div>
            {showMenu && (
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="top-16 absolute bg-white dark:text-white dark:bg-gray-950 shadow-md rounded-b-xl  left-0 w-full z-10 py-10">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((navMenu, index) => {
                    return (
                      <li
                        key={index}>
                        <a
                          className="text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer"
                          href={navMenu.link}
                          onClick={() => setShowMenu(false)}
                        >
                          {navMenu.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
