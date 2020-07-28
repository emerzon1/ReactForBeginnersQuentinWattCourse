import React from "react";
import { HelloWorldFunctional } from "../Components/HelloWorld";
function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">This is the homepage</h1>
            <HelloWorldFunctional name="Evan"/>
        </div>
    );
}
export default Home;
