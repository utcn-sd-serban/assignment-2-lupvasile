import React, { Component } from "react";
import model from "../model/model";

import Login from "./Login";
import LoginPresenter from "../presenter/LoginPresenter";

const mapModelStateToComponentState = (modelState) => ({
    username: modelState.loginUser.username,
    password: modelState.loginUser.password
})

export default class SmartLogin extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login 
                username={this.state.username}
                password={this.state.password}
                onLogin={LoginPresenter.onLogin}
                onChange={LoginPresenter.onChange} />
        );
    }
}
