import React from "react";
import axios from 'axios';
import './temp.css';


const img = require('./image/02.png');
class Temp extends React.Component{
    state = {
        data_loaded : false,
        articles: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api2/')
            .then(res => {
                this.setState({
                    articles: res.data,
                    data_loaded : true
                });
                console.log(res.data)
            })
    }

    render(){
        function article(article){
            return(
                <div key={article.data_id}>
                    <h1>{article.tmpValue}</h1>
                </div>
            )
        }

        function articleList(articles) {
            if(articles.length === 0){
                return ("empty");
            }
            const result = [];
            articles.forEach((item) => {
                result.push(article(item));
            });
            return(<div>{result}</div>)
        }
        return(
            <div className="bk">
                <div className="img" >
                    <img src={img} alt="img" style={{width:108}} />
                </div>
                <div className="temperature">
                    {articleList(this.state.articles)}
                </div>
            </div>

        );
    }

}
export  default  Temp;