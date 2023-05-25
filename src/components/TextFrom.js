import React, { useState } from 'react';



export default function TextFrom(props) {
    const handelClick = ()=> {
       setText(text.toUpperCase())
    }
    const handelClick2 = ()=> {
       setText(text.toLowerCase())
    }
    const handelClick3 = ()=> {
       setText(text.toLocaleLowerCase())
    }
    const handelChangeClick = (event)=> {
       setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
       <>
        <div className="container">
        <div className={`bg-${props.mode === 'dark' ? 'transparent':'light'}`}>
            <h1 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>{props.heading}</h1>
                <div className="form-group my-3">
                    <textarea className="form-control" value={text} onChange={handelChangeClick} id="myText" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handelClick}>Convert to Upercase</button>
                <button className="btn btn-primary m-2" onClick={handelClick2}>Convert to Lovercase</button>
        </div>
        <div className="container">
            <h1>Your Text Summry</h1>
            {text.split(" ").length} word and {text.length} charecter
        </div>
        <div className="container">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
       </>
    )
}
