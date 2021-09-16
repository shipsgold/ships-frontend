import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AppHeader } from './components/Header';
import { AppBaseLayout } from './components/Layout';
import { Home, Landing, Signup, Login, SignupThankyou} from './pages';


const App: React.VFC = () => (
  <AppBaseLayout>
    <AppHeader/>

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
        <Route path="/login">
          <Login address="foobar" />
        </Route>
        <Route path="/signed-up">
          <SignupThankyou address="foobar" />
        </Route>
        <Route path="/signup">
          <Signup address="foobar" />
        </Route>
        <Route path="/auth">
          <Signup address="foobar" />
        </Route>`
        <Route path="/">
          <Landing address="foobar" />
        </Route>
      </Switch>
    </Router>
  </AppBaseLayout>
)



export default App;
