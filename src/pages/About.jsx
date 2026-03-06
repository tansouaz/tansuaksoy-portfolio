export default function About() {
  return (
    <section className="min-h-screen gradient-bg text-white pt-32 pb-40 px-8">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* ABOUT ME */}

        <div className="glass p-10 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Software Developer and IT Specialist with a Bachelor's degree in
            Computer and Instructional Technologies Education from Istanbul
            University – Cerrahpaşa. I specialize in building automation
            systems, intelligent software solutions, and modern web
            applications. My experience includes IT infrastructure management,
            enterprise software support, and backend development using Python,
            C#, and modern web technologies. Passionate about designing
            efficient systems, automation tools, and scalable software solutions
            that solve real-world technical challenges.
          </p>
        </div>

        {/* CORE COMPETENCIES */}

        <div>
          <h2 className="text-3xl font-semibold mb-10 text-orange-400">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              IT Infrastructure Management
            </div>
            <div className="glass p-6 rounded-xl">
              System Performance Optimization
            </div>
            <div className="glass p-6 rounded-xl">
              Enterprise Software Support
            </div>
            <div className="glass p-6 rounded-xl">Database Administration</div>
            <div className="glass p-6 rounded-xl">
              Technical Troubleshooting
            </div>
            <div className="glass p-6 rounded-xl">
              Automation & Process Improvement
            </div>
          </div>
        </div>

        {/* WORK EXPERIENCE */}

        <div>
          <h2 className="text-3xl font-semibold mb-12">Work Experience</h2>

          <div className="space-y-12">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold">
                ACEM SANAYİ İÇ VE DIŞ TİCARET
              </h3>

              <p className="text-orange-400 mb-4">
                IT Specialist | 2023 — Present
              </p>

              <ul className="space-y-1 text-gray-300">
                <li>• Managed enterprise IT infrastructure</li>
                <li>• Improved database performance</li>
                <li>• Supported ERP and operational software</li>
                <li>• Prevented system disruptions via monitoring</li>
                <li>• Implemented automation for internal workflows</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold">
                DENİZ KESKİN KOÇLUK VE DANIŞMANLIK
              </h3>

              <p className="text-orange-400 mb-4">
                IT Specialist | 2020 — 2023
              </p>

              <ul className="space-y-1 text-gray-300">
                <li>• Maintained company IT systems</li>
                <li>• Software installation and support</li>
                <li>• Network configuration and troubleshooting</li>
                <li>• Provided technical assistance for operations</li>
              </ul>
            </div>
          </div>
        </div>
        {/* EDUCATION */}

        <div>
          <h2 className="text-3xl font-semibold mb-10 text-orange-400">
            Education
          </h2>

          <div className="space-y-8">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold">
                ISTANBUL UNIVERSITY – CERRAHPAŞA
              </h3>

              <p className="text-gray-300 mt-2">
                Bachelor’s Degree in Computer & Instructional Technologies
                Education
              </p>

              <p className="text-orange-400 mt-1">2019 — 2023</p>
            </div>

            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold">
                HARVARDX (HARVARD UNIVERSITY)
              </h3>

              <p className="text-gray-300 mt-2">
                CS50x: Introduction to Computer Science
              </p>

              <p className="text-orange-400 mt-1">2026</p>
            </div>
          </div>
        </div>

        {/* TECHNICAL PROJECTS */}

        <div>
          <h2 className="text-3xl font-semibold mb-10 text-orange-400">
            Technical Projects
          </h2>

          <div className="space-y-6 text-gray-300">
            <div className="glass p-6 rounded-xl">
              <strong>CS50x Final Project</strong>

              <p>
                Python application with SQL database integration and algorithmic
                problem solving.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <strong>Automation & System Optimization</strong>

              <p>
                Automation scripts to improve workflow efficiency and system
                performance.
              </p>
            </div>

            <div className="glass p-6 rounded-xl">
              <strong>Web Development Projects</strong>

              <p>Responsive web interfaces using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>

        {/* LANGUAGES */}

        <div>
          <h2 className="text-3xl font-semibold mb-8">Languages</h2>

          <div className="flex flex-wrap gap-4">
            <span className="glass px-5 py-2 rounded-xl">Turkish — Native</span>
            <span className="glass px-5 py-2 rounded-xl">Persian — Native</span>
            <span className="glass px-5 py-2 rounded-xl">English</span>
          </div>
        </div>
      </div>
    </section>
  );
}
