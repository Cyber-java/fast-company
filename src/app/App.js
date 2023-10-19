import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layuots/users";
import Login from "./layuots/login";
import Main from "./layuots/main";
import NavBar from "./components/navBar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
                <Redirect path="/" />
            </Switch>
        </>
    );
}
export default App;
