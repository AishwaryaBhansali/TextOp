import React, {useState} from 'react'

export default function Form(props) {

    const [count, setCount] = useState(0);

    const handleOnClick = (event) => {
        console.log("On click", text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnClick2 = (event) => {
        console.log("On click", text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);

        if(text === ""){
            setCount(0);
        }
        else{
        setCount(text.split(" ").length);
        }
    }

    const handleOnClear = (event) => {
        console.log("Clear Text");
        let newText = "";
        setText(newText);
    }

    const handleOnReverse = (event) => {
        let newString = "";
        console.log("Reverse Text");
        let n = text.length;
        for(let i=n-1; i>=0; i--) {
            newString += text[i];
        }
        setText(newString);
    }

    const handleOnSpeak = (event) => {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
    }
    
    const [text, setText] = useState('');

    

    
  
    return(
        <>
        <div className='container' style = {{color: props.mode==="dark"?"white":"black"}}>
            <div className="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleOnClick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleOnClick2}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleOnClear}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleOnReverse}>Reverse Text</button>
            <button className='btn btn-primary mx-2 my-3' onClick={handleOnSpeak}>Speak</button>
            <h1>Your text summary</h1>
            <p>You used <b>{count}</b> words and <b>{text.length}</b> characters.</p>
            <p><b>{0.08 * text.split(" ").length}</b> minutes read.</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
}


