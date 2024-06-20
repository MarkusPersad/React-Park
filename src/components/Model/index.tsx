import {ModelProps, ObjectExtend} from "../../types";
import {useGLTF, Html} from "@react-three/drei";
import { classifyNodes} from "../../Modules";
import {Children} from './Children'
import {useEffect, useState} from "react";
import {useThree} from "@react-three/fiber";
import {Line} from '../Charts'
import {findIndex} from "lodash";
import {Vector3} from "three";


export function Model(props:ModelProps){
    const {camera} = useThree();
    const {nodes:model} = useGLTF(props.path);
    useEffect(()=>{
        camera.position.set(0,10,10);
        camera.lookAt(model['Scene'].position);
    },[camera,model])
    const [selected,setSelected] = useState('')
    const nodes = classifyNodes(model) as ObjectExtend[]
    const setPosition = (s:string)=>{
        let position :Vector3
        const  index =findIndex(nodes,(node:ObjectExtend)=>{
            return node.name === s
        })
        if (index !== -1){
            position = nodes[index].position
        }
        else position = new Vector3(0,0,0)
        return new Vector3(position.x,position.y+5,position.z)
    }
    const [hPostion,setHPosition] = useState(new Vector3())
    useEffect(()=>{
        setHPosition(setPosition(selected))
    },[selected, setPosition])
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
                            e.stopPropagation()
                            setSelected(node.name)
                            console.log(e)
                        }}>
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
                    setSelected(node.name)
                    e.stopPropagation()
                    console.log(e.eventObject)
                    }
                }>
            </mesh>
        }
    })
    return(
        <>
            <group dispose={null} position={props.position}>
                {Groups}
                <Html position={hPostion}>
                    <div style={{height:'100px',width:'100px'}}>
                        <Line/>
                    </div>
                </Html>
            </group>
        </>
    )
}