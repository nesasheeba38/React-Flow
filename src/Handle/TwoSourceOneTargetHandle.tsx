import { Handle, Position } from "reactflow"

export const TwoSourceOneTargetHandle = ({data}:any) => {
    return (
        <div style={{ fontSize: 12, fontWeight: "lighter" ,background: '#ffff00ff', width: 149, height: 23, border: '1px solid black', borderRadius: 3, textAlign: 'center', paddingTop: 10, cursor: "grab" }}>
        <strong>{data.label}</strong>
        <Handle
            type="source"
            id="bottom-source"
            position={Position.Bottom}/>
        <Handle
            type="target"
            id="top-target"
            position={Position.Top}/>
        <Handle
            type="source"
            id="right-source"
            position={Position.Right}/>
         <Handle
            type="source"
            id="top-source"
            position={Position.Top}/>
        <Handle
            type="target"
            id="right-target"
            position={Position.Right} />
        <Handle
           type="source"
           id="left-source"
           position={Position.Left}/>
        </div>
    )
} 