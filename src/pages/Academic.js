import React from "react";

// Edita SOLO este arreglo para actualizar tus proyectos academicos.
const projects = [
  {
    title: "Skin Cancer Classification (ISIC 2024)",
    description:
      "Fine-tuned and compared ResNet-50, EfficientNetV2-S, and ViT-B/16 for binary skin-lesion classification on ~217,000 dermoscopy images, reaching a test AUC-ROC of 0.879 under an extreme 739:1 class imbalance. Validated decisions with Grad-CAM.",
    tags: ["PyTorch", "ViT", "EfficientNet", "Grad-CAM"],
    accent: "bg-blue-600",
    link: "https://github.com/gerardomaciasromo",
    iconPath: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z",
  },
  {
    title: "Real-Time Fatigue Detection",
    description:
      "Built a real-time driver/operator fatigue-detection system using neural networks and computer vision, tracking facial landmarks to flag drowsiness from a live video stream.",
    tags: ["Computer Vision", "OpenCV", "Neural Networks"],
    accent: "bg-emerald-600",
    link: "https://github.com/gerardomaciasromo",
    iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Leather-Defect Detection",
    description:
      "Implemented a defect-detection pipeline for leather materials using XGBoost and SVM with histogram-based feature extraction, classifying surface flaws from image patches.",
    tags: ["XGBoost", "SVM", "Feature Engineering"],
    accent: "bg-amber-600",
    link: "https://github.com/gerardomaciasromo",
    iconPath: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z M16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Handwritten-Digit Classifier",
    description:
      "Developed a handwritten-digit classifier using supervised learning, improving accuracy through targeted feature engineering and image preprocessing.",
    tags: ["scikit-learn", "Supervised Learning"],
    accent: "bg-rose-600",
    link: "https://github.com/gerardomaciasromo",
    iconPath: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  },
];

export default function Academic() {
  return (
    <section className="py-10 bg-gray-50 dark:bg-slate-800 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
            Academic Projects
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Applied machine learning, from research to deployment
          </h2>
        </div>

        <div className="flex flex-wrap justify-center mt-12 sm:mt-16 -m-4">
          {projects.map((project, index) => (
            <div className="p-4 w-full sm:max-w-sm" key={index}>
              <div className="flex flex-col h-full p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl dark:bg-slate-900 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-10 h-10 mr-3 inline-flex items-center justify-center rounded-xl text-white flex-shrink-0 ${project.accent}`}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d={project.iconPath}></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-black dark:text-white">
                    {project.title}
                  </h2>
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <p className="text-base leading-relaxed text-gray-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-slate-800 dark:text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-5 font-medium text-blue-600 dark:text-sky-300 hover:text-blue-800 group"
                  >
                    View on GitHub
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}