"use client";

import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiDart,
  SiRender,
} from "react-icons/si";
import {
  FiArrowRight,
  FiKey,
  FiShield,
  FiGitBranch,
  FiList,
} from "react-icons/fi";
import "./About.css";

const techStack = {
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  ],
  frontend: [
    { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    { name: "Dart", icon: SiDart, color: "text-blue-600" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  ],
  devops: [
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", icon: FaGithub, color: "text-[var(--heading-color)]" },
    { name: "Render", icon: SiRender, color: "text-[var(--heading-color)]" },
  ],
  tools: [
    { name: "API REST", icon: FiArrowRight, color: "text-blue-500" },
    { name: "JWT", icon: FiKey, color: "text-yellow-500" },
    { name: "Auth0", icon: FiShield, color: "text-green-500" },
    { name: "CI/CD", icon: FiGitBranch, color: "text-purple-500" },
    { name: "Agile", icon: FiList, color: "text-blue-400" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--surface-color)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Profile Info + About Me */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image & Info */}
            <div className="flex flex-col gap-6 mb-8">
              <img
                src="/img/profile-img.jpg"
                alt="Kevin Stifel"
                className="profile-image"
              />
              <div className="space-y-3">
                <p>
                  <strong className="text-[var(--heading-color)]">Name: </strong>
                  <span className="text-[var(--default-color)]">Kevin Stifel</span>
                </p>
                <p>
                  <strong className="text-[var(--heading-color)]">Profile: </strong>
                  <span className="text-[var(--default-color)]">Software Developer</span>
                </p>
                <p>
                  <strong className="text-[var(--heading-color)]">Email: </strong>
                  <a href="mailto:stifelk@gmail.com" className="text-[var(--accent-color)] hover:underline">
                    stifelk@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-[var(--heading-color)]">Phone: </strong>
                  <span className="text-[var(--default-color)]">+569 61684461</span>
                </p>
              </div>
            </div>

            {/* About Me Text */}
            <div className="border-t border-[var(--default-color)]/20 pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--heading-color)]">
                About me
              </h3>
              <div className="space-y-4 text-[var(--default-color)]">
                <p>
                  I enjoy transforming ideas into efficient, scalable systems, focusing on designing and developing backend architectures that are clean, maintainable, and reliable.
                </p>
                <p>
                  I&apos;ve worked with Node.js, Flutter, AWS, and cloud deployments always focused on building solutions that actually improve how teams and users work.
                </p>
                <p>
                  I care about clean code, automation, and exploring how AI can enhance development and decision-making.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--heading-color)]">
              Technologies I Work With
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {Object.entries(techStack).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  className="bg-[var(--background-color)] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                >
                  <h3 className="text-sm font-semibold text-[var(--accent-color)] uppercase tracking-wider mb-4">
                    {category === "backend" && "Backend & Database"}
                    {category === "frontend" && "Frontend & Mobile"}
                    {category === "devops" && "DevOps & Cloud"}
                    {category === "tools" && "Tools & Practices"}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[var(--accent-color)]/5 hover:bg-[var(--accent-color)]/10 transition-colors min-w-[70px]"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                      >
                        <tech.icon className={`w-8 h-8 ${tech.color}`} />
                        <span className="text-xs text-[var(--default-color)] font-medium">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
