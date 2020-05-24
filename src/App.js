import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <CustomNavbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route path="/cart" component={Cart} /> */}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
