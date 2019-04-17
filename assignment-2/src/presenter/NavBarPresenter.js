import model from "../model/model";

class NavBarPresenter {
    onLogout() {
        window.location.assign("#/");
    }

    onAllQuestions() {
        model.changeModelProperty("questionSearchText","");
        model.changeModelProperty("questionDisplayedList",model.state.questions);
        window.location.assign("#/all-questions");
    }

    onAddQuestion() {
        window.location.assign("#/add-question");
    }

    onBanUsers() {
        window.location.assign("#/ban-users");
    }
}

const navBarPresenter = new NavBarPresenter();

export default navBarPresenter;