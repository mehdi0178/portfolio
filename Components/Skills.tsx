export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "ASP.NET",
    "WordPress",
    "Shopify",
    "SEO",
    "AI Integration",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Technologies I use to build modern web applications and business solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg"
            >
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}