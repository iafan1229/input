import React, { useState } from 'react';

function Count(){
    const numberState = useState(100);//초깃값
    const number = numberState[0]; //현재의 변수
    const setNumber = numberState[1]; //갱신하는 함수가 할당된다
    const addNumber = () => {
        setNumber(number+5);
    }
    const subNumber = () => {
        setNumber(number-5);
    }

    return (
        <>
        <h1>{number}</h1>
        <button onClick={addNumber}>+1</button>
        <button onClick={subNumber}>-1</button>
        </>
    )
}

export default Count