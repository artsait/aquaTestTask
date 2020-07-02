import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Login} from "./components/Login";
import {useAuth} from "./hook.js/auth.hook";
import {Messages} from "./components/Messages";

const App = () => {
    const {auth} = useAuth();
  return (
      <BrowserRouter>
          {!auth && <Switch>
          <Route exact path={"/"} component={Login}/>
        </Switch>}
          {auth && <Switch>
              <Route exact path={"/"} component={Messages}/>
          </Switch>}
      </BrowserRouter>
  );
}

export default App;
