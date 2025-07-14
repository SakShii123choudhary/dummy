import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaUserAlt,
  FaPaintBrush,
  FaChartLine,
  FaTools,
  FaLightbulb,
  FaPalette,
  FaUsers,
  FaKeyboard,
  FaRocket,
  FaBrain
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  { id: 1, color: "bg-cyan-400", text: "Researching & Analysis" },
  { id: 2, color: "bg-green-400", text: "Creating wireframes & prototypes" },
  { id: 3, color: "bg-orange-400", text: "Constantly measure how designs are performing" },
  { id: 4, color: "bg-pink-400", text: "Collaborating with marketing, frontend, and business team" }
];

function Web({ darkMode }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 px-4 py-16 space-y-16 text-gray-800 dark:text-white">
        <div className="flex flex-col md:flex-row bg-white/80 dark:bg-gray-800/70 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden w-full max-w-6xl" data-aos="zoom-in-up">
          <div className="md:w-1/3 bg-gradient-to-b from-cyan-500 to-sky-500 flex flex-col items-center justify-center p-8 text-white text-center space-y-4">
            <FaUserAlt className="text-5xl animate-bounce" />
            <h1 className="text-4xl font-bold">Web Designer</h1>
            <h2 className="text-2xl font-light animate-fade">My Roles</h2>
          </div>

          <div className="md:w-2/3 p-8 space-y-6 bg-white dark:bg-gray-900 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-600">
            {roles.map((role) => (
              <div
                key={role.id}
                data-aos="fade-up"
                className="flex items-start space-x-4 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 bg-gray-50 dark:bg-gray-700"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${role.color}`}>
                  <FaCheckCircle />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">{role.text}</p>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8" data-aos="zoom-in">
              <div className="flex items-center space-x-3 p-4 bg-purple-100 dark:bg-purple-700 rounded-xl">
                <FaPaintBrush className="text-purple-600 dark:text-purple-200 text-2xl animate-spin-slow" />
                <span className="font-semibold text-purple-700 dark:text-purple-100">Creative Visual Thinker</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-yellow-100 dark:bg-yellow-700 rounded-xl">
                <FaChartLine className="text-yellow-600 dark:text-yellow-100 text-2xl animate-pulse" />
                <span className="font-semibold text-yellow-700 dark:text-yellow-100">Data-Informed Design</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-100 dark:bg-green-700 rounded-xl">
                <FaTools className="text-green-600 dark:text-green-100 text-2xl animate-wiggle" />
                <span className="font-semibold text-green-700 dark:text-green-100">Technical UI Development</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-pink-100 dark:bg-pink-700 rounded-xl">
                <FaLightbulb className="text-pink-600 dark:text-pink-100 text-2xl animate-bounce" />
                <span className="font-semibold text-pink-700 dark:text-pink-100">UX Psychology & Strategy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-400">My Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-100 dark:bg-indigo-700 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaPalette className="text-indigo-600 dark:text-indigo-200 text-4xl mx-auto mb-2 animate-bounce" />
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-100">Consistency</h3>
              <p className="text-gray-700 dark:text-gray-300">Design elements must follow a clear visual language.</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-700 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-blue-600 dark:text-blue-200 text-4xl mx-auto mb-2 animate-fade-in" />
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-100">User Empathy</h3>
              <p className="text-gray-700 dark:text-gray-300">I design with the user's experience at the heart of every decision.</p>
            </div>
            <div className="bg-pink-100 dark:bg-pink-700 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <FaKeyboard className="text-pink-600 dark:text-pink-200 text-4xl mx-auto mb-2 animate-wiggle" />
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-100">Accessibility</h3>
              <p className="text-gray-700 dark:text-gray-300">Inclusive designs that are easy to navigate and use for all users.</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-8" data-aos="zoom-in-up">
          <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">Workflow & Process</h2>
          <ol className="relative border-l-4 border-blue-300 dark:border-blue-600 space-y-8 pl-6">
            <li data-aos="fade-right">
              <h4 className="font-semibold text-blue-600 dark:text-blue-300">🔍 Empathize</h4>
              <p className="text-gray-700 dark:text-gray-300">Understand user needs, research pain points, and define goals.</p>
            </li>
            <li data-aos="fade-left">
              <h4 className="font-semibold text-blue-600 dark:text-blue-300">📝 Ideate</h4>
              <p className="text-gray-700 dark:text-gray-300">Sketch, brainstorm, and wireframe multiple design directions.</p>
            </li>
            <li data-aos="fade-right">
              <h4 className="font-semibold text-blue-600 dark:text-blue-300">🎨 Design & Prototype</h4>
              <p className="text-gray-700 dark:text-gray-300">High-fidelity design in Figma and interactive prototyping for feedback.</p>
            </li>
            <li data-aos="fade-left">
              <h4 className="font-semibold text-blue-600 dark:text-blue-300">🚀 Deliver & Iterate</h4>
              <p className="text-gray-700 dark:text-gray-300">Handoff assets to developers, then refine after launch.</p>
            </li>
          </ol>
        </div>

        <div className="w-full max-w-6xl bg-gradient-to-r from-indigo-100 via-white to-purple-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded-2xl shadow-xl p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-4">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaRocket className="text-indigo-600 dark:text-indigo-300 text-3xl animate-bounce" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Fast Turnaround</h3>
                <p className="text-gray-700 dark:text-gray-300">I ensure projects are delivered on time without compromising quality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBrain className="text-pink-600 dark:text-pink-300 text-3xl animate-pulse" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Strategic Thinking</h3>
                <p className="text-gray-700 dark:text-gray-300">Combining business goals with intuitive design for impactful results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
