"use client";
import { LuHome, LuHash, LuUser2 } from "react-icons/lu";
import Link from "next/link";
import { Panel, PanelGroup } from "react-resizable-panels";
import ResizeHandle from "./ResizeHandle";
import { useLayoutEffect, useState } from "react";

const AppBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  const handleCollapse = () => {
    setIsCollapsed(true);
  };

  useLayoutEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 450);
    };

    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <div className="h-screen">
      <PanelGroup direction={"horizontal"}>
        <Panel id="sidebar" order={1}>
          <div className="w-full h-full bg-red-400" />
        </Panel>

        <ResizeHandle orientaton={true} />

        <Panel id="mainview" order={2}>
          <div className="w-full h-full bg-red-400" />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default AppBar;
