import React from "react";
import "./index.css";
import { HelloWorldFunctional } from "./Components/HelloWorld";
import Header from "./Components/Header";
//import Counter from './Components/Counter';
function App() {
    return (
        <div>
            <Header/>
            <HelloWorldFunctional name="Evan" />
        </div>
    );
}

export default App;
