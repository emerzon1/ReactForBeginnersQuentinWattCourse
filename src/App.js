import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Product from "./Views/Product";
//import Counter from './Components/Counter';
function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>
                <Header />
                <div className="p-3">
                    <Switch>
                        <Route exact path=".netlify.app/">
                            <Home />
                        </Route>
                        <Route exact path=".netlify.app/about">
                            <About />
                        </Route>
                        <Route exact path=".netlify.app/contact">
                            <Contact />
                        </Route>
                        <Route exact path=".netlify.app/products/:id">
                            <Product />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
