import React from "react";
import { Handle, Position } from "reactflow";

const CustomNodeComponent = ({ data }) => {
  return (
    <div className="custom-node">
      <h3>Custom</h3>
      <Handle position={Position.Top} id="handle-top" />
      <Handle position={Position.Bottom} id="handle-bottom" />
    </div>
  );
};

export default CustomNodeComponent;
