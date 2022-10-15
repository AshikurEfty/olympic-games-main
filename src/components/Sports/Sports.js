import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import './Sports.css';

const Sports = () => {
    const [games, setGames] = useState([]);

    useEffect(() =>{
        fetch('olympic.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[]);

    return (
        <div className='sports-container'>
            <div className="game-container">
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                    ></Game>)
                }
            </div>
            <div className="activity-container">
                <h3>This is activity container</h3>
            </div>
        </div>
    );
};

export default Sports;