import React from 'react';
import './App.css';

import { HashRouter, Switch, Route } from "react-router-dom";

import SmartLogin from './view/SmartLogin';
import BannedUser from './view/BannedUser';
import SmartQuestionList from './view/SmartQuestionList';
import SmartAddQuestion from './view/SmartAddQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import Test from './view/Test';

const App = () => (
  <div className="App">
    <HashRouter>
      <Switch>
        <Route exact={true} component={SmartLogin} path="/" />
        <Route exact={true} component={BannedUser} path="/banned-user" />
        <Route exact={true} component={SmartQuestionList} path="/all-questions" />
        <Route exact={true} component={SmartAddQuestion} path="/add-question" />
        <Route exact={true} component={SmartQuestionDetails} path="/question-details/:questionId" />'
        <Route exact={true} component={SmartQuestionList} path="/all-questions" />
      </Switch>
    </HashRouter>
  </div>
);


export default App;
