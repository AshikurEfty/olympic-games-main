import React from 'react';
import efty from '../../images/efty1.jpg';
import './Activity.css';

const Activity = ({activity}) => {
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
                <h2>Break Time</h2>
                <h3>Activity items: {activity.length}</h3>
            </div>
           
        </div>
    );
};

export default Activity;