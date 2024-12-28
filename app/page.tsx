"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 p-4 md:p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 flex-col md:flex-row gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nasir Ahemad
            </h1>
            <p className="text-sm md:text-base max-w-2xl">
              Full Stack QA Engineer with 6+ years of expertise in Web and API
              Automation, Framework development, coupled with leadership &
              mentorship, and a drive for delivering scalable, high-quality
              software solutions.
            </p>
          </div>
          <Link
            href="mailto:imshaiknasir@pm.me"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            imshaiknasir@pm.me
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                EXPERIENCE
              </h2>

              {/* Source.One */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2 flex-wrap">
                  <h3 className="text-green-400 font-semibold">
                    <i>Source.One, Pune — Lead/Sr. QA Automation Engineer</i>
                  </h3>
                  <span className="text-sm">SEPT. 2021 - PRESENT</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    Playwright Automation: Developed a robust UI automation
                    framework in TypeScript from scratch using Playwright with
                    POM and data-driven architecture.
                  </li>
                  <li>
                    API Automation: Implemented API test scenarios in
                    Playwright, transitioning from Postman to enhance coverage
                    and efficiency.
                  </li>
                  <li>
                    CI/CD Integration: Built and deployed a complete
                    Jenkins-based CI/CD pipeline, automating testing with
                    microservices integration.
                  </li>
                  <li>
                    Cloud to On-prem Migration: Migrated test environments from
                    AWS EC2 to in-house Ubuntu-based bare-metal servers for
                    optimized infrastructure.
                  </li>
                  <li>
                    Database Expertise: Hands-on experience with MongoDB,
                    proficient in bash scripting and Python for test automation
                    and workflow automation.
                  </li>
                  <li>
                    Team Leadership: Leading a team of 6 QA professionals (SDETs
                    and manual testers), mentoring on advanced automation and
                    testing methodologies.
                  </li>
                </ul>
              </div>

              {/* Jiva-Infotech */}
              <div>
                <div className="flex justify-between items-start mb-2 flex-wrap">
                  <h3 className="text-green-400 font-semibold">
                    <i>Jiva-Infotech, Hyderabad — Automation Test Engineer</i>
                  </h3>
                  <span className="text-sm">AUG. 2018 - AUG. 2021 : 3yrs</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    Automation Testing Tools: Hands-on experience with Selenium,
                    Cypress, and Protractor, contributing to automation
                    frameworks and creating new test scripts across diverse
                    projects.
                  </li>
                  <li>
                    Career Growth: Transitioned from a fresher executing test
                    scenarios to an Associate Automation Engineer performing
                    Manual testing within a short span.
                  </li>
                  <li>
                    Collaborative Teamwork: Played an integral role in
                    supporting concurrent projects, ensuring quality delivery
                    within deadlines
                  </li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                EDUCATION
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-green-400 font-semibold">
                    <i>C.V. Raman Comp. Academy, Bhubaneswar — MCA</i>
                  </h3>
                  <p className="text-sm">FULL-TIME — JUNE 2016–JUNE 2018</p>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold">
                    <i>BJB Autonomous College., Bhubaneswar — B.Sc.</i>
                  </h3>
                  <p className="text-sm">FULL-TIME — MAY 2013–MAY 2016</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Skills, Tools, Awards */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                SKILLS
              </h2>
              <p className="text-sm">
                Playwright (w. Typescript), Cypress(w. JavaScript), Selenium (w.
                Java), Postman API Automation, UI and API Framework Development,
                Jenkins, AI/ML Testing, Agile Methodologies, Jira, Leadership &
                Mentorship, Problem-Solving
              </p>
            </section>

            {/* Tools Section */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                TOOLS w. EXP.
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-green-400 font-bold">
                    UI & API Automation:
                  </span>{" "}
                  <span className="text-xs">
                    Playwright, Selenium, Cypress, Postman.
                  </span>
                </p>
                <p>
                  <span className="text-green-400 font-bold">
                    Programming Language:
                  </span>{" "}
                  <span className="text-xs">
                    JavaScript, Typescript, Java, Bash, Python.
                  </span>
                </p>
                <p>
                  <span className="text-green-400 font-bold">Cloud:</span>{" "}
                  <span className="text-xs">AWS</span>
                </p>
                <p>
                  <span className="text-green-400 font-bold">CI/CD:</span>{" "}
                  <span className="text-xs">Jenkins, Docker</span>
                </p>
                <p>
                  <span className="text-green-400 font-bold">SCM:</span>{" "}
                  <span className="text-xs">Git</span>
                </p>
              </div>
            </section>

            {/* Awards Section */}
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                AWARDS
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-green-400 font-semibold">
                    Award for Leadership Excellence
                  </h3>
                  <p>
                    Recognized for outstanding performance in leading and
                    managing QA teams.
                  </p>
                </div>
                <div>
                  <h3 className="text-green-400 font-semibold">
                    AI Implementation
                  </h3>
                  <p>
                    Honored for leveraging AI to enhance QA processes and
                    efficiency.
                  </p>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="space-y-2 border border-green-500 p-4 m-1">
              <Link
                href="https://linkedin.com/in/imshaiknasir"
                target="_blank"
                className="block text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <i>
                  <u>LinkedIn</u>
                </i>
              </Link>
              <Link
                href="https://raw.githubusercontent.com/imshaiknasir/imshaiknasir.github.io/main/blob/Nasir_6yrs_QA.pdf"
                target="_blank"
                className="block text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <i>
                  <u>Download Resume</u>
                </i>
              </Link>
              <Link
                href="https://t.me/shell52"
                target="_blank"
                className="block text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <i>
                  <u>Telegram</u>
                </i>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
