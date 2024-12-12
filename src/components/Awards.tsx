import { Award, Star } from 'lucide-react';
import { motion } from "framer-motion";

export function Awards() {
  const awards = [
    {
      icon: <Award className="w-8 h-8 text-gray-800" />,
      title: "Award for Leadership Excellence",
      description: "Recognized for outstanding performance in leading and managing QA teams."
    },
    {
      icon: <Star className="w-8 h-8 text-gray-800" />,
      title: "AI Implementation",
      description: "Honored for leveraging AI to enhance QA processes and efficiency."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-8 h-8 text-gray-800" />
          </motion.div>
          <h2 className="heading-2 text-center text-gray-800">Awards & Recognition</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div key={index} className="card bg-gradient-to-br from-white to-gray-50 shadow-md">
              <div className="mb-6">{award.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{award.title}</h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}