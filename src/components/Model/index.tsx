import {ModelProps, ObjectExtend} from "../../types";
import {useGLTF, BBAnchor, Html} from "@react-three/drei";
import { classifyNodes} from "../../Modules";
import {Children} from './Children'
import {useEffect, useState} from "react";
import {useThree} from "@react-three/fiber";
import {Page} from '../Charts'


export function Model(props:ModelProps){
    const {camera} = useThree();
    const {nodes:model} = useGLTF(props.path);
    useEffect(()=>{
        camera.position.set(0,10,10);
        camera.lookAt(model['Scene'].position);
    },[camera,model])
    const [selected,setSelected] = useState('')
    const nodes = classifyNodes(model) as ObjectExtend[]
    const Groups = nodes.map((node:ObjectExtend)=>{
        if (node.children.length!==0){
            return(
                <>
                    <group
                        name={node.name}
                        position={node.position}
                        rotation={node.rotation}
                        scale={node.scale}
                        onClick={(e)=>{
                            if (selected ==='')
                            setSelected(node.name)
                            else setSelected('')
                            console.log(e)
                        }}>
                        {selected ===node.name &&<BBAnchor  anchor={[0,1,0]}>
                            <Html center>
                                <Page/>
                            </Html>
                        </BBAnchor>}
                        <Children children={node.children}/>
                    </group>
                </>
            )
        }else if(node.type==="Mesh") {
            return <mesh
                name={node.name}
                castShadow={true}
                receiveShadow={true}
                position={node.position}
                rotation={node.rotation}
                geometry={node.geometry}
                material={node.material}
                scale={node.scale}
                onClick={(e)=>{
                    if (selected ==='')
                    setSelected(node.name)
                    else setSelected('')
                    console.log(e)
                    }
                }>
                {selected ===node.name &&<BBAnchor anchor={[0,1,0]}>
                    <Html center>
                        <Page/>
                    </Html>
                </BBAnchor>}
            </mesh>
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