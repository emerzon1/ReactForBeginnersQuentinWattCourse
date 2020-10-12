import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import BirthdayAnimation from "../Components/BirthdayAnimation"
let timeStarted;
function Home() {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        timeStarted = Date.now()
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    if(time - timeStarted < 3000 || !timeStarted){
        return <Loader />
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }} className="font-bold text-2xl">
                Happy 45<sup>th</sup> Birthday!
            </h1>
            <BirthdayAnimation />
        </div>
    );
}
export default Home;
