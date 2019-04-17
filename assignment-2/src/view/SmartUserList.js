import React, { Component } from "react";
import model from "../model/model";
import QuestionList from "./QuestionList";
import questionPresenter from "../presenter/QuestionPresenter";
import UserList from "./UserList";
import userPresenter from "../presenter/UserPresenter";

const mapModelStateToComponentState = modelState => ({
    users: modelState.users
});

export default class SmartUserList extends Component {
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
            <UserList onBan={userPresenter.onBan}
                users={this.state.users}
            />
        );
    }
}
