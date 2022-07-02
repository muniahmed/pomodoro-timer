import React from "react";
import "./PlayPause.css";

function PlayPause(props) {
    return (
        <div id="PlayPause">
            <div id="PlayPauseButton" onClick={props.toggleTimer}>
                <i className="fa-solid fa-play fa-2xl"></i>
                <i className="fa-solid fa-pause fa-2xl"></i>
            </div>
            <i className="fa-solid fa-repeat fa-2xl" onClick={props.reset}></i>
        </div>
    );
}

export default PlayPause;