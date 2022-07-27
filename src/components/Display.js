import React from "react";
import "./Display.css";


function Display(props) {

    function displayTime(timeInSecs) {
        let hr = ("0" + Math.floor(timeInSecs / 60)).slice(-2);
        let m = ("0" + Math.floor(timeInSecs % 60)).slice(-2);
        return (hr + ":" + m);
    }
    return (
        <div id="Display">
            <p style={{ "fontSize": "24px" }}>{props.isBreak ? "Break" : "Work"}</p>
            <p>{displayTime(props.timeRemaining)}</p>
        </div>
    );
}

export default Display;