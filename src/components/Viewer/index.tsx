import {Canvas} from "@react-three/fiber";
import {OrbitControls,  Sky,Stats} from "@react-three/drei";
import {Model} from '../Model'
import './Viewer.css'





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
            <Stats/>
            <ambientLight intensity={1}/>
            <directionalLight intensity={2}/>
            <Sky/>
            <OrbitControls autoRotateSpeed={10}  enablePan={true}/>
            {/*<PerspectiveCamera/>*/}
            <Model  path={"city.glb"}/>
        </>
    )
}