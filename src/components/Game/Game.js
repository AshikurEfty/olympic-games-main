import React from 'react';
import './Game.css';

const Game = (props) => {
    const {name, img, time} = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Time Required: {time}s</p>
            <button className='select-btn'>Select Game</button>
        </div>
    );
};

export default Game;