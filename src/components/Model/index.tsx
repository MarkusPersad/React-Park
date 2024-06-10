import {ModelProps, ObjectExtend} from "../../types";
import {useGLTF} from "@react-three/drei";
import { classifyNodes} from "../../Modules";
import {Children} from './Children'
import {useEffect} from "react";
import {useThree} from "@react-three/fiber";

export function Model(props:ModelProps){
    //使用当前scene和camera
    const {camera} = useThree();
    //选择某一Object，并进行记录
    // const [selectedObject,setSelectedObject] = useState<string>('');
    // //
    // const boxHelper = useMemo(() => new BoxHelperExtend(scene, 0xff0000), [scene]);
    const {nodes:model} = useGLTF(props.path);
    useEffect(()=>{
        camera.position.set(0,10,10);
        camera.lookAt(model['Scene'].position);
    },[camera,model])
    // useEffect(()=>{
    //     boxHelper.attach(model[selectedObject]);
    // },[ selectedObject,boxHelper,model])

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
                            onPointerOver={(e)=>{
                                console.log(e);
                                // setSelectedObject(node.name);
                                // boxHelper.setVisible(true)
                            }}
                                onPointerOut={(e)=>{
                                console.log(e);
                                // boxHelper.setVisible(false);
                                // boxHelper.dispose();
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