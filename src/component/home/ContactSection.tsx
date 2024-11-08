import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Toaster position="bottom-right" reverseOrder={false} />
        
        <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
        <div className="flex mb-8 border-b border-gray-700">
          <div
            onClick={() => setActiveTab("form")}
            className={`flex-1 cursor-pointer text-center py-2 transition duration-300 ${
              activeTab === "form"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact Form
          </div>
          <div
            onClick={() => setActiveTab("details")}
            className={`flex-1 cursor-pointer text-center py-2 transition duration-300 ${
              activeTab === "details"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact Details
          </div>
        </div>

        {activeTab === "form" ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Details</h3>
            <p className="text-gray-300 mb-2">
              Phone: <span className="text-blue-400">+917484074135</span>
            </p>
            <p className="text-gray-300 mb-2">
              Email: <span className="text-blue-400">rajuranjan413@gmail.com</span>
            </p>
            <p className="text-gray-300">
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/rajeev-ranjan-dev"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/rajeev-ranjan-dev
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
