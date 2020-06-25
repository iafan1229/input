import React, { useState } from 'react';

function Clock(){ 
    const [second,setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    setInterval(() => {
        setSecond(new Date().getSeconds())
        setMinute(new Date().getMinutes())
        setHour(new Date().getHours())
    }, 1000);

    return (
        <>
            <h1>{hour} : {minute} : {second} </h1>
        </>
    )
}

export default Clock