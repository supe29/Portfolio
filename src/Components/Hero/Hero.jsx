import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Kaustubh Supe, </span>Data Analyst/Engineer based in Paris.</h1>
            <p>Data analyst and engineer with 3 years of experience adept in Python, SQL, and visualization tools, passionate about driving insights through data</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">
                    {/* Link to your hosted CV */}
                    <a href="https://kaustubh-cv.tiiny.site" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>My resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
