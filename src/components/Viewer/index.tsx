import {Canvas} from "@react-three/fiber";
import {OrbitControls, Sky,PerspectiveCamera} from "@react-three/drei";
import {Model} from '../Model'
import './Viewer.css'

export function Viewer(){
    return (
        <div className="Viewer">
            <Canvas>
                <PerspectiveCamera/>
                <ambientLight intensity={1}/>
                <directionalLight intensity={2}/>
                <Sky />
                <OrbitControls/>
                <Model path={"city.glb"}/>
            </Canvas>
        </div>
    )
}