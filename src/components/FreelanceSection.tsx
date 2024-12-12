import { Briefcase, Clock, Globe } from "lucide-react";

export function FreelanceSection() {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "QA Automation Solutions",
      description:
        "End-to-end test automation frameworks tailored to your needs",
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Consulting Services",
      description: "Expert guidance on QA strategy and best practices",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Training & Mentorship",
      description: "Upskill your team with modern testing practices",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Freelance Services</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Available for freelance projects and consulting. Let's collaborate
            to enhance your testing infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="mailto:imshaiknasir@pm.me" className="button button-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
