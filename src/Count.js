import React, { useState } from 'react';

function Count(){
    const numberState = useState(5); //초깃값
    const number = numberState[0]; //현재의 변수
    const setNumber = numberState[1]; //해당 변수를 갱신하는 함수의 할당
    const addNumber = ()=>{
        setNumber(number+4);
    }
    const subNumber = ()=>{
        setNumber(number-4);
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={addNumber}>+1</button>
        <button onClick={subNumber}>-1</button>
        </>
    )
}

export default Count