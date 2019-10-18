import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import RootRouter from "./router";
import CustomLayout from "./containers/Layout";

class App extends Component {
  render() {
    return(
        <Router>
          <CustomLayout>
            <RootRouter />
          </CustomLayout>
        </Router>
    )
  }
}

export default App;
