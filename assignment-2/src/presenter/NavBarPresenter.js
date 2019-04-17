import model from "../model/model";

class NavBarPresenter {
    onLogout() {
        window.location.assign("#/");
    }

    onAllQuestions() {
        model.changeModelProperty("questionSearchText","");
        window.location.assign("#/all-questions");
    }

    onAddQuestion() {
        window.location.assign("#/add-question");
    }
}

const navBarPresenter = new NavBarPresenter();

export default navBarPresenter;