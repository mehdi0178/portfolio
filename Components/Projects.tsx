"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, } from "react-icons/fa";


const projects = [
  {
    title: "T-Rex Oil Website",
    description:
      "Modern product showcase website with Firebase integration and SEO optimization.",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Quiz Web App",
    description:
      "Interactive quiz platform with authentication and leaderboard.",
    tech: ["MERN", "JWT", "MongoDB"],
  },
  {
    title: "Auction Management System",
    description:
      "ASP.NET project with player bidding and admin controls.",
    tech: ["ASP.NET", "MySQL"],
  },
  {
    title: "AI Developer Portfolio",
    description:
      "Animated AI-powered portfolio built using Next.js and Framer Motion.",
    tech: ["Next.js", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-purple-500/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2">
                <FaGithub size={18} />
                Code
              </button>

              <button className="flex items-center gap-2">
                <ExternalLink size={18} />
                Live Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}