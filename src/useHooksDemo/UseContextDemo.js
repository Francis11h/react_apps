import React, { useState, createContext, useContext } from 'react';


const CountContext = createContext();

function Son() {
    let count = useContext(CountContext);
    return <h2>{count}</h2>
}

function UseContextDemo(){
    const [ count , setCount ] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>

            <CountContext.Provider value={count}>
                <Son/>
            </CountContext.Provider>
        </div>
    )
}

export default UseContextDemo;