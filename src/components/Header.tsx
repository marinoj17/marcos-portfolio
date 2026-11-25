
"use client";

import {
  FaLinkedinIn,
  FaGithub,
  // FaFacebookF,
  // FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/marinoj17/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/marinoj17",
  },
  // {
  //   name: "X",
  //   icon: FaXTwitter,
  //   href: "https://x.com/TU-USUARIO",
  // },
  // {
  //   name: "Facebook",
  //   icon: FaFacebookF,
  //   href: "https://www.facebook.com/TU-USUARIO",
  // },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#inicio"
          className="font-bold text-2xl text-white hover:text-cyan-400 transition"
        >
          MM
        </a>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-slate-300">
          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Proyectos
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#timeline"
            className="hover:text-cyan-400 transition"
          >
            Trayectoria
          </a>
        </nav>

        {/* REDES SOCIALES */}
        <div className="flex gap-3">

          {socialLinks.map(({ name, icon: Icon, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:text-cyan-400 hover:bg-slate-700 hover:scale-110 hover:shadow-cyan-500/50 hover:shadow-lg transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}

        </div>

      </div>
    </header>
  );
}
