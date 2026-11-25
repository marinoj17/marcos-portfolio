
"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >

      {/* Glow de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#06b6d410,transparent_40%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">

        {/* Titulo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Proyectos Participados
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl text-lg">
            Soluciones tecnológicas orientadas a optimizar procesos,
            desarrollar plataformas empresariales y mejorar la gestión
            de información.
          </p>
        </motion.div>

        {/* Proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group relative bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Glow tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Borde inferior */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              </div>

              {/* Contenido */}
              <div className="relative p-8">

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-2 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Indicador */}
                <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-800">

                  <span className="text-sm text-slate-500">
                    Proyecto tecnológico
                  </span>

                  <span className="text-cyan-400 group-hover:translate-x-2 transition-transform">
                    →
                  </span>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
