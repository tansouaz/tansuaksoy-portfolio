import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    const move = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const layers = document.querySelectorAll(".parallax");

      layers.forEach((layer, index) => {
        const speed = (index + 1) * 30;

        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;

        layer.style.transform = `translate(${xMove}px,${yMove}px)`;
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen gradient-bg text-white overflow-hidden">
      {/* PARALLAX LIGHTS */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="parallax absolute w-[1000px] h-[1000px] bg-orange-500/30 blur-[220px] rounded-full top-[-200px] left-[10%]" />

        <div className="parallax absolute w-[900px] h-[900px] bg-red-500/30 blur-[220px] rounded-full bottom-[-200px] right-[10%]" />

        <div className="parallax absolute w-[800px] h-[800px] bg-yellow-400/20 blur-[200px] rounded-full top-[40%] left-[40%]" />
      </div>

      {/* NAVBAR */}

      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
          <h1 className="font-semibold">Tansu Aksoy</h1>

          <div className="flex gap-8 text-sm text-gray-300">
            <Link to="/" className="hover:text-white">
              About
            </Link>

            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-10">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
        >
          Tansu Aksoy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          IT Specialist • Automation Engineer • Developer building intelligent
          automation systems and scalable platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-6"
        >
          <Link to="/projects">
            <button
              className="
    px-10 py-4
    rounded-2xl
    font-semibold
    text-white

    bg-gradient-to-r
    from-amber-500
    via-orange-500
    to-rose-500

    shadow-xl shadow-orange-500/30

    transition-all duration-300

    hover:scale-110
    hover:shadow-orange-400/60
    hover:brightness-110

    active:scale-95
    "
            >
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button
              className="
    px-10 py-4
    rounded-2xl
    font-medium
    text-white

    border border-white/20
    bg-white/5
    backdrop-blur-xl

    transition-all duration-300

    hover:bg-white/10
    hover:border-white/40
    hover:scale-110
    "
            >
              Contact
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
