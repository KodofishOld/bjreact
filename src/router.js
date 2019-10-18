import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Information from "./component/information";
import Index from "./component";
import {Layout} from "antd";

const RootRouter = () => {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/Information" component={Information} />
                </Switch>
            </Layout>
        </Router>
    )
};

export default RootRouter