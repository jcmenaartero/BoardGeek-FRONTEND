import React from 'react';
import { Route, Switch } from "react-router";
import { MainContent } from './components/layout/MainContent';
import { NavBar } from './components/layout/NavBar';
import { Login } from './components/login/login';
import { NotFound } from './components/notFound/notfound'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route strict exact path="/login" component={Login} />
          <Route strict exact path="/" component={MainContent} /> 
          <Route strict exact path="/*" component={NotFound} /> 
        </Switch>
    </div>
  );
}

export default App;
