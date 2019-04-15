import React, { Component } from "react";
import model from "../model/model";

import AddQuestion from "./AddQuestion";
import questionPresenter from "../presenter/QuestionPresenter";

const mapModelStateToComponentState = modelState => ({
    newQuestion: modelState.newQuestion,
    tags: modelState.tags
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
            <AddQuestion 
                onCreate={questionPresenter.onCreate}
                onChange={questionPresenter.onChange}
                question={this.state.newQuestion}
                existingTags={this.state.tags}
                 />
        );
    }
}
