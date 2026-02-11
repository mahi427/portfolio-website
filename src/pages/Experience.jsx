import { experience } from "../data/projects";

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="text-indigo-600">Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-50 border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-indigo-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

              <ul className="text-sm space-y-2">
                {exp.points.map((pt, i) => (
                  <li key={i}>✅ {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
