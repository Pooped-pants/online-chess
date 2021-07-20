import React from 'react';
import GameEnd from "./components/GameEnd";
import PlayGame from "./components/PlayGame"

function PlayScreen() {
    return (
        <div>
           <PlayGame />
            <GameEnd />
        </div>
    )
}

export default PlayScreen;

