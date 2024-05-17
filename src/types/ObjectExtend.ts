import {BufferGeometry, Material, Object3D,} from 'three'



export interface ObjectExtend extends Object3D{
    geometry?:BufferGeometry
    material?:Material
}