import React from 'react';
import { Route, Switch } from "react-router";
import { Boardgame } from './components/boardgames/Boardgame';
import { MainContent } from './components/layout/MainContent';
import { NavBar } from './components/layout/NavBar';
import { Login } from './components/login/login';
import { NotFound } from './components/notFound/notfound'
import { Product } from './components/product/product'
import { Insert } from './components/backend/insert'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route strict exact path="/login" component={Login} />
          <Route strict exact path="/" component={MainContent} />
          <Route strict exact path="/backend/insertar" component={Insert} />
          <Route path="/productos/:id" component={Boardgame} />
          <Route strict exact path="/*" component={NotFound} /> 
        </Switch>
    </div>
  );
}

export default App;
