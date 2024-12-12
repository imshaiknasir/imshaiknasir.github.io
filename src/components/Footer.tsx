import { Github, Linkedin, MessagesSquareIcon } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/imshaiknasir",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/imshaiknasir",
      label: "LinkedIn",
    },
    {
      icon: <MessagesSquareIcon className="w-5 h-5" />,
      href: "https://t.me/shell52",
      label: "Telegram",
    },
  ];

  return (
    <footer className="bg-mono-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-mono-400 hover:text-white transition-colors"
                aria-label={link.label}
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-mono-400 text-sm">
            © {new Date().getFullYear()} Nasir Ahemad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
