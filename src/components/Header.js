import React from 'react';
import logo from '../logo.png'; // Update the path according to where the logo is stored
import './Header.css'; // Import the CSS file for styling

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Munipal Logo" />
            </div>
            <nav className="navigation">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;
