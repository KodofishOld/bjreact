import React from "react";
import './index.css';
import {Col, Row} from "antd";
import Cards from "./indexcomponent/Cards/Cards";
import Time from "./indexcomponent/Cards/Time";
import Navbar from "./indexcomponent/Nav/Navbar";
import Example from "./indexcomponent/Rcharts/Rcharts";
import Static from "./indexcomponent/Static/Static";
import Static2 from "./indexcomponent/Static/Static2";
import Listview from "./indexcomponent/List/List";



class Index extends React.Component {
    render() {
        return(

            <div>
                <Row>
                    <Col>
                        <Time />
                    </Col>
                </Row>
                <Row className="nav">
                    <Col span={6}> </Col>
                    <Col span={6}> </Col>
                    <Col span={6}><h1>LAB519</h1></Col>
                    <Col span={6}><Navbar /></Col>
                </Row>
                <Row className="charts">
                    <Col span={12} >
                        <div className="Ex">
                            <Example />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="c1">
                            <Static />
                            <Static2 />
                        </div>
                    </Col>
                </Row>
                <Row className="List">
                    <Col span={12} >
                        <Listview />
                    </Col>
                </Row>
                <Row className="cards">
                    <Col span={12} >
                        <Cards />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index;