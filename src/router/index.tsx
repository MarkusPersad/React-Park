import {createBrowserRouter} from "react-router-dom";
import {RFLayout} from "../components/layout";
import {Viewer} from "../components/Viewer";
import {About} from "../components/About";
import {DeviceStatus} from "../components/devicestatus";
import {Controller} from "../components/control";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<RFLayout/>,
        children:[
            {
                index:true,
                element:<Viewer/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'DeviceStatus',
                element:<DeviceStatus/>
            },
            {
                path:'Controller',
                element:<Controller/>
            }
        ]
    }
])