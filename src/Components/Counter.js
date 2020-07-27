import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    const add1 = () => {
        setCount((prev) => prev+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={add1}>Add 1</h1>
        </div>
    );
}

export default Counter;