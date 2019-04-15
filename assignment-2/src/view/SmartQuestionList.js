import React, { Component } from "react";
import model from "../model/model";
import QuestionList from "./QuestionList";
import questionPresenter from "../presenter/QuestionPresenter";

const mapModelStateToComponentState = modelState => ({
    questions: modelState.questionDisplayedList,
    user: modelState.currentUser,
    questionSearchText: modelState.questionSearchText
});

export default class SmartQuestionList extends Component {
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
            <QuestionList questions={this.state.questions} 
                onViewDetails={questionPresenter.onViewDetails}
                questionSearchText={this.state.questionSearchText}
                onChangeSearchText={questionPresenter.onChangeSearchText}
                onSearchByTag={questionPresenter.onSearchByTag}
                onSearchByTitle={questionPresenter.onSearchByTitle}
            />
        );
    }
}
