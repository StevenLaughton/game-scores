import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppNavbar from "./Components/navbar";
import Routes from "./routes";

export default function App() {
    return (
        <HashRouter>
            <AppNavbar/>
            <Switch>
                {
                    Routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main/>}
                        />
                    ))
                }
            </Switch>
        </HashRouter>
    )
}

