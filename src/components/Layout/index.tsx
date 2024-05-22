// import {useState} from "react";
// import {Layout, Menu, theme} from "antd";
//
// export function MLayout(){
//     const [collapsed, setCollapsed] = useState<boolean>(false);
//     const {Header,Sider,Footer} = Layout;
//     const {
//         token:{colorBgContainer,borderRadiusLG}
//     } = theme.useToken();
//
//     return(
//         <Layout>
//             <Sider
//                 trigger={null}
//                 collapsible
//                 collapsed={collapsed}
//                 >
//                 <div>
//                     <Menu
//                         theme={"dark"}
//                         mode={"inline"}
//                         defaultSelectedKeys={['1']}
//                          >
//
//                     </Menu>
//                 </div>
//             </Sider>
//         </Layout>
//     )
// }