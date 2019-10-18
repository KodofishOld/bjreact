import React from "react";
import './Layout.css';
import {Link, Route} from "react-router-dom";
import {Icon} from "antd";
import Information from "../component/information";
import Index from "../component";


class CustomLayout extends React.Component{


    render() {
        return(
            <div>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div>

                        </div>
                    </div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <Icon type="home" />
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Information">
                                            <Icon type="bulb" />
                                            <span>Information</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/Information" component={Information} />
                </div>
            </div>
        )
    }
}


export default CustomLayout;