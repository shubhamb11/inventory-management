import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import ManageTypeView from "./components/ManageTypeView";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <CustomNavbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/manage" component={ManageTypeView} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
