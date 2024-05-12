import {Vector3} from "three";

export interface ModelProps{
    path:string,
    scale?:Vector3,
    position?:Vector3,
    rotation?:[number,number,number]
}