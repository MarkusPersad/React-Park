import {RFLayout} from "./components/layout";
import {useDevices} from './store'
import {useEffect} from "react";
import Devices from './test/devices.json'
function App(){
    const {setDevices} = useDevices()
    useEffect(()=>{
        setDevices(Devices.devices)
    })
    return(
       <div>
           <RFLayout/>
       </div>
    )
}

export default App;