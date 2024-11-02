"use client";
import { ContactSection } from "./ContactSection";

import Navbar from "../../Layouts/Navbar";
import { HeroSection } from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "@/Layouts/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// const ContactSection = () => {
//   const [activeTab, setActiveTab] = useState("form");

//   return (
//     <section id="contact" className="py-16 bg-gray-900">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
//         <div className="flex mb-8 border-b border-gray-700">
//           <div
//             onClick={() => setActiveTab("form")}
//             className={`flex-1 cursor-pointer text-center py-2 transition duration-300 ${
//               activeTab === "form"
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-300 hover:text-white"
//             }`}
//           >
//             Contact Form
//           </div>
//           <div
//             onClick={() => setActiveTab("details")}
//             className={`flex-1 cursor-pointer text-center py-2 transition duration-300 ${
//               activeTab === "details"
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-300 hover:text-white"
//             }`}
//           >
//             Contact Details
//           </div>
//         </div>

//         {activeTab === "form" ? (
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4 text-white">
//               Send a Message
//             </h3>
//             <form>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   placeholder="Your Message"
//                   rows={4}
//                   className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-6 py-3 rounded-lg"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-4 text-white">
//               Contact Details
//             </h3>
//             <p className="text-gray-300 mb-2">
//               Phone: <span className="text-blue-400">+123 456 7890</span>
//             </p>
//             <p className="text-gray-300 mb-2">
//               Email: <span className="text-blue-400">example@example.com</span>
//             </p>
//             <p className="text-gray-300">
//               LinkedIn:{" "}
//               <a
//                 href="https://linkedin.com"
//                 className="text-blue-400 hover:underline"
//               >
//                 linkedin.com/in/yourprofile
//               </a>
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };
