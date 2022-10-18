import React, {useState } from 'react';
import efty from '../../images/efty1.jpg';
import './Activity.css';

const Activity = (props) => {

    const {activity} = props;

    let totalTime = 0;
    for(const game of activity){
        totalTime = totalTime + game.time;
    }

    const [second, setSecond] = useState("0");
    const handleBreak = (e)=>{
            setSecond(e.target.name);
    }

    return (
        <div className='activity'>
            <div className='profile'>
                <img src={efty} alt="" />
                <h3>G.M. Ashikur Rahman Efty</h3>
                <h4>Web Design Instructor</h4>
                <p>At Sheikh Hasina Software and Technology park, Jashore.</p>

            </div>
            <hr />
            <div className="break-part">
                <h2 className='breakTime'>Add Break Time</h2>
                <h3 className='item'>Activity items: {activity.length}</h3>
                <div className="break-btn">
                    <button name='10' onClick={handleBreak}>10s</button>
                    <button name='20' onClick={handleBreak}>20s</button>
                    <button name='30' onClick={handleBreak}>30s</button>
                    <button name='40' onClick={handleBreak}>40s</button>
                    <button name='50' onClick={handleBreak}>50s</button>
                </div>
            </div>
           
            <div className="exercise-part">
                <h2>Exercise Details</h2>
                <h3>Exercise Time: {totalTime} s</h3>
                <h3>Break Time: {second} s</h3>
                <button>Activity Compeleted</button>
            </div>
           
        </div>
    );
};

export default Activity;
