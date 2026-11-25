
"use client";

const experiences = [
  { year: "2008", role: "Licenciado en Computación" },
  { year: "2009", role: "Ingeniero Mecánico" },
  { year: "2010-2013", role: "Project Planner" },
  { year: "2014", role: "VIT - Analista Programador" },
  { year: "2015-2018", role: "Backend Developer & DBA" },
  { year: "2020-2021", role: "Freelance" },
  { year: "2021", role: "OMAS" },
  { year: "2022", role: "Ecommerce Developer" },
  { year: "2023", role: "Newtrans Backend Developer" },
];

export default function Timeline() {
  return (
    <section className="timeline-section py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-20">
          Mi Trayectoria
        </h2>

        <div className="timeline-scroll">
          <div className="timeline-container">
            {/* Línea de energía */}
            <div className="timeline-track">
              <div className="timeline-base" />
              <div className="timeline-glow" />
              <div className="timeline-energy timeline-energy-one" />
              <div className="timeline-energy timeline-energy-two" />
            </div>

            {/* Experiencias */}
            <div className="timeline-items">
              {experiences.map((item, index) => (
                <div className="timeline-item" key={item.year}>
                  <div
                    className="timeline-node-wrapper"
                    style={{
                      animationDelay: `${index * 1.05}s`,
                    }}
                  >
                    <div className="timeline-node-ring" />
                    <div className="timeline-node" />
                    <div className="timeline-node-core" />
                  </div>

                  <h3
                    className="timeline-year"
                    style={{
                      animationDelay: `${index * 1.05}s`,
                    }}
                  >
                    {item.year}
                  </h3>

                  <p className="timeline-role">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
