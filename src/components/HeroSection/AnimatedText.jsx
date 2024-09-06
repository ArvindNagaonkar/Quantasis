export default function AnimatedText() {
  return (
    <div className="animate-upDown mt-4 text-xl font-semibold text-[#7E35DE] md:mt-6 md:text-2xl lg:mt-8 lg:text-3xl xl:mt-10">
      <span>Application Development</span>{" "}
      <div className="inline-block h-0.5 w-8 bg-black md:w-12"></div>
      <span>Cloud Services Artificial</span>{" "}
      <div className="inline-block h-0.5 w-8 bg-black md:w-12"></div>
      <span>Intelligence</span>
    </div>
  );
}
