import React, { Component } from "react";
import model from "../model/model";

import QuestionDetails from "./QuestionDetails";

const mapModelStateToComponentState = (modelState, props) => ({
    question: model.getQuestion(parseInt(props.match.params.questionId))
})

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(model.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        model.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapModelStateToComponentState(model.state, this.props));
        }
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionDetails
                question={this.state.question} />
        );
    }
}
