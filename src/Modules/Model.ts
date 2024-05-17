import {Object3D} from "three";
import {filter} from "lodash";

/**
 * 根据给定的工作集，筛选出节点对象中的特定对象3D。
 * @param nodes 一个包含多个名称与Object3D对象映射的节点对象。
 * @param working 一个字符串集合，表示正在工作的节点名称。
 * @returns 返回一个筛选后的节点对象数组，其中只包含工作集中的节点。
 */
export function setBroadCard(nodes: {
    [name: string]: Object3D
}, working: Set<string>) {
    // 使用filter函数筛选出工作集中存在的节点 --lodash
    return filter(Object.entries(nodes), (node) => {
        return working.has(node[0])
    })
}
/**
 * 对给定的节点对象进行分类，筛选出所有父节点名为'Scene'的节点。
 *
 * @param nodes 一个包含多个Object3D节点的对象，其中键为节点名称，值为对应的Object3D对象。
 * @return 返回一个Set集合，包含所有父节点名为'Scene'的Object3D节点。
 */
export function classifyNodes(
    nodes:{
        [p:string]:Object3D
    }
){
    // 通过filter函数筛选出父节点名为'Scene'的节点，并通过Set去重。
    return  filter(Object.values(nodes),(node)=>{
        // 筛选条件：节点的父节点名称必须为'Scene'
        return node.parent?.name ==='Scene'
    })
}



