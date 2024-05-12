import {Object3D, Object3DEventMap} from "three";

export interface Nodes{
    [p:string]:Object3D<Object3DEventMap>
}