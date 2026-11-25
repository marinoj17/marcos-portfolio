
"use client";

import {
  FaCalendarAlt,
  FaCode,
  FaLayerGroup,
  FaServer,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      value: "10+",
      label: "Años de experiencia",
      icon: FaCalendarAlt,
    },
    {
      value: "20+",
      label: "Proyectos",
      icon: FaCode,
    },
    {
      value: "6+",
      label: "Tecnologías",
      icon: FaLayerGroup,
    },
    {
      value: "100%",
      label: "Backend",
      icon: FaServer,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#06b6d410,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-8">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              style={{
                animationDelay: `${index * 2.5}s`,
              }}
              className="stat-pulse group relative bg-slate-900/80 border border-slate-800 p-8 rounded-3xl text-center overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >

              {/* Fondo de iluminacion */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icono */}
              <div className="relative flex justify-center mb-6">

                <div className="absolute w-16 h-16 rounded-full bg-cyan-500/20 blur-xl opacity-50 group-hover:opacity-100 transition" />

                {/* Anillo de energia */}
                <div
                  style={{
                    animationDelay: `${index * 2.5}s`,
                  }}
                  className="stat-ring-pulse absolute w-16 h-16 rounded-full border border-cyan-400"
                />

                <div className="relative w-16 h-16 rounded-2xl border border-cyan-500/20 bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-500">

                  <Icon
                    style={{
                      animationDelay: `${index * 2.5}s`,
                    }}
                    size={28}
                    className="stat-icon-pulse text-cyan-400"
                  />

                </div>

              </div>

              {/* Numero */}
              <h3
                style={{
                  animationDelay: `${index * 2.5}s`,
                }}
                className="stat-number-pulse relative text-5xl font-bold text-cyan-400"
              >
                {item.value}
              </h3>

              {/* Texto */}
              <p className="relative mt-4 text-slate-400 group-hover:text-slate-300 transition-colors">
                {item.label}
              </p>

              {/* Linea decorativa */}
              <div className="relative w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6 scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />

            </div>
          );
        })}

      </div>
    </section>
  );
}
