import model from "../model/model";
import { debug } from "util";

class QuestionPresenter {
    onViewDetails(questionId) {
        window.location.assign('#/question-details/' + questionId)
    }

    onCreate() {
        var newId = Math.max(...model.state.questions.map(q => q.id)) + 1;
        var question = model.state.newQuestion;
        var tags = question.tagsAsString.trim().split(',');
        model.addQuestion(newId, model.state.currentUser, question.title, question.text, tags);
        model.changeNewQuestionProperty("title", "");
        model.changeNewQuestionProperty("text", "");
        model.changeNewQuestionProperty("tagsAsString", "");
        model.changeModelProperty("questionDisplayedList", model.state.questions)
        window.location.assign("#/all-questions");
    }

    onChange(property, value) {
        model.changeNewQuestionProperty(property, value);
    }

    onChangeForUpdate(property, value) {
        model.changeUpdateQuestionProperty(property, value);
    }

    onChangeSearchText(value) {
        model.changeModelProperty("questionSearchText",value);
    }

    onSearchByTitle(){
        var filteredList = model.filterQuestionsByTitle(model.state.questionSearchText);
        model.changeModelProperty("questionDisplayedList",filteredList);
    }

    onSearchByTag(){
        var tags = model.state.questionSearchText.trim().split(',');
        var filteredList = model.filterQuestionsByTag(tags);
        model.changeModelProperty("questionDisplayedList",filteredList);
    }

    onUpdate(questionId) {
        model.updateQuestion(questionId, model.state.updateQuestion.title, model.state.updateQuestion.text);
        model.changeUpdateQuestionProperty("title", "");
        model.changeUpdateQuestionProperty("text", "");
        model.changeModelProperty("questionDisplayedList", model.state.questions);
        window.location.assign('#/question-details/' + questionId);
    }

    onDelete(questionId) {
        window.location.assign('#/all-questions/')
        model.deleteQuestion(questionId);
    }

    onEdit(questionId) {
        model.prepareQuestionForUpdate(questionId);
        window.location.assign("#/edit-question/" + questionId);
    }

    onVote(questionId, vote) {
        if(vote > 0){
            model.sendVote(model.state.currentUser.id, questionId, true);
        } else {
            model.sendVote(model.state.currentUser.id, questionId, false);            
        }
    }
}

const questionPresenter = new QuestionPresenter();

export default questionPresenter;