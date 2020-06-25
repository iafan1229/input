import React, {useState} from 'react';

function InputComp(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    })

    const {name, nickname} = inputs
    const inputChange=(e)=>{
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]:value
        })
    }
    const onRemove =()=> {
        setInputs({
            name:'',
            nickname:''
        })
    }

    return(
        <>
            <h1>입력: {name} {nickname}</h1>
            <span>이름:</span><input name="name" onChange={inputChange} value={name}/>
            <span>닉네임:</span><input name="nickname"onChange={inputChange} value={nickname}/>
            <button onClick={onRemove}>Remove</button>
        </>
    )
}

export default InputComp