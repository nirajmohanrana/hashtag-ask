"use client";
import { PanelResizeHandle } from "react-resizable-panels";
import { RiDraggable } from "react-icons/ri";

function ResizeHandle({ orientaton }) {
  return (
    <PanelResizeHandle
      className={`cursor-pointer w-1 hover:bg-primary/75 flex justify-center items-center transition-all duration-300 ease-in-out ${
        orientaton ? "h-full" : "w-full"
      }`}
    ></PanelResizeHandle>
  );
}

export default ResizeHandle;
