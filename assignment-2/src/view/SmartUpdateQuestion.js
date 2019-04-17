import React, { Component } from "react";
import model from "../model/model";

import AddQuestion from "./AddQuestion";
import questionPresenter from "../presenter/QuestionPresenter";
import UpdateQuestion from "./UpdateQuestion";

const mapModelStateToComponentState = modelState => ({
    updateQuestion: modelState.updateQuestion
});

export default class SmartCreateStudent extends Component {
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
            <UpdateQuestion 
                onUpdate={questionPresenter.onUpdate}
                onChange={questionPresenter.onChangeForUpdate}
                question={this.state.updateQuestion}
                 />
        );
    }
}
