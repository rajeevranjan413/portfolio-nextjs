import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FiMail, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";

const tabs = [
  { id: "form", label: "Contact Me" },
  { id: "details", label: "Contact Details" },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 p-3.5 text-gray-200 placeholder-gray-500 outline-none transition focus:border-indigo-400/70 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(129,140,248,0.15)]";

const panel = {
  initial: { opacity: 0, rotateY: -25, x: -30 },
  animate: { opacity: 1, rotateY: 0, x: 0 },
  exit: { opacity: 0, rotateY: 25, x: 30 },
};

export const ContactSection = () => {
  const [activeTab, setActiveTab] = useState("form");

  // Form state (optional, for demonstration)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show toast notification on form submission
    setTimeout(() => {
      toast.success("Message sent! We will get back to you shortly.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const details = [
    { icon: <FiPhone />, label: "Phone", value: "+917484074135", href: "tel:+917484074135" },
    { icon: <FiMail />, label: "Email", value: "rajuranjan413@gmail.com", href: "mailto:rajuranjan413@gmail.com" },
    { icon: <FiLinkedin />, label: "LinkedIn", value: "linkedin.com/rajeev-ranjan", href: "https://linkedin.com/in/rajeev-ranjan-dev" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{ style: { background: "#11142d", color: "#e5e7eb", border: "1px solid rgba(129,140,248,0.3)" } }}
        />

        <SectionHeading eyebrow="// let's talk" title="Get In Touch" />

        <Reveal>
          <div className="glass relative mx-auto mb-8 flex max-w-md rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 rounded-full py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="contact-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal from="flip">
          <TiltCard intensity={5} className="rounded-2xl">
            <div className="gradient-border">
              <div className="rounded-[1.2rem] bg-[#0b0d22]/95 p-6 sm:p-10" style={{ perspective: 1000 }}>
                <AnimatePresence mode="wait">
                  {activeTab === "form" ? (
                    <motion.div key="form" {...panel} transition={{ duration: 0.4 }}>
                      <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={inputClass}
                            required
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={inputClass}
                            required
                          />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          rows={5}
                          className={inputClass}
                          required
                        ></textarea>
                        <div className="text-center">
                          <motion.button
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                            className="btn-glow inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white"
                          >
                            Send Message <FiSend />
                          </motion.button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="details" {...panel} transition={{ duration: 0.4 }}>
                      <h3 className="text-xl font-bold mb-6 text-white">Contact Details</h3>
                      <div className="space-y-3">
                        {details.map((d, i) => (
                          <motion.a
                            key={d.label}
                            href={d.href}
                            target={d.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            whileHover={{ x: 6 }}
                            className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-4 text-left transition hover:border-indigo-400/40"
                          >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-lg text-white">
                              {d.icon}
                            </span>
                            <span>
                              <span className="block text-xs uppercase tracking-wider text-gray-500">{d.label}</span>
                              <span className="break-all text-indigo-200">{d.value}</span>
                            </span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
};
