import Logo from "../../assets/imgs/heroImage.svg";
import AnimatedText from "./AnimatedText";
import Heading from "./Heading";
import Stats from "./Stats";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col">
        {/* Main Content */}
        <div className="lg:mx-30 my-5 grid min-h-0 flex-grow grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-col justify-center px-5 md:px-5 lg:px-10 xl:px-40">
            <Heading />
            <AnimatedText />
            <div className="mt-10 flex flex-col md:flex-row md:space-x-12">
              <Stats total={"+55"} title={"Certified Professionals"} />
              <Stats total={"+221"} title={"Trusted Clients"} />
            </div>
          </div>
          <div className="hidden lg:flex lg:w-[70%] lg:items-center lg:justify-center">
            <img src={Logo} alt="hero image" className="object-contain" />
          </div>
        </div>
        <div className="mt-40 flex justify-center">
          {/* Content centered horizontally */}
          <div className="w-full max-w-screen-lg">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}
