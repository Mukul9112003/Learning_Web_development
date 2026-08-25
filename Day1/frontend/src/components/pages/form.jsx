import { useState,React } from "react";
export default function Forms(props){
    const [text,setText]=useState("Enter Text")
    const handle_change=(event)=>{
      setText(event.target.value)
    }
    const handleupper = () => {
      setText(text.toUpperCase());
    };
    const handlelower = () => {
      setText(text.toLowerCase());
    };
    const handleclear = () => {
      setText("Enter Text");
    };
    return (
      <div className="form-floating" style={props.style}>
        <h1>This is my first frontend</h1>
        <textarea
          className="form-control "
          placeholder="Leave a comment here"
          value={text}
          onChange={handle_change}
          id="floatingTextarea2"
          style={{ width: "100%", height: "auto" }}
        ></textarea>
        <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
          <button
            type="button"
            onClick={handleupper}
            className="btn btn-primary"
            style={props.style}
          >
            Upper Case
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={props.style}
            onClick={handlelower}
          >
            Lower Case
          </button>
          <button
            type="button"
            onClick={handleclear}
            className="btn btn-success"
            style={props.style}
          >
            Success
          </button>
        </div>
      </div>
    );
}