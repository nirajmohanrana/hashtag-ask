function HoverWindow({ children, customClass }) {
  return (
    <div
      className={`bg-background hover:scale-125 hover:-translate-y-6 transition-all hover:z-50 duration-700 ease-in-out-back hover:rotate-0 border rounded-md w-fit ${customClass} cursor-[url(https://cdn.custom-cursor.com/db/6639/32/material-silver-pointer-a.png),_pointer]`}
    >
      <div className="border-b flex justify-end items-center py-1">
        <div className="bg-green-500 h-2 aspect-square rounded-full" />
        <div className="bg-yellow-500 h-2 aspect-square rounded-full mx-1" />
        <div className="bg-red-500 h-2 aspect-square rounded-full mr-1" />
      </div>
      <div className="px-2 text-lg font-light py-1">{children}</div>
    </div>
  );
}

export default HoverWindow;
