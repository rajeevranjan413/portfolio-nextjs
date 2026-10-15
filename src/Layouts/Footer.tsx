import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/rajeev-ranjan-dev", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
  { href: "https://github.com/rajeevranjan413", icon: <FaGithub size={22} />, label: "GitHub" },
  { href: "mailto:rajuranjan413@gmail.com", icon: <FaEnvelope size={22} />, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-200">Follow Me</h2>
          <div className="flex gap-4 mt-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -5, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="glass flex h-11 w-11 items-center justify-center rounded-xl hover:text-indigo-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rajeev Ranjan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
