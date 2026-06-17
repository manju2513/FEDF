import React, { useState, useEffect } from "react";
export default function FixedTimer(){
    const [count, setCount] = useState(0);
    useEffect(() =>{
        const id = setInterval(() =>{
            setCount(c => c+1);
        }, 1000);
    }, []);
    return <h2>Fixed: {count}</h2>
}