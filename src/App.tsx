import React from 'react';
// import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.scss';
import { observer } from 'mobx-react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './views/Login';
import Empty from './views/Empty';
import Home from './views/Home';
import PersonReasonOKRExame from './views/TeamOKRExam/PersonReasonOKRExame';
import PersonYearKRDetail from './views/TeamOKRExam/PersonYearKRDetail';
import TeamYearKRDetail from './views/TeamOKRExam/TeamYearKRDetail';

export default observer(function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            {<Redirect to="/login" />}{' '}
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/PersonReasonOKRExame/:type" component={PersonReasonOKRExame} />
          <Route path="/PersonYearKRDetail" component={PersonYearKRDetail} />
          <Route path="/TeamYearKRDetail" component={TeamYearKRDetail} />
          <Route path="/*" component={Empty} />
        </Switch>
      </HashRouter>
    </div>
  );
});
