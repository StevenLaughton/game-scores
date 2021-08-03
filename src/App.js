import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppNavbar from "./Components/Navbar";
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Switch>
        {
          Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))
        }
      </Switch>
    </BrowserRouter>
  )
}

