import { Code2, Server, Database, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6 text-gray-800" />,
      title: "UI & API Automation",
      skills: ["Playwright", "Selenium", "Cypress", "Postman"],
    },
    {
      icon: <Server className="w-6 h-6 text-gray-800" />,
      title: "Programming/Scripting",
      skills: ["JavaScript", "TypeScript", "Java", "Bash", "Python"],
    },
    {
      icon: <Database className="w-6 h-6 text-gray-800" />,
      title: "Tools & Technologies",
      skills: ["Jenkins", "Docker", "Git", "AWS"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-8 h-8 text-gray-800" />
          </motion.div>
          <h2 className="heading-2 text-gray-800">Technical Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-gradient-to-br from-white to-gray-50 shadow-md group">
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <ChevronRight size={16} className="text-gray-600" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
