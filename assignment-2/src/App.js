import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";

import SmartLogin from './view/SmartLogin';
import BannedUser from './view/BannedUser';
import SmartQuestionList from './view/SmartQuestionList';
import SmartAddQuestion from './view/SmartAddQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartUpdateQuestion from './view/SmartUpdateQuestion';
import SmartUpdateAnswer from './view/SmartUpdateAnswer';
import Test from './view/Test';
import SmartUserList from './view/SmartUserList';
import SmartNavBar from './view/SmartNavBar';

const App = () => (
  <div className="App">
  <SmartNavBar />
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogin} path="/" />
        <Route exact={true} component={BannedUser} path="/banned-user" />
        <Route exact={true} component={SmartQuestionList} path="/all-questions" />
        <Route exact={true} component={SmartAddQuestion} path="/add-question" />
        <Route exact={true} component={SmartQuestionDetails} path="/question-details/:questionId" />'
        <Route exact={true} component={SmartUpdateQuestion} path="/edit-question/:questionId" />'
        <Route exact={true} component={SmartUpdateAnswer} path="/edit-answer/:answerId" />'
        <Route exact={true} component={SmartQuestionList} path="/all-questions" />
        <Route exact={true} component={SmartUserList} path="/ban-users" />
        <Route exact={true} component={Test} path="/" />
      </Switch>
    </HashRouter>
  </div>
);
///textboxu din questionDetails nu se updateaza singur

export default App;
