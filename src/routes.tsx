import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Login} from "./components/Login";
import {Messages} from "./components/Messages";

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route exact path={"/messages"} component={Messages}/>
                <Redirect to={"/messages"}/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Redirect to={"/"}/>
        </Switch>
    )
}


