import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        {/* LOGO */}

        <Link
          to="/"
          className="text-sm md:text-xl font-bold tracking-wide group relative whitespace-nowrap"
        >
          <span className="text-white group-hover:text-orange-400 transition duration-300">
            Tansu Aksoy
          </span>

          <span className="ml-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
            | IT Portfolio
          </span>

          <span className="absolute -inset-1 blur-lg opacity-0 group-hover:opacity-40 transition bg-orange-500"></span>
        </Link>

        {/* DESKTOP MENU */}

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative group text-sm md:text-base"
              >
                <span
                  className={`transition duration-300
                  ${
                    active
                      ? "text-orange-400"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300
                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-black/70 backdrop-blur-xl">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-base transition
                ${active ? "text-orange-400" : "text-gray-300"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Projects", path: "/projects" },
//     { name: "Skills", path: "/skills" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
//         {/* LOGO */}

//         <Link
//           to="/"
//           className="text-lg md:text-xl font-bold tracking-wide group relative"
//         >
//           <span className="text-white group-hover:text-orange-400 transition duration-300">
//             Tansu Aksoy
//           </span>

//           <span className="ml-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
//             | IT Portfolio
//           </span>

//           <span className="absolute -inset-1 blur-lg opacity-0 group-hover:opacity-40 transition bg-orange-500"></span>
//         </Link>

//         {/* DESKTOP MENU */}

//         <nav className="hidden md:flex items-center gap-10">
//           {links.map((link) => {
//             const active = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="relative group text-sm md:text-base"
//               >
//                 <span
//                   className={`transition duration-300
//                   ${active ? "text-orange-400" : "text-gray-300 group-hover:text-white"}
//                   `}
//                 >
//                   {link.name}
//                 </span>

//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300
//                   ${active ? "w-full" : "w-0 group-hover:w-full"}
//                   `}
//                 />
//               </Link>
//             );
//           })}
//         </nav>

//         {/* MOBILE BUTTON */}

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white text-xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}

//       {menuOpen && (
//         <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black/60 backdrop-blur-xl">
//           {links.map((link) => {
//             const active = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`text-base transition
//                 ${active ? "text-orange-400" : "text-gray-300"}
//                 `}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </header>
//   );
// }
