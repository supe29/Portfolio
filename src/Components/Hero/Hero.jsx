import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Kaustubh Supe, </span> Business Data Analyst at TSG Solution | AI Solutions | Dashboarding | RAG Systems | Cloud & SQL.</h1>
            <p>As a Business Data Analyst at TSG Solution, I specialize in transforming complex data into actionable insights that drive strategic decisions and measurable business value.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    {/* Link to your hosted CV */}
                    <a href="https://cyan-renae-39.tiiny.site" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>My resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
