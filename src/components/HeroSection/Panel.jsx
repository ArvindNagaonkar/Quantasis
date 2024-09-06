import { useState, useEffect, useRef } from "react";

const PanelData = {
  DIGITAL: {
    features: [
      "Application development (mobile)",
      "Application development (web)",
      "Consultation",
      "UX/UI design",
    ],
    describe: "Quantasis's end to end digital offerings",
  },
  CLOUD: {
    features: [
      "Infrastructure Setup",
      "Cloud Strategy",
      "Cloud Security",
      "Devops Operation",
      "Migration",
      "Cost Optimization",
    ],
    describe: "Unlock the power of Cloud, Devops, CI/CD",
  },
  "AI/ML": {
    features: [
      "Generative AI",
      "ML Model Development",
      "AI based automation",
      "AI chatbot and Virtual Assistance",
      "AI based product development",
      "Data Science and Analytics",
    ],
    describe: "Igniting the next wave of AI-driven Innovation",
  },
};

function Panel({ title, isActive, onClick, bgColor }) {
  return (
    <div
      className={`relative w-full cursor-pointer ${bgColor} transition-all duration-300 ${
        isActive ? "lg:h-[calc(100vh-50px)]" : "h-20"
      } flex flex-col justify-center lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:top-auto ${
        isActive ? "lg:translate-y-0" : "lg:translate-y-full"
      }`}
      onClick={onClick}
    >
      <p
        className={`${isActive ? "hidden" : ""} text-center text-2xl font-bold text-[#B585F2] md:text-3xl lg:text-4xl`}
      >
        {title}
      </p>
      {isActive && (
        <div className="flex flex-col items-center p-4 text-white sm:p-6 md:p-8 lg:p-6 lg:pb-8 lg:pt-16 lg:text-lg">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-center text-sm sm:text-base md:text-lg lg:text-base">
            {PanelData[title].describe}
          </p>
          <ul className="mt-2 list-disc space-y-1 text-center text-sm sm:text-base md:text-base lg:text-base">
            {PanelData[title].features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="mt-4 rounded-md bg-white px-4 py-2 text-sm text-[#B585F2] sm:text-base md:text-lg lg:text-base">
            Know more
          </button>
        </div>
      )}
    </div>
  );
}

export default function PanelContainer() {
  const [activePanel, setActivePanel] = useState(null);
  const panelRef = useRef(null);

  const handlePanelClick = (index) => {
    setActivePanel(index === activePanel ? null : index); // Toggle the active panel
  };

  const handleClickOutside = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      setActivePanel(null); // Close the panel if clicked outside
    }
  };

  useEffect(() => {
    if (activePanel !== null) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [activePanel]);

  return (
    <div
      ref={panelRef}
      className={`relative z-10 -mt-20 flex flex-col md:flex-row lg:relative ${activePanel ? "backdrop-blur-md" : ""}`}
    >
      <div className="relative w-full md:w-1/3 lg:w-1/3">
        <Panel
          title="DIGITAL"
          isActive={activePanel === 0}
          onClick={() => handlePanelClick(0)}
          bgColor="bg-[#A265EE]"
        />
      </div>
      <div className="relative w-full md:w-1/3 lg:w-1/3">
        <Panel
          title="CLOUD"
          isActive={activePanel === 1}
          onClick={() => handlePanelClick(1)}
          bgColor="bg-[#7E35DE]"
        />
      </div>
      <div className="relative w-full md:w-1/3 lg:w-1/3">
        <Panel
          title="AI/ML"
          isActive={activePanel === 2}
          onClick={() => handlePanelClick(2)}
          bgColor="bg-[#670ED8]"
        />
      </div>
    </div>
  );
}
