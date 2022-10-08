import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const[text, setText] = useState('Enter text here');
  //setText("")
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}  id="my-box" rows="8"></textarea>
        </div>
        <button class="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
