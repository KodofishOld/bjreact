import React from "react";
import {Icon} from "antd";
import './Ele.css'


class Electricity extends React.Component{
    render() {
        return(
            <div className="icon">
                <Icon type="thunderbolt" style={{fontSize:80, color:"#FFFFFF"}}/>
            </div>
        )
    }
}
export default Electricity