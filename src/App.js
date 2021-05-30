import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Title from './pages/title';
import Game from './pages/game';
import LeaderBoard from './pages/leaderboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Title} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route component={Title} />
      </Switch>
    </Router>
  );
}

export default App;