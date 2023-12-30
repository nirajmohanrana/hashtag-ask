"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import "./createFormExample.css";

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "Section 1\n•Name\n•Email\n•Department" },
    position: { x: 100, y: 50 },
  },
];

let id = 1;
const getId = () => `${id++}`;

const CreateForm = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const [isMobile, setIsMobile] = useState(false);

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

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: {
            label: `${
              id === "1"
                ? "Section 2\n•Ask Title\n•Ask Description\n•To-Department"
                : id === "2"
                ? "Section 3\n•Deadline\n•Priority"
                : `Section ${id}\n•Question-1\n•Question-2\n•Question-3`
            }`,
          },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id,
            source: connectingNodeId.current,
            target: id,
            label: `from Section ${Number(connectingNodeId.current) + 1}`,
            labelBgStyle: { fill: "#fff" },
            labelStyle: {
              fill: "#e23237",
              fontSize: "10px",
              fontWeight: "bold",
              textAlign: "center",
            },
            animated: true,
          })
        );
      }
    },
    [screenToFlowPosition, setEdges, setNodes]
  );

  return (
    <div className="h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeOrigin={[0.5, 0]}
      >
        {typeof window !== "undefined" && window.innerWidth < 450 ? (
          <p className="text-sm text-accent font-bold">
            Please switch to Desktop
          </p>
        ) : (
          <>
            <p className="text-sm">
              Try to drag edges from{" "}
              <strong className="text-primary">Blue pill</strong>
            </p>
            <Controls />
          </>
        )}
        <Background />
      </ReactFlow>
    </div>
  );
};

const CreateFormExample = () => (
  <ReactFlowProvider className="h-full">
    <CreateForm />
  </ReactFlowProvider>
);

export default CreateFormExample;
