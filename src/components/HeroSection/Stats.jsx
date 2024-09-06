export default function Stats({ total, title }) {
  return (
    <div className="text-center">
      <span className="bg-custom-gradient bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl lg:text-5xl">
        {total}
      </span>
      <p className="mt-3 text-lg font-bold md:mt-4 md:text-xl lg:mt-5">
        {title}
      </p>
    </div>
  );
}
