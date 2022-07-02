import React from "react";
import "./TimerControl.css";


function TimerControl(props) {
    return (
        <div id="Container">
            <p id="Label">{props.label}</p>
            <div id="Controls">
                <i className="fa-solid fa-arrow-down-long" onClick={props.decrement}></i>
                <p id="Time">{props.time}</p>
                <i className="fa-solid fa-arrow-up-long" onClick={props.increment}></i>
            </div>
        </div >
    );
}

export default TimerControl;