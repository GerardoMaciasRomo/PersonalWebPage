import React from "react";

// Edita SOLO este arreglo para actualizar tu experiencia.
const experiences = [
  {
    role: "Software Developer Intern",
    company: "Cooper Standard",
    period: "Sep 2025 – Mar 2026",
    description:
      "Designed and deployed a warehouse management system (Ignition, Jython, SQL Server, Java) with automated stock-validation workflows, cutting manual validation time by ~70% and supporting 10–12 plant operators.",
    iconColor: "text-green-500",
    iconPath:
      "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    role: "IT Specialist",
    company: "Macifra",
    period: "Aug 2020 – Aug 2025",
    description:
      "Built a custom CRM, POS, and ERP system (Python, MySQL) for 20+ employees, administering Windows Server 2019, 1,500 SKUs, and 500+ clients while processing ~300 daily transactions (~$50K/day).",
    iconColor: "text-blue-600",
    iconPath:
      "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

function Profesional() {
  return (
    <section className="min-h-screen py-10 bg-gray-50 dark:bg-slate-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
            Professional Experience
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Building production systems across software, AI, and automation
          </h2>
        </div>

        <div className="grid max-w-3xl grid-cols-1 mx-auto mt-12 gap-y-12 sm:mt-20 md:grid-cols-2 md:gap-x-12">
          {experiences.map((exp, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <svg
                className={`flex-shrink-0 ${exp.iconColor} w-12 h-12`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={exp.iconPath}
                />
              </svg>
              <h3 className="mt-5 text-xl font-semibold text-black dark:text-slate-50">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-600 dark:text-sky-300">
                {exp.company} · {exp.period}
              </p>
              <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profesional;