
export function Lights(){
    return (
        <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        </>
    )
}