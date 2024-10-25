import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <Features />
            <HowItWorks />
            <CallToAction />
            <Footer />
        </div>
    );
}

export default App;
