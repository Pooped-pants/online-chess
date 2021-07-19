import React from 'react';
import Chat from "./components/Chat";
import EndGame from "./components/EndGame";
import Timer from "./components/Timer";

function PlayScreen() {
    return (
        <div>
            <Chat />
            <Timer />
            <EndGame />
        </div>
    )
}

export default PlayScreen

