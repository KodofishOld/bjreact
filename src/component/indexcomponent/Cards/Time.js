import React from "react";
import './Time.css'

class Time extends React.Component{
    state = {
        curTime: null,
    };



    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        return(
            <div className="time">
                <h2 className="clock_num">{this.state.curTime}</h2>
            </div>
        )
    }
}
export  default Time;