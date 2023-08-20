import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // setText("Enter text here 2");
  return (
    <div>
   <h1>{props.heading} </h1>   
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="7"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convhert To UperCase</button>
    </div>
  )
}
