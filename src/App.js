import React from "react";
import { HelloWorldFunctional } from "./Components/HelloWorld";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import Counter from './Components/Counter';
function App() {
    return (
        <div>
            <Header />
            <HelloWorldFunctional name="Evan" />
            <Footer />
        </div>
    );
}

export default App;
