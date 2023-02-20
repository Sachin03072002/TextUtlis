import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('uppercase clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upeer Cases","success");
        
    }
    const handledownClick=()=>{
      console.log('uppercase clicked');
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lower Cases","success");
      
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    
}
  const handleCopy=()=>{
    var text=document.getElementById('my-box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied to clipboard","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
    const handleOnChange=(event)=>{
        console.log("on chnage");
        setText(event.target.value);
    }
  const [text, setText]=useState('Enter text here');
//   text="new text" //wrong way to change the state
//   setText("new text") //correct way to change the text
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea name="text" id="my-box" cols="150" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            <button className='btn btn-primary mb-3 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mb-3 mx-2' onClick={handledownClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mb-3 mx-2' onClick={handleClearClick}>Clear</button>

            <button className='btn btn-primary mb-3 mx-2' onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary mb-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className="container my-3">
      <h1>Your text <summary></summary></h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length }Minutes reas</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something int the textbox to preview it here..."}</p>
    </div>
    </>
  )
}
