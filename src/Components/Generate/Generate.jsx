import React, { useState } from 'react';
import './Generate.css';
var randomWords = require('random-words');

const Generate = () => {
    const [word, setWord] = useState('Click the button to generate a word..');
    const displayWord = document.querySelector('.Display-Word');
    if (displayWord) {
        displayWord.innerHTML = word;
    }
    const handleClick_Generate = () => {
        let randomWord = randomWords();
        randomWord = randomWord.charAt(0).toUpperCase() + randomWord.slice(1);
        console.log(randomWord);
        displayWord.classList.add('Display-Word_active');
        setWord(randomWord);
    }
    return (
        <div className="Generate-Component_container" onClick={handleClick_Generate}>
            GENERATE
        </div>
    )
}

export default Generate;

