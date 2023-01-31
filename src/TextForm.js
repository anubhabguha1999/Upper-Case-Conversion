import React, {useState} from 'react'

export default function TextForm(props) {
    const handelupClick = ()=>{
        console.log("Uppercase was Clicked");
        let newText = count.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [count,setText] = useState('Enter Your Text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={count} onChange={handelOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelupClick}>Convert to Upper Case</button>
    </div>
  )
}
