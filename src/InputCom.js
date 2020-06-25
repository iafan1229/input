import React, {useState} from 'react';

function InputComp(){
    const [text, setText] = useState('');
    const [inputText, setInputText] = useState('');

    const onText = (e) => {
        setText(e.target.value)
        setInputText(e.target.value)
    }
    const onReverse = () => {
        setText(text.split("").reverse().join(""))
    }
    const onRemove = () => {
        setText('')
        setInputText('')
    }

    return(
        <>
            <h1>입력: {text} </h1>
            <input onChange={onText} value={inputText}/>
            <button onClick={onReverse}>Reverse</button>
            <button onClick={onRemove}>Remove</button>
        </>
    )
}

export default InputComp