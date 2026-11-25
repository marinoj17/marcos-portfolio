const skills = [
  ["PHP",95],
  ["Laravel",90],
  ["SQL Server",90],
  ["MySQL",85],
  ["PostgreSQL",85],
  ["React",75],
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-16">
          Skills
        </h2>

        {skills.map(([name,value]) => (
          <div
            key={name}
            className="mb-8"
          >
            <div className="flex justify-between mb-2">
              <span>{name}</span>
              <span>{value}%</span>
            </div>

            <div className="bg-slate-800 h-4 rounded-full">
              <div
                className="bg-cyan-500 h-4 rounded-full"
                style={{
                  width: `${value}%`
                }}
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}