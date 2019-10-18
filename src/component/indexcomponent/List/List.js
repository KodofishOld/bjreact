import React from 'react';
import './List.css';
import axios from "axios";
import { Table } from 'antd';


class Listview extends React.Component{
    state = {
        data_loaded : false,
        articles: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
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
                <div key={article.uid}>
                    <h1>{article.sname}</h1>
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
            <div>
                <div className="List">
                    <p>[目前登入人員]</p>{articleList(this.state.articles)}
                </div>
            </div>


        );
    }

}
export default Listview;