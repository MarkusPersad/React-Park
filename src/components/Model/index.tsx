import {ModelProps, ObjectExtend} from "../../types";
import {useGLTF} from "@react-three/drei";
import {classifyNodes} from "../../Modules";
import {Children} from './Children'


export function Model(props:ModelProps){

    const {nodes:model} = useGLTF(props.path);
    const nodes = classifyNodes(model) as ObjectExtend[]
    const Groups = nodes.map((node:ObjectExtend)=>{
        if (node.children.length!==0){
            return(
                <>
                    <group
                        name={node.name}
                        position={node.position}
                        rotation={node.rotation}
                        scale={node.scale}>
                        <Children children={node.children}/>
                    </group>
                </>
            )
        }else if(node.type==="Mesh") {
            return <mesh
                name={node.name}
                castShadow
                receiveShadow
                position={node.position}
                rotation={node.rotation}
                geometry={node.geometry}
                material={node.material}
                scale={node.scale}></mesh>
        }
    })
    return(
        <>
            <group dispose={null} position={props.position}>
            {Groups}
            </group>
        </>
    )
}