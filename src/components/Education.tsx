import { GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

export function Education() {
  const education = [
    {
      institution: "C.V. Raman Comp. Academy",
      location: "Bhubaneswar",
      degree: "MCA",
      duration: "JUNE 2016-JUNE 2018"
    },
    {
      institution: "BJB Autonomous College",
      location: "Bhubaneswar",
      degree: "B.Sc.",
      duration: "MAY 2015-MAY 2016"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="heading-2 text-center text-white">Education</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                      <p className="text-white/60">{edu.location}</p>
                    </div>
                    <span className="text-white/60 font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-white/80 mt-2">{edu.degree}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}