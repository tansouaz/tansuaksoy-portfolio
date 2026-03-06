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
    <section className="min-h-screen gradient-bg text-white flex items-center justify-center px-8 pt-32">
      <div className="glass p-12 rounded-3xl max-w-xl w-full shadow-2xl">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>

        <div className="space-y-8">
          {/* Phone + WhatsApp */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-400" />

              <a
                href="tel:+905379938782"
                className="text-lg hover:text-orange-400 transition"
              >
                +90 537 993 8782
              </a>
            </div>

            <a
              href="https://wa.me/905379938782"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-xl hover:bg-green-600 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <MapPin className="text-orange-400" />

            <span>Istanbul, Türkiye</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <Mail className="text-orange-400" />

            <a
              href="mailto:tansouuaz@gmail.com"
              className="hover:text-orange-400 transition"
            >
              tansouuaz@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <Linkedin className="text-orange-400" />

            <a
              href="https://linkedin.com/in/tansu-aksoy-169160206"
              target="_blank"
              className="hover:text-orange-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <Github className="text-orange-400" />

            <a
              href="https://github.com/tansouaz"
              target="_blank"
              className="hover:text-orange-400 transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
