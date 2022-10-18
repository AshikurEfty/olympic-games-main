import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Game from '../Game/Game';
import './Sports.css';

const Sports = () => {
    const [games, setGames] = useState([]);

    const [activity, setActivity] = useState([]);
    
    useEffect(() =>{
        fetch('olympic.json')
        .then(res => res.json())
        .then(data => setGames(data))
    },[]);

    const handleAddToClick = (game)=>{
        const newActivity = [...activity, game];
        setActivity(newActivity);
    }

    return (
        <div className='sports-container'>
            <div className="game-container">
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                        handleAddToClick={handleAddToClick}
                    ></Game>)
                }
            </div>
            <div className="activity-container">
                <Activity 
                activity={activity}></Activity>
            </div>
        </div>
    );
};

export default Sports;