import React from "react";
import NavBar from './NavBar'
import QuestionSummary from "./QuestionSummary";
import QuestionList from "./QuestionList";
import AddQuestion from "./AddQuestion";

const makeQuestion = (id, author, title, text, creationDateTime, tags, voteCount) => ({
    id, author, title, text, creationDateTime, tags, voteCount
})

const question = makeQuestion(1, {id: 1, username: "u1", password: "asdf", score:11}, "question 1", "ana are mere multe1", 
"02/02/02", ["tag1","tag2","tag3"], 5)

const questions = [question, question, question]
const Test = () => (
    
    <AddQuestion question={question}/>
);

export default Test;