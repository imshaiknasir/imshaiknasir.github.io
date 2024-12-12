import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "Source.One",
      location: "Pune",
      position: "Lead/Sr. QA Automation Engineer",
      duration: "Sept. 2021 - Present",
      achievements: [
        "Developed robust UI automation framework using Playwright with TypeScript",
        "Implemented API test scenarios with Playwright and Postman",
        "Led CI/CD integration with Jenkins for automated testing",
        "Migrated test environments from AWS EC2 to in-house infrastructure",
        "Led a team of 6 QA professionals, mentoring on advanced methodologies"
      ]
    },
    {
      company: "Jiva-Infotech",
      location: "Hyderabad",
      position: "Automation Test Engineer",
      duration: "Aug. 2018 - Aug. 2021",
      achievements: [
        "Hands-on experience with Selenium, Cypress, and Protractor",
        "Transitioned from manual testing to developing automation frameworks",
        "Played key role in concurrent projects delivery"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="heading-2 text-center text-white">Professional Experience</h2>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-white/60">{exp.location}</p>
                </div>
                <span className="text-white/60 font-medium">{exp.duration}</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-6">{exp.position}</h4>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-3">
                    <ChevronRight size={16} className="text-white/60 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{achievement}</span>
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