import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Landing, Signup } from './pages';


const App: React.VFC = () => (
  <Router>
    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/about">
        <Home />
      </Route>
      <Route path="/users">
        <Home />
      </Route>
      <Route path="/profile">
        <Landing address="foobar" />
      </Route>
      <Route path="/signup">
        <Signup address="foobar" />
      </Route>
      <Route path="/auth">
        <Signup address="foobar" />
      </Route>`
    </Switch>
  </Router>
)



export default App;
