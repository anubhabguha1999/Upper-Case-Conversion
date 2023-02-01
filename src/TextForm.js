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
    const handelClearText = ()=>{
        //console.log("Lowercase was Clicked");
        let newText = '';
        setText(newText);
    }
    const copyText = ()=>{
      var newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(Text.value); 
    }
    const handelExtraSpace = ()=>{
      let newText = count.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const handelOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    
    const [count,setText] = useState('Enter Your Text here');
  return (
    <>
      <div className="container" style= {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={count} onChange={handelOnChange} style={{backgroundColor : props.mode==='dark'?'#042743':'white',color : props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelupClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handelDownClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handelClearText}>Clear Text</button>
        <button className="btn btn-primary mx-5" onClick={copyText}>Click to Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handelExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{count.split(" ").length} charecters and {count.length} words</p>
      <p>{0.008*count.split(" ").length} minutes can be taken to read this article </p>
      <h3>Preview</h3>
      <p>{count}</p>
    </div>
    </>
  )
}
