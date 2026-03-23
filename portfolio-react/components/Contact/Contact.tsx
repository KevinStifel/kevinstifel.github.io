"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiSend } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--background-color)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[var(--heading-color)]">
            Contact Me
          </h2>
          <p className="text-[var(--default-color)]">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="bg-[var(--surface-color)] p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--heading-color)]">
              Get in touch
            </h3>
            <p className="text-[var(--default-color)] mb-6">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent-color)]/10 rounded-full">
                  <FiMail className="w-6 h-6 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--heading-color)]">Email</h4>
                  <a
                    href="mailto:krstifel@uc.cl"
                    className="text-[var(--default-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    krstifel@uc.cl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent-color)]/10 rounded-full">
                  <FiMapPin className="w-6 h-6 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--heading-color)]">Location</h4>
                  <p className="text-[var(--default-color)]">Santiago, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--accent-color)]/10 rounded-full">
                  <FiLinkedin className="w-6 h-6 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--heading-color)]">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/kevin-stifel-362bb6279/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--default-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              action="https://formspree.io/f/xpqygdvk"
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-[var(--surface-color)] border border-[var(--default-color)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-color)] text-[var(--default-color)] placeholder-[var(--default-color)]/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-[var(--surface-color)] border border-[var(--default-color)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-color)] text-[var(--default-color)] placeholder-[var(--default-color)]/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 bg-[var(--surface-color)] border border-[var(--default-color)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-color)] text-[var(--default-color)] placeholder-[var(--default-color)]/50 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-[var(--surface-color)] border border-[var(--default-color)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-color)] text-[var(--default-color)] placeholder-[var(--default-color)]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-4 bg-[var(--accent-color)] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
