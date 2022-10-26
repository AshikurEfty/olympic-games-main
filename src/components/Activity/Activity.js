import React, {useState, useEffect} from 'react';
import efty from '../../images/efty1.jpg';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Activity.css';



const Activity = (props) => {
    const {activity} = props;

    let totalTime = 0;
    let quantity = 0;
    for(const game of activity){
        quantity = quantity + game.quantity;
        totalTime = totalTime + game.time * quantity;
    }


    const [second, setSecond] = useState("0");

    useEffect(()=>{
        const local = localStorage.getItem('break');
        setSecond(local);
    },[])

    const handleBreak = (e)=>{
            setSecond(e.target.name);
            localStorage.setItem("break",e.target.name);
    }

    
    const diffToast =()=>{
        toast.success("Wow So Easy!",{
            position: "bottom-right"
        })
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
                <h3 className='item'>Activity items: {quantity}</h3>
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
                <button onClick={diffToast}>Activity Compeleted</button>
            </div>
            <ToastContainer></ToastContainer>
           
        </div>
    );
};

export default Activity;
