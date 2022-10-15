import React from 'react';
import logo from '../../images/olympic.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="product-container">
                <div className="header-part">
                    <div className="header">
                        <img src={logo} alt="" />
                        <h1>Olympic Games</h1>
                    </div>
                    <h3>Select Today's Games</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;