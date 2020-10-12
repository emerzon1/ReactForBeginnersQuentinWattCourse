import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Card from "./Views/Card";
//import Counter from './Components/Counter';
function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>
                <Header />
                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/card">
                            <Card />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
