import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-black/50 backdrop-blur-lg">
      {/* Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Tansu Aksoy
        </p>

        <div className="flex items-center gap-6 text-gray-400">
          <a
            href="https://www.linkedin.com/in/tansu-aksoy-169160206/"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/tansouaz"
            target="_blank"
            className="hover:text-orange-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.fiverr.com/tansouaz/build-python-automation-scripts-bots-and-web-scrapers"
            target="_blank"
            className="hover:text-orange-400 transition text-sm"
          >
            Fiverr
          </a>

          <a
            href="mailto:tansouuaz@gmail.com"
            target="_blank"
            className="hover:text-orange-400 transition text-sm"
          >
            Email
          </a>
        </div>

        <button
          onClick={scrollTop}
          className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 transition"
        >
          <FaArrowUp className="text-gray-300 text-sm" />
        </button>
      </div>
    </footer>
  );
}
