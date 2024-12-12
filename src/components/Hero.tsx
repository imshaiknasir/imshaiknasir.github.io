import { Mail, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <header className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="heading-1 mb-6">
            Nasir Ahemad
            <span className="block text-white/60 text-lg font-normal mt-2">
              Full Stack QA Engineer
            </span>
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            With 6+ years of expertise in Web and API Automation, I specialize
            in building robust testing frameworks and leading teams to deliver
            high-quality software solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:imshaiknasir@pm.me"
              className="button button-primary"
              target="_blank"
            >
              <Mail size={18} />
              Contact Me ✉️
              <ArrowRight size={16} className="ml-1" />
            </a>
            <a
              href="https://linkedin.com/in/imshaiknasir"
              className="button button-primary"
              target="_blank"
            >
              LinkedIn 👥
            </a>
            <a
              href="https://raw.githubusercontent.com/imshaiknasir/imshaiknasir.github.io/main/blob/Nasir_6yrs_QA.pdf"
              className="button button-primary"
              target="_blank"
            >
              Hire Me 💼
            </a>
            <a
              href="https://t.me/shell52"
              className="button button-primary"
              target="_blank"
            >
              Telegram 💬
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
