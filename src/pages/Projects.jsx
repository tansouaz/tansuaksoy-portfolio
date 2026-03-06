// import { Github, ExternalLink } from "lucide-react";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Intelligent IT Automation System",
//       description:
//         "AI powered IT automation platform for ticket analysis, workflow automation and infrastructure monitoring.",

//       tech: ["Python", "Flask", "AI", "Automation", "n8n"],

//       website: ["React", "TailwindCSS", "Vercel", "Responsive Design"],

//       seo: ["Technical SEO", "Semantic HTML", "Performance Optimization"],

//       github: "https://github.com/tansouaz",
//       websiteLink: "https://tansuaksoy.com",
//     },

//     {
//       title: "Telegram Automation Bots",
//       description:
//         "Custom Telegram bots with automation workflows, multi-language support and integrations.",

//       tech: ["Python", "Telegram API", "Automation"],

//       website: ["React", "TailwindCSS", "API Integration"],

//       seo: ["Technical SEO", "Performance Optimization"],

//       github: "https://github.com/tansouaz",
//       websiteLink: "https://tansuaksoy.com",
//     },

//     {
//       title: "AI Monitoring Systems",
//       description:
//         "AI based infrastructure monitoring and ticket prioritization platform.",

//       tech: ["AI", "Python", "Monitoring"],

//       website: [
//         "Dashboard UI",
//         "System Monitoring",
//         "Infrastructure Visualization",
//       ],

//       seo: ["Performance Optimization", "Structured Data"],

//       github: "https://github.com/tansouaz",
//       websiteLink: "https://tansuaksoy.com",
//     },

//     {
//       title: "Enterprise IT Infrastructure",
//       description:
//         "Enterprise IT infrastructure management including network configuration, ERP systems and database optimization.",

//       tech: ["Networking", "Database", "ERP"],

//       website: ["Enterprise Systems", "Infrastructure Management"],

//       seo: ["Performance Optimization"],

//       github: "https://github.com/tansouaz",
//       websiteLink: "https://tansuaksoy.com",
//     },

//     {
//       title: "CS50x Final Project",
//       description:
//         "Python application with SQL database integration implementing algorithms and data structures.",

//       tech: ["Python", "SQL", "Algorithms"],

//       website: ["Python Backend", "SQL Database"],

//       seo: ["Clean Architecture", "Performance Optimization"],

//       github: "https://github.com/tansouaz",
//       websiteLink: "https://tansuaksoy.com",
//     },
//   ];

//   return (
//     <section className="min-h-screen gradient-bg text-white pt-32 pb-40 px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold mb-16">Featured Projects</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="glass p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
//             >
//               <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

//               <p className="text-gray-300 mb-6">{project.description}</p>

//               {/* TECH */}

//               <p className="text-sm text-orange-400 mb-2 font-semibold">Tech</p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* WEBSITE */}

//               <p className="text-sm text-orange-400 mb-2 font-semibold">
//                 Website
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.website.map((item, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* SEO */}

//               <p className="text-sm text-orange-400 mb-2 font-semibold">SEO</p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.seo.map((item, i) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* LINKS */}

//               <div className="flex gap-6">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-orange-400 transition"
//                 >
//                   <Github size={18} />
//                   Github
//                 </a>

//                 <a
//                   href={project.websiteLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 hover:text-orange-400 transition"
//                 >
//                   <ExternalLink size={18} />
//                   Website
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
      title: "Business & Portfolio Website Development",
      description:
        "Professional website development for businesses, startups and personal brands with responsive design, modern UI and optimized performance.",
      tech: ["React", "TailwindCSS", "JavaScript", "Frontend Development"],
      github: "https://github.com/tansouaz",
      demo: "https://tansuaksoy.com",
    },

    {
      title: "Technical SEO Optimization",
      description:
        "Technical SEO optimization for improving website performance, search engine visibility, and structured HTML architecture.",
      tech: ["SEO", "Technical SEO", "Performance Optimization"],
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
