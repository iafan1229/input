import React from 'react';
import './Hello.css'
function Hello({name, age, color, isSomething}){
    return(
    <div style={{color:color}}>
        안녕하세요 { isSomething ? 'Hi' : 'No' && name}
        </div>
    )
}

Hello.defaultProps = {
    name: '모름',
    age: '모름',
    color: 'red'
}

export default Hello