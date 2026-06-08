import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Mehdi.dev
            </h2>

            <p className="text-slate-400 mt-4">
              AI-Enabled Full Stack Developer building
              modern websites, web applications, and
              business solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

            </div>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/"
                target="_blank"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Mehdi.dev
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}