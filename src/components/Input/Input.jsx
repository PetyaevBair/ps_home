import { useState } from 'react';
import './Input.css'

export default function Input({text, isShowLogo, imgSrc}) {

    const [inputText, setInputText] = useState(text);

    function inputChange (e) {
        setInputText(e.target.value);
        console.log(inputText);
    };

    return (
        <div className='input-style'>
            {isShowLogo && <img className="logo" src={imgSrc} alt="Логотип журнала"/>}
            <input className="input-style__text" type='text' value={inputText} onChange={inputChange}/>
        </div>
    );
}