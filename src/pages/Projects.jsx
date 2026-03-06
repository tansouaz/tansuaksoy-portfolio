import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Intelligent IT Automation System",
      description:
        "AI powered IT automation platform for ticket analysis, workflow automation and infrastructure monitoring.",
      tech: ["Python", "Flask", "AI", "Automation", "n8n"],
      github: "https://github.com/tansouaz",
      demo: "https://github.com/tansouaz",
    },

    {
      title: "Telegram Automation Bots",
      description:
        "Custom Telegram bots with automation workflows, multi-language support and integrations.",
      tech: ["Python", "Telegram API", "Automation"],
      github: "https://github.com/tansouaz",
      demo: "https://github.com/tansouaz",
    },

    {
      title: "AI Monitoring Systems",
      description:
        "AI based infrastructure monitoring and ticket prioritization platform.",
      tech: ["AI", "Python", "Monitoring"],
      github: "https://github.com/tansouaz",
      demo: "https://github.com/tansouaz",
    },

    {
      title: "Enterprise IT Infrastructure",
      description:
        "Enterprise IT infrastructure management including network configuration, ERP systems and database optimization.",
      tech: ["Networking", "Database", "ERP"],
      github: "https://github.com/tansouaz",
      demo: "https://github.com/tansouaz",
    },

    {
      title: "CS50x Final Project",
      description:
        "Python application with SQL database integration implementing algorithms and data structures.",
      tech: ["Python", "SQL", "Algorithms"],
      github: "https://github.com/tansouaz",
      demo: "https://github.com/tansouaz",
    },
  ];

  return (
    <section className="min-h-screen gradient-bg text-white pt-32 pb-40 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" glass p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition"
                >
                  <Github size={18} />
                  Github
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
