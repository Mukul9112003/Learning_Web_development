import React from "react"
import PropTypes from "prop-types"
export default function Navbar(props){
    
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            {props.title}
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
                Home
            </a>
            <a className="nav-link" href="#">
                Features
            </a>
            <a className="nav-link" href="#">
                Pricing
            </a>
            <a className="nav-link disabled" aria-disabled="true">
                Disabled
            </a>
            </div>
            <div className="form-check form-switch ms-auto" style={{display:"flex",gap:"10px",margin:"10px",color:"black"}}>
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.handleDark}/>
                <label className="form-check-label" htmlFor="switchCheckDefault">{props.text}</label>
            </div>
        </div>
        </div>
    </nav>
);
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title:"My Title",
    text:"Mode"
}