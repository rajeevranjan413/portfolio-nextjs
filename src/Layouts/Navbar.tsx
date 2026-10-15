import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Reading-progress bar along the bottom edge
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        scrolled ? "glass border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2 text-2xl font-bold">
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 font-mono text-base"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              R
            </motion.span>
            <span className="text-gradient">Rajeev</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 font-medium text-gray-300 transition hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="/assets/resume.pdf"
              target="_blank"
              className="ml-4 rounded-lg border border-indigo-400/50 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-500/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-indigo-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: -90 }}
            transition={{ duration: 0.35 }}
            style={{ transformOrigin: "top", transformPerspective: 600 }}
            className="md:hidden glass mx-4 mb-4 rounded-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5 hover:text-indigo-300 transition duration-300"
                  onClick={toggleMenu} // Close menu on item click
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
        style={{ scaleX: progress }}
      />
    </motion.nav>
  );
};

export default Navbar;
