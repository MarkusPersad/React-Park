import {BufferGeometry, Material, Object3D,Object3DEventMap} from 'three'

export interface ObjectExtend extends Object3D<Object3DEventMap>{
    geometry?:BufferGeometry
    material?:Material
}