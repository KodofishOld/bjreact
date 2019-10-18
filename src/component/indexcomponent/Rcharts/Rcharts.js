import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import './Rcharts.css'
const data = [
    {
        name: 'Page A', uv: 40, pv: 20, amt: 24,
    },
    {
        name: 'Page B', uv: 30, pv: 18, amt: 22,
    },
    {
        name: 'Page C', uv: 20, pv: 90, amt: 22,
    },
    {
        name: 'Page D', uv: 20, pv: 38, amt: 20,
    },
    {
        name: 'Page E', uv: 190, pv: 40, amt: 21,
    },
    {
        name: 'Page F', uv: 20, pv: 30, amt: 25,
    },
    {
        name: 'Page G', uv: 34, pv: 43, amt: 21,
    },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
            <AreaChart className="AreaChart"
                       width={730}
                       height={262}
                       data={data}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        );
    }
}