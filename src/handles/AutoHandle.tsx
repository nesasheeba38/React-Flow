import { Handle, Position } from "reactflow"

export const AutoHandle = ({ data }: any) => {
    return (
        <div style={{ fontSize: 12, fontWeight: "lighter", background: '#ffff00ff', width: 149, height: 23, border: '1px solid black', borderRadius: 3, textAlign: 'center', paddingTop: 10, cursor: "grab" }}>
            <strong>{data.label}</strong>
            {data.handles.map((handle: any, index: number) => (
                <Handle
                    key={index}
                    type={handle.handleType}
                    position={handle.handlePosition as Position}
                    id={handle.handlePosition + '-' + handle.handleType}
                />
            ))}
        </div>
    )
}