import React, { useEffect, useState } from 'react';
import { addToDb, getStroedCart } from '../../utilities/fakedb';
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

    useEffect(() =>{
        const storedCart = getStroedCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = games.find(game=> game.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setActivity(savedCart)
    },[games])

    const handleAddToClick = (game)=>{
        const newActivity = [...activity, game];
        setActivity(newActivity);
        addToDb(game.id);

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