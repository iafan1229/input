import React, { useState } from 'react';
import './Clock.css'

function Clock() {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    setInterval(() => {
        setSecond(new Date().getSeconds())
        setMinute(new Date().getMinutes())
        setHour(new Date().getHours())
    }, 1000);

    return (
        <>
            <h1 className={second>50?'red' : second>40?'hotpink': second>30?'pink':'black'}>{hour} : {minute} : {second} </h1>
        </>
    )
}

export default Clock