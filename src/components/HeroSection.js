import React from 'react';
import './HeroSection.css'; // Import the CSS for styling
import heroBackground from '../hero.jpg'; // Import the background image

function HeroSection() {
    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <h1>Welcome to Munipal</h1>
            <p>Transforming urban living through smart technology</p>
            <p>Your proactive meter solution, connecting you with your municipality.</p>
            <div>
                <button>Download for iOS</button>
                <button>Download for Android</button>
            </div>
        </section>
    );
}

export default HeroSection;
