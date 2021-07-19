import React from 'react';
import GameEnd from "./components/GameEnd";
import PlayGame from "./components/PlayGame"

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

