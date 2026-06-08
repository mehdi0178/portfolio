"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <motion.h1
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        className="text-6xl font-bold"
      >
        AI-Enabled Full Stack Developer
      </motion.h1>

      <p className="mt-6 max-w-2xl text-slate-400">
        Building modern websites, AI-powered solutions,
        and scalable web applications.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-purple-600 px-6 py-3 rounded-xl">
          View Projects
        </button>

        <button className="border px-6 py-3 rounded-xl">
          Hire Me
        </button>
      </div>

    </section>
  );
}