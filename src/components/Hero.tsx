
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CircuitBackground from "@/components/background/CircuitBackground";

import { FaCode, FaDatabase } from "react-icons/fa";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Fondo de circuitos */}
      <CircuitBackground />

      {/* Iluminación de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7C3AED22,transparent_40%)] z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">

          {/* PRESENTACION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <p className="text-cyan-400 text-xl font-medium">
              Hola 👋
            </p>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mt-4 text-white">
              Marcos Mariño
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-400 mt-4">
              Backend Developer & DBA
            </h2>

            <p className="max-w-2xl mt-8 text-lg text-slate-300 leading-relaxed mx-auto lg:mx-0">
              Más de 10 años desarrollando plataformas empresariales,
              soluciones logísticas, APIs, bases de datos y sistemas de
              trazabilidad.
            </p>

            {/* TECNOLOGÍAS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {[
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "SQL Server", icon: <FaDatabase />, color: "#CC2927" },
  { name: "API", icon: <FaCode />, color: "#22D3EE" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
].map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className="tech-pulse group flex items-center gap-2 px-4 py-2 rounded-full
                             border border-cyan-500/30 bg-slate-900/80 text-cyan-300 text-sm
                             backdrop-blur-sm transition-all duration-300
                             hover:border-cyan-400 hover:bg-cyan-500/10
                             hover:shadow-[0_0_15px_rgba(0,229,255,0.35)]
                             hover:scale-110 cursor-default"
                  style={{ animationDelay: `${index * 1.5}s` }}
                >
                  <span
                    className="tech-icon transition-all duration-300 group-hover:scale-125"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </span>

                  <span className="font-medium tracking-wide">
                    {tech.name}
                  </span>
                </motion.span>
              ))}
            </div>

            {/* BOTONES */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

              <a
                href="/cv/CV_Marcos_Marino_ATS_ES.pdf"
                download
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Descargar CV ES
              </a>

              <a
                href="/cv/CV_Marcos_Marino_ATS_EN.pdf"
                download
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Download CV EN
              </a>

            </div>

            {/* PROYECTOS */}
            <div className="mt-8">
              <a
                href="#proyectos"
                className="text-cyan-400 hover:text-white transition-colors"
              >
                Ver proyectos →
              </a>
            </div>

          </motion.div>

          {/* FOTOGRAFIA */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex justify-center"
          >

            {/* Halo */}
            <div className="absolute w-[80%] h-[80%] bg-cyan-500/20 blur-[100px] rounded-full" />

            {/* Marco */}
            <div className="relative w-full max-w-md">

              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-60" />

              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-900">

                <Image
                  src="/images/marcos.png"
                  alt="Marcos Mariño, Backend Developer y DBA"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-auto object-cover"
                />

              </div>

              {/* Elemento decorativo */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-3xl" />

              <div className="absolute -top-5 -right-5 w-24 h-24 border-r-2 border-t-2 border-purple-500/50 rounded-tr-3xl" />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
