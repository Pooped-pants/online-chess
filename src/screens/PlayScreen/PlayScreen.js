import React from 'react';
import chat from "./components/chat";
import EndGame from "./components/EndGame";
import Timer from "./components/Timer";

function PlayScreen() {
    return (
        <div>
            <chat />
            <Timer />
            <EndGame />
        </div>
    )
}

export default PlayScreen

