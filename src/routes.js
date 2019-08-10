import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./views/Home"
import JuniorLevel from "./views/JuniorLevel"
import MiddleLevel from "./views/MiddleLevel"
class RouterApp extends Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/junior" component={JuniorLevel} />
                <Route exact path="/middle" component={MiddleLevel} />
            </div>
        )
    }
}

export default RouterApp;