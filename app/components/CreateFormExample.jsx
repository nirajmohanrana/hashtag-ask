"use client";
import React, { useCallback, useRef } from "react";
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

import "./formExample.css";

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: { label: "Section 1\nQuestion 1\nQuestion 2\nQuestion 3" },
    position: { x: 100, y: 50 },
  },
];

let id = 2;
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
          data: { label: `Section ${id}\nQuestion 1\nQuestion 2\nQuestion 3` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
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
        <p className="text-sm">
          Try to drag edges from{" "}
          <strong className="text-primary">Blue pill</strong>
        </p>
        <Background />
        <Controls />
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
