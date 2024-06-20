import {Layout, Menu, MenuProps} from "antd";
import React, {useEffect, useState} from "react";
import {
    AccountBookOutlined,
    DesktopOutlined,
    PieChartFilled,
    PieChartOutlined,
} from "@ant-design/icons";
import Devices from '../../test/devices.json'
import './index.css'
import {useDevices} from '../../store/'
import {Outlet, useNavigate} from "react-router-dom";
import {DeviceType} from "../../types";
const {Content,Sider} = Layout
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label:React.ReactNode,
    key:React.Key,
    icon?:React.ReactNode,
    handler?:()=>void,
    children?:MenuItem[]
):MenuItem{
    return {
        key,
        icon,
        children,
        label,
        onClick:handler
    } as MenuItem
}
export function RFLayout(){
    const setDevices = useDevices(state => state.setDevices)
    const tDevices = useDevices(state => state.devices)
    const items:MenuItem[] = [
        getItem('Devices Monitor','Viewer',<DesktopOutlined/>,()=>{},tDevices.map(device=>getItem(device.label,device.key))),
        getItem('Devices Information','DeviceStatus',<PieChartOutlined/>,()=>{}),
        getItem('Devices Control','Controller',<PieChartFilled/>,()=>{}),
        getItem('About','About',<AccountBookOutlined/>,()=>{})
    ]
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        setDevices(Devices.devices as DeviceType[])
    })
    return(
        <>
            <Layout style={{minHeight:'100vh'}}>
                <Sider
                    collapsible={true}
                    collapsed={collapsed}
                    onCollapse={(value)=>setCollapsed(value)}
                    >
                    <div>
                        <Menu theme="dark" defaultSelectedKeys={['Viewer']} mode="inline" items={items}
                            onClick={(e)=>{
                                if (e.key === 'DeviceStatus'|| e.key === 'Controller'|| e.key === 'About')
                                    navigate('/'+e.key)
                                else  navigate('/')
                                console.log(e.key)
                            }}/>
                    </div>
                </Sider>
                <Layout className="layout-context">
                    <Content>
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}