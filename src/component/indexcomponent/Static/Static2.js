import React from "react";
import { Statistic, Card, Row, Col, Icon } from 'antd';

class Static2 extends React.Component{
    render() {
        return(
            <div style={{ background: '#262D47', padding: '10px', width:'350px'}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card >
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Static2