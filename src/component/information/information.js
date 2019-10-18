import React from "react";
import './information.css'
import axios from "axios";
import { Table, Divider, Tag } from 'antd';
const background = require('./image/profile.jpg');


class Informations extends React.Component{
    state = {
        data_loaded : false,
        articles: []
    };

    tableStyle = {
        backgroundColor: "#ffffff",
        borderRadius: "4px"
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                res.data.map((entry)=>{
                    entry.key = entry.uid;
                    return entry
                });

                this.setState({
                    articles: res.data,
                    data_loaded : true
                });
                console.log(res.data)
            })
    }

    render() {

        const column = [
            {
                title:'Uid',
                dataIndex:'uid',
                key:'uid'
            },
            {
                title:'Department',
                dataIndex: 'department',
                key: 'department'
            },
            {
                title:'Sname',
                dataIndex: 'sname',
                key: 'sname'
            }
        ];

        return(
            <div>
                <div className="box">
                    <img className="box-img" src={background} />
                    <h1>
                        個人資訊
                    </h1>

                    <Table dataSource={this.state.articles} columns={column} style={this.tableStyle}/>

                </div>
            </div>
        )
    }
}
export default Informations