import React from 'react';
import  './Cards.css'
import Temp from "./temp";
import Gas from "./Gas";
import Electricity from "./Electricity";


class Cards extends React.Component{
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
            <div>
                <div className="temperature">
                    <Temp />
                </div>
                <div className="gas">
                    <Gas />
                </div>
                <div className="ele">
                    <Electricity />
                </div>
            </div>

        )
    }
}
export default Cards