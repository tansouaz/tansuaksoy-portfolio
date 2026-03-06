import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-6 py-24 text-white">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

        {/* WhatsApp CTA */}
        <div className="glass rounded-2xl p-6 mb-10 flex items-center justify-between hover:bg-white/10 transition">
          <div className="flex items-center gap-4">
            <MessageCircle className="text-green-400 w-7 h-7" />

            <div>
              <p className="text-lg font-semibold">Chat on WhatsApp</p>
              <p className="text-sm opacity-70">Fastest way to reach me</p>
            </div>
          </div>

          <a
            href="https://wa.me/905379938782"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-medium transition"
          >
            Open Chat
          </a>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="tel:+905379938782"
            className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Phone className="text-orange-400 w-7 h-7" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="opacity-70 text-sm">+90 537 993 8782</p>
            </div>
          </a>

          <div className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition">
            <MapPin className="text-orange-400 w-7 h-7" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="opacity-70 text-sm">Istanbul, Türkiye</p>
            </div>
          </div>

          <a
            href="mailto:tansouuaz@gmail.com"
            className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Mail className="text-orange-400 w-7 h-7" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="opacity-70 text-sm">tansouuaz@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/tansu-aksoy-169160206"
            target="_blank"
            className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Linkedin className="text-orange-400 w-7 h-7" />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="opacity-70 text-sm">View Profile</p>
            </div>
          </a>

          <a
            href="https://github.com/tansouaz"
            target="_blank"
            className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition"
          >
            <Github className="text-orange-400 w-7 h-7" />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="opacity-70 text-sm">View Projects</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// import {
//   Phone,
//   Mail,
//   MapPin,
//   Linkedin,
//   Github,
//   MessageCircle,
// } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="min-h-screen gradient-bg flex items-center justify-center px-6 md:px-8 py-24 text-white">
//       <div className="glass w-full max-w-xl p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-lg">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//           Contact
//         </h2>
//         {/* WhatsApp */}
//         <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
//           <MessageCircle className="text-green-400 w-6 h-6" />

//           <a
//             href="https://wa.me/905379938782"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-green-400 hover:text-green-300 font-medium transition"
//           >
//             WhatsApp
//           </a>
//         </div>
//         <div className="space-y-5">
//           {/* Phone */}
//           <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition">
//             <div className="flex items-center gap-4">
//               <Phone className="text-orange-400 w-6 h-6" />

//               <a
//                 href="tel:+905379938782"
//                 className="text-lg font-medium hover:text-orange-400 transition"
//               >
//                 +90 537 993 8782
//               </a>
//             </div>
//           </div>
//           {/* Location */}
//           <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
//             <MapPin className="text-orange-400 w-6 h-6" />
//             <span className="text-base">Istanbul, Türkiye</span>
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
//             <Mail className="text-orange-400 w-6 h-6" />

//             <a
//               href="mailto:tansouuaz@gmail.com"
//               className="hover:text-orange-400 transition break-all"
//             >
//               tansouuaz@gmail.com
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
//             <Linkedin className="text-orange-400 w-6 h-6" />

//             <a
//               href="https://linkedin.com/in/tansu-aksoy-169160206"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-orange-400 transition"
//             >
//               LinkedIn Profile
//             </a>
//           </div>

//           {/* GitHub */}
//           <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition">
//             <Github className="text-orange-400 w-6 h-6" />

//             <a
//               href="https://github.com/tansouaz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-orange-400 transition"
//             >
//               GitHub Profile
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
