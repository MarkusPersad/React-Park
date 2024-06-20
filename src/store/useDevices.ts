/**
 * 使用Zustand状态管理库创建一个状态模块，用于管理设备列表。
 *
 * 此模块提供了以下功能：
 * - 初始化设备列表为空数组。
 * - 添加设备到列表中。
 * - 设置设备列表为给定的数组。
 *
 * @param {Function} set Zustand提供的设置状态的函数。
 * @returns {Object} 返回一个对象，包含管理设备列表的方法。
 */
import {create} from "zustand";
import {DeviceType} from "../types";

export const useDevices = create<{
    devices:DeviceType[],
    addDevice:(device:DeviceType)=>void,
    setDevices:(devices:DeviceType[])=>void
}>((set)=>({
    devices:[], // 初始化设备列表为空数组
    /**
     * 向设备列表中添加新设备。
     *
     * @param {Object} device 要添加的设备对象。
     */
    addDevice:(device:DeviceType)=>set((state)=>({devices:[...state.devices,device]})), // 使用展开操作符将新设备添加到设备列表中
    /**
     * 设置设备列表为指定的设备数组。
     *
     * @param {Array} devices 新的设备数组。
     */
    setDevices:(devices: DeviceType[])=>set(()=>({devices:devices})) // 直接替换设备列表为新的数组
}))
