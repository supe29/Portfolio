import React from 'react';
import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <hr className="footer-line" />
            <div className="footer-right">
                <p>© Copyright 2024 - Designed by kaustubh SUPE</p>
            </div>
            <div className="footer-left">
                <AnchorLink className='anchor-link' offset={50} href='#home'>
                    <p>back to top</p>
                </AnchorLink>
            </div>
        </div>
    );
}

export default Footer;
