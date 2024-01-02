function HoverWindow({ children, customClass, hover = true }) {
  return (
    <div
      className={`bg-background text-text/70 font-light tracking-tighter  transition-all duration-700 ease-in-out-back border rounded-md w-fit ${customClass} cursor-[url(./favicon.ico),_pointer]
      ${
        hover &&
        "hover:text-text hover:font-semibold hover:tracking-widest hover:scale-125 hover:-translate-y-6 hover:z-50 hover:rotate-0 hover:border-2"
      }`}
    >
      <div className="border-b flex justify-end items-center py-1">
        <div className="bg-green-500 h-2 aspect-square rounded-full" />
        <div className="bg-yellow-500 h-2 aspect-square rounded-full mx-1" />
        <div className="bg-red-500 h-2 aspect-square rounded-full mr-1" />
      </div>
      <div className="px-2 text-lg py-1">{children}</div>
    </div>
  );
}

export default HoverWindow;
