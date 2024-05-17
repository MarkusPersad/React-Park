import {Object3D} from "three";
import {ObjectExtend} from "../../types";

export function Children(props:{
    children:Object3D[]
}){
    const children = props.children as ObjectExtend[];
    const childrenComponent = children.map((child:ObjectExtend)=>{
        return <mesh
            name={child.name}
            castShadow
            receiveShadow
            geometry={child.geometry}
            material={child.material}></mesh>
    })
    return(
        <>
            {childrenComponent}
        </>
    )
}