import React from "react";
import ReactFlow, { Background, Controls, MiniMap} from "reactflow";
import "reactflow/dist/style.css";
import { Nodes }from './WorkFlow/Node';
import { Edges }from'./WorkFlow/Edges';
import { nodeTypes } from "./WorkFlow/NoteType";


export default function App() {
  

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={Nodes} edges={Edges} nodeTypes={nodeTypes} fitView>
       <Background/>
        <MiniMap/>
        <Controls/> 
      </ReactFlow>
    </div>
  );
}
