import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText("Enter text here 2");
  return (
    <>
    <div className="container">
   <h1>{props.heading} </h1>   
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="7"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convhert To UperCase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convhert To LowerCase</button>
    </div>
    <div className="container my-2">
      <h2>Your Text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length }Minuets read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
