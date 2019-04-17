import { EventEmitter } from "events";

const makeUser = (id, username, password, score, isModerator, isBlocked) => ({
    id, username, password, score, isModerator, isBlocked
})

const makeQuestion = (id, author, title, text, creationDateTime, tags, voteCount) => ({
    id, author, title, text, creationDateTime, tags, voteCount
})

class Model extends EventEmitter {
    static firstInstance = false;

    constructor() {
        super();
        var localUsers = [makeUser(1, "u1", "pass", 0, false, false),
        makeUser(2, "u2", "pass", 0, true, false),
        makeUser(3, "u3", "pass", 0, false, true)];

        this.state = {
            users: localUsers,

            currentUser: localUsers[1],//TODO: set back to null

            loginUser: {
                username: "",
                password: ""
            },

            questions: [makeQuestion(1, localUsers[0], "question 1", "ana are mere multe1",
                "02/02/02", ["tag1", "tag2", "tag3"], 0),
            makeQuestion(2, localUsers[1], "question 2", "ana are mere multe2",
                "02/01/02", ["tag2"], 4),
            makeQuestion(3, localUsers[0], "question 3", "ana are mere multe3",
                "02/02/01", ["tag1"], -4)],

            newQuestion: {
                title: "",
                text: "",
                tagsAsString: ""
            },

            updateQuestion: {
                title: "",
                text: "",
            },

            tags: ["tag1", "tag2", "tag3"],

            questionSearchText: "",

            questionDisplayedList: []
        };

        this.state.questionDisplayedList = this.state.questions;
    }

    filterQuestionsByTag(tags) {
        return this.state.questions.filter(q => tags.every(t => q.tags.includes(t)));
    }

    filterQuestionsByTitle(title) {
        return this.state.questions.filter(q => q.title.includes(title));
    }

    getQuestion(id) {
        var res = this.state.questions.find(q => q.id === id);
        return res;
    }

    addQuestion(id, author, title, text, tags) {
        this.state = {
            ...this.state,
            questions: [makeQuestion(id, author, title, text, "04/05/29", tags, 0)].concat(this.state.questions)
        };

        this.state = {
            ...this.state,
            tags: this.makeTagsList()
        };
        this.emit("change", this.state);
    }

    updateQuestion(questionId, newTitle, newText) {
        var question = this.getQuestion(questionId);
        if (question === undefined) { return; }

        question.title = newTitle;
        question.text = newText;

        this.emit("change", this.state);
        ///this does not work???
    }

    deleteQuestion(questionId) {
        this.state = {
            ...this.state,
            questions: this.state.questions.filter(q => q.id !== questionId),
            questionDisplayedList: this.state.questionDisplayedList.filter(q => q.id !== questionId)
        };
        this.emit("change", this.state);
    }

    sendVote(userId, questionId, voteType) {
        var question = this.getQuestion(questionId);
        if (voteType) {
            question.voteCount++;
            question.author.score++;
            this.state.users.find(u => u.id === userId).score++;
        } else {
            question.voteCount--;
            question.author.score--;
            this.state.users.find(u => u.id === userId).score--;
        }

        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeUpdateQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            updateQuestion: {
                ...this.state.updateQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeModelProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }

    makeTagsList() {
        var allTags = [].concat.apply([], this.state.questions.map(q => q.tags));
        return Array.from(new Set(allTags)).sort();
    }

    makeLogin(username, password) {
        var user = this.state.users.find(u => u.username === username && u.password === password);
        if (!user) return false;

        this.state = {
            ...this.state,
            currentUser: user
        };

        this.emit("change", this.state);

        return true;
    }

    changeLoginProperty(property, value) {
        this.state = {
            ...this.state,
            loginUser: {
                ...this.state.loginUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const model = new Model();

export default model;