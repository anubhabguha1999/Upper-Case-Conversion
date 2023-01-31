import React, {useState} from 'react'

export default function TextForm(props) {
    const handelupClick = ()=>{
        //console.log("Uppercase was Clicked");
        let newText = count.toUpperCase();
        setText(newText);
    }
    const handelDownClick = ()=>{
        //console.log("Lowercase was Clicked");
        let newText = count.toLowerCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [count,setText] = useState('Enter Your Text here');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={count} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelupClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handelDownClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{count.split(" ").length} charecters and {count.length} words</p>
      <p>{0.008*count.split(" ").length} minutes can be taken to read this article </p>
      <h3>Preview</h3>
      <p>{count}</p>
    </div>
    </>
  )
}
