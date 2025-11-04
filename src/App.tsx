import React from "react";
import ReactFlow, { Background, Controls, MiniMap} from "reactflow";
import "reactflow/dist/style.css";
import{ Nodes }from './WorkFlow/Node';
import{ Edges }from'./WorkFlow/Edges';
import { nodeTypes } from "./WorkFlow/NodeType";
import{ nodeTypes as existingNodeTypes}from "./WorkFlow/NodeType"

function CustomNode({data}:any){
  return(
    <div style={{padding:10,border:"2px solid #999999",borderRadius:10,background:"white",textAlign:"center",width:268}}
    >
      <p>{data.label}</p>
      <button 
      style={{border:"2px solid #ffff",width:223,height:33,backgroundColor:"#cfceceff"}}>Beginner Project Ideas</button>
    </div>
  )
}
export default function App() {

  const nodeTypes={ ...existingNodeTypes,custom:CustomNode};
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
