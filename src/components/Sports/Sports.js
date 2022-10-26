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

    useEffect(()=>{
        const storedCart = getStroedCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedGame = games.find(game => game.id === id);
            if(addedGame){
                const quantity = storedCart[id];
                addedGame.quantity = quantity;
                savedCart.push(addedGame);
            }
        }
        setActivity(savedCart);
    },[games])

    const handleAddToClick = (selectedGame)=>{
        let newActivity = [];
        const exists = activity.find(game => game.id === selectedGame);
        if(!exists){
            selectedGame.quantity = 1;
            newActivity= [...activity, selectedGame]
        }
        else{
            const rest = activity.filter(game => game.id !== selectedGame.id);
            exists.quantity = exists.quantity + 1;
            newActivity = [...rest, exists];
        }
        setActivity(newActivity);
        // addToDb(selectedGame.id);

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