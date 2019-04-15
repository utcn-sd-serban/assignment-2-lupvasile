import React from "react";
import SmartNavBar from "./SmartNavBar";

const QuestionDetails = ({ question }) => (
    <div>
        <SmartNavBar />
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{question.title}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">{question.author.username}</span>
                                    <span class="tag">score: {question.author.score}</span>
                                    <span class="tag is-rounded">{question.creationDateTime}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <p>{question.text}</p>
                            <div className="media-content">
                                <div className="content">
                                    <p>

                                        {
                                            question.tags.map((tag, index) => (
                                                <span><span className="tag">{tag} </span> &nbsp;</span>
                                            ))
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default QuestionDetails;