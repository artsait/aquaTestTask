import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {useAuth} from "./hook.js/auth.hook";
import {useRoutes} from "./routes";

const App = () => {
    let {auth} = useAuth();
    const routes = useRoutes(auth)

    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    );
}

export default App;
