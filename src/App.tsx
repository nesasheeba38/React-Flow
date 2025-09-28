import React from "react";
import ReactFlow, { Background, Controls, MiniMap} from "reactflow";
import "reactflow/dist/style.css";
import{ Nodes }from './WorkFlow/Node';
import{ Edges }from'./WorkFlow/Edges';
import { NodeTypes} from "./WorkFlow/NodeType";

function CustomNode({data}:any){
  return(
    <div
    style={{
      fontSize:15,
      padding:10,
      margin:20,
      width:268,
      border:"2px solid #f0e9e9ff",
      backgroundColor:"#ffffffff",
      borderRadius:10,
    }}>
   <p>{data.label}</p>
   <button
   style={{
    padding:"8px 10px",
    backgroundColor:"#f0eeeeff",
    borderRadius:6,
    width:260,
    border:"2px solid white",
    fontStyle:"serif"
   }}>Beginner Project Ideas</button>   
    </div>
  )
}

export default function App() {
  const nodeType={custom:CustomNode};
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow nodes={Nodes} edges={Edges} NodeTypes={NodeTypes} fitView>
       <Background/>
        <MiniMap/>
        <Controls/> 
      </ReactFlow>
    </div>
  );
}
