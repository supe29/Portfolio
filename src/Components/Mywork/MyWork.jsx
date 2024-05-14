import React from 'react';
import './Mywork.css';
import theme_patern from '../../assets/theme_patern.png';
import mywork_data from '../../assets/mywork_data.js';
import arrow_icon from '../../assets/whitearrow.png';

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_patern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div key={index} className="image-container">
                        <a href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt="" />
                        </a>
                        <div className="overlay">
                            <a href={work.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                <p className="overlay-text">{work.w_name}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore1">
                <a href='https://github.com/supe29?tab=repositories' target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }} className="mywork-showmore">Show More
                    <img src={arrow_icon} alt="" />
                </a>
            </div>
        </div>
    );
};

export default MyWork;
