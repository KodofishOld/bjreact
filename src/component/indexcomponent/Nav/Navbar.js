import React from "react";
import {Avatar, Icon} from "antd";
import './Navbar.css';

class Navbar extends React.Component{
    render() {
        return(
            <div>
                <div className="container">
                    <nav>
                        <ul className="flex-nav">
                            <li><a href="#"><Avatar size={32} icon="user" /></a></li>
                            <li><a href="#"><Icon type="login" style={{ fontSize: 32 }}/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Navbar