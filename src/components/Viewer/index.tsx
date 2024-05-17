import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera,  Sky} from "@react-three/drei";
import {Model} from '../Model'
import './Viewer.css'
import {Vector3} from "three";



export function Viewer(){
    return (
        <div className="Viewer">
            <Canvas>
              <SceneContent/>
            </Canvas>
        </div>
    )
}
function SceneContent(){
    return(
        <>
            <ambientLight intensity={1}/>
            <directionalLight intensity={2}/>
            <Sky/>
            <OrbitControls autoRotateSpeed={10} enablePan={true}/>
            <PerspectiveCamera/>
            <Model position={new Vector3(0,-10,0)} path={"city.glb"}/>
        </>
    )
}