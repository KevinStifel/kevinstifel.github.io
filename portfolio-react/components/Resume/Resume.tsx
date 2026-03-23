"use client";

import { motion } from "framer-motion";
import "./Resume.css";

const experiences = [
  {
    period: "Mar 2026 - Present",
    title: "Consulting Intern — Technology Strategy & Transformation (TS&T)",
    company: "Deloitte",
    description:
      "Supporting a Knowledge Management project for a major insurance company through stakeholder analysis, knowledge source mapping, and documentation review. Assisting in the documentation of system modules and operational workflows aligned with ITIL practices. Developing recommendations for an AI-based Proof of Concept (PoC) leveraging the organizational knowledge base.",
  },
  {
    period: "Jan 2025 - Mar 2025",
    title: "Internship — Software Development Analyst",
    company: "Citi",
    description:
      "Modernized COBOL-based mainframe applications using HATS to integrate macros, JavaScript and business logic into modern web interfaces. Improved user interaction without modifying the existing COBOL codebase. Collaborated under Kanban methodology and led English-language meetings with U.S. stakeholders.",
  },
  {
    period: "Mar 2024 - Jul 2024",
    title: "Backend Developer (Project Collaboration)",
    company: "Municipality of Vitacura",
    description: "Developed backend and deployed cloud services for a municipal inspection platform.",
    highlights: [
      "Built RESTful APIs using Node.js, Express and PostgreSQL.",
      "Implemented secure authentication and role-based access with Auth0.",
      "Automated workflows previously managed in Excel to improve inspector productivity.",
      "Deployed backend to Render to ensure availability and scalability for production and development.",
    ],
  },
  {
    period: "Jan 2023 - Feb 2023",
    title: "Pastry Production Assistant",
    company: "El Parrón Bakery",
    description:
      "Responsible for preparation and decoration of cakes, ingredient processing to optimize consistency and texture, and operation of industrial ovens while maintaining high quality standards.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-[var(--background-color)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[var(--heading-color)]">
            Professional Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
              Education
            </h3>
            
            {/* Master's Degree */}
            <div className="bg-[var(--surface-color)] p-6 rounded-xl shadow-md mb-6">
              <h4 className="text-lg font-semibold text-[var(--heading-color)]">
                Máster in Project Management
              </h4>
              <p className="text-[var(--accent-color)] font-medium mb-2">2025 - 2026</p>
              <p className="text-[var(--default-color)]">
                Universidad de Barcelona
              </p>
            </div>
            
            {/* Bachelor's Degree */}
            <div className="bg-[var(--surface-color)] p-6 rounded-xl shadow-md mb-8">
              <h4 className="text-lg font-semibold text-[var(--heading-color)]">
                Pontificia Universidad Católica de Chile
              </h4>
              <p className="text-[var(--accent-color)] font-medium mb-2">2018 - 2025</p>
              <p className="text-[var(--default-color)]">
                Industrial Civil Engineer; Diploma in Information Technology Engineering
              </p>
            </div>

            <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
              Certificates
            </h3>
            <div className="space-y-4">
              <div className="bg-[var(--surface-color)] p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-[var(--heading-color)] mb-3">
                  Development & Programming
                </h4>
                <ul className="space-y-2 text-[var(--default-color)]">
                  <li>• Flutter: Complete guide for iOS and Android - Udemy</li>
                  <li>• Node.js: From Zero to Expert - Udemy</li>
                  <li>• Dart: From Scratch to Details - Udemy</li>
                </ul>
              </div>
              <div className="bg-[var(--surface-color)] p-6 rounded-xl shadow-md">
                <h4 className="font-semibold text-[var(--heading-color)] mb-3">
                  Professional Development
                </h4>
                <ul className="space-y-2 text-[var(--default-color)]">
                  <li>• TOEIC English Level B2 — Score: 920</li>
                  <li>• Investment Project Evaluation - Coursera</li>
                  <li>• Fundamentals of Professional Networking - LinkedIn</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
              Professional Experience
            </h3>
            <div className="relative border-l-2 border-[var(--accent-color)] ml-4 space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Timeline marker */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent-color)] border-4 border-[var(--background-color)]" />
                  
                  {/* Date badge */}
                  <span className="inline-block px-3 py-1 bg-[var(--surface-color)] text-[var(--accent-color)] text-xs font-semibold rounded-full mb-3 shadow">
                    {exp.period}
                  </span>
                  
                  {/* Content card */}
                  <div className="bg-[var(--surface-color)] p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-[var(--heading-color)] mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-[var(--accent-color)] text-sm font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-[var(--default-color)] text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.highlights && (
                      <ul className="mt-3 space-y-1 text-[var(--default-color)] text-sm">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--accent-color)] mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
