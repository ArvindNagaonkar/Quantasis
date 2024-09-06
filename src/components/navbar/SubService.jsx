import SubElement from "./SubElement";

const subServieces = [
  "Cloud Infrastructure and DevOps",
  "Mobile Application",
  "Artificial Intelligence",
  "Web Application",
];

export default function SubService({ className }) {
  return (
    <div
      className={`${className ? "" : "absolute"} z-50 rounded border-t-2 bg-white px-3 py-2 shadow-lg shadow-indigo-500/50`}
    >
      <div className="flex flex-col justify-start text-sm font-normal">
        {subServieces.map((service, i) => {
          return <SubElement key={i}>{service}</SubElement>;
        })}
      </div>
    </div>
  );
}
