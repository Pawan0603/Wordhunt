import React from "react";
import { useState } from "react";

export default function TextFrom(props) {
  let [text, setText] = useState("Enter the text")


  let handelChange = (e) => {
    setText(e.target.value);
  }
  let handelUpChange = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  let handelLoChange = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  let handelFCUWChange = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
  }

  let handelAWFCUpCChange = () => {
    let newText = text.toLowerCase();
    const arr = newText.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText2 = arr.join(" ");
    setText(newText2);
  }

  let tag = () => {
    let newText = text.toLowerCase();
    const arr = newText.split(" ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText2 = arr.join("");
    
    const arr2 = newText2.split(",");
    let newText3 = arr2.join(", #")
    setText(newText3);
  }

  let handelClear = () => {
    setText("");
  }

  let handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('copy to clipboard', 'success')
  }

  return (
    <>
      <div className="container mt-3" data-bs-theme={props.Mode} style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
        <h2>Enter the text</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelChange} id="text" rows="8"></textarea>
        </div>
        <button type="button" onClick={handelUpChange} className="btn btn-primary mx-2 my-2">Convert to UpperCase</button>
        <button type="button" onClick={handelLoChange} className="btn btn-primary mx-2 my-2">Convert to LoverCase</button>
        <button type="button" onClick={handelFCUWChange} className="btn btn-primary mx-2 my-2">Convert to S.Fw.UpperCase</button>
        <button type="button" onClick={handelAWFCUpCChange} className="btn btn-primary mx-2 my-2">All word 1st char  UpCase LoverCase</button>
        <button type="button" onClick={tag} className="btn btn-primary mx-2 my-2">Tag</button>
        <button type="button" onClick={handelClear} className="btn btn-danger mx-2 my-2">Clear</button>
        <button type="button" onClick={handelCopy} className="btn btn-success mx-2 my-2">Copy</button>
      </div>
      <hr />
      <div className="container" style={{ color: props.Mode === 'dark' ? 'white' : 'black' }}>
        <h3>Text semmary</h3>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <h4>Your text</h4>
        <p>{text}</p>
      </div>
    </>
  )
}
