import { useEffect, useRef, useState } from "react";
import webmAnimation from "../assets/Animations/AnimationScroll.webm";

const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative z-30 min-h-screen">
      {/* Animated Section */}
      <div
        ref={sectionRef}
        className="absolute inset-0 flex flex-col items-center justify-center space-y-5 bg-[#7E35DE] text-white opacity-90"
      >
        <span
          className={`text-stroke-2 text-4xl font-bold text-transparent md:text-6xl lg:text-8xl ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          } delay-[500ms]`}
        >
          SEE
        </span>
        <span
          className={`text-3xl font-extrabold md:text-5xl lg:text-7xl ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          } delay-[1000ms]`}
        >
          HOW WE TURN
        </span>
        <span
          className={`flex flex-col items-center justify-center space-x-2 text-3xl font-light md:inline-block md:text-5xl lg:text-6xl ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          } delay-[1500ms]`}
        >
          <snap>YOUR IDEAS INTO</snap> <span>CUTTING EDGE</span>
        </span>
        <span
          className={`text-3xl font-light md:text-5xl lg:text-6xl ${
            isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
          } delay-[2000ms]`}
        >
          TECHNOLOGY
        </span>
      </div>

      {/* Background Section (Static) */}
      <div className="relative -z-10 flex flex-col items-center justify-center text-center font-bold tracking-wider text-[#7E35DE] lg:mt-20">
        <h1 className="mt-40 text-[4rem] sm:text-[5rem] md:text-[6rem] lg:mt-20 lg:text-[8rem] xl:text-[10rem]">
          We code your
        </h1>
        <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          Future
        </span>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-20 rounded-full bg-white p-3 text-[#7E35DE] shadow-lg transition-colors duration-300 hover:bg-gray-200"
        >
          ↑
        </button>
      )}

      {/* WebM Animation */}

      <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 transform justify-center">
        <video
          src={webmAnimation}
          autoPlay
          loop
          muted
          className="mb-4 h-10 w-10 max-w-md"
        />
      </div>
    </div>
  );
};

export default AnimatedSection;
