import React from 'react'
import './About.css'
import theme_patern from '../../assets/theme_patern.png'
import profile_img2 from '../../assets/aboutjpg.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_patern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img2} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a data analyst and marketing specialist , I specialize in guiding organizations through the entire data lifecycle – from conceptualization and data collection to analysis, interpretation, and compelling presentation of findings. Whether you're just starting to define your data strategy or seeking to enhance your existing data practices. My expertise spans a wide range of tools and techniques including Machine Learning, Data Visualization, Big Data Technologies, Data Engineering, Statistical Analysis, Cloud Platforms, Application development etc.</p>
                        <p>Alongside my academic achievements, I am an avid badminton player, competing at a high level and embodying qualities of discipline and perseverance. Punctual and enthusiastic, I approach every endeavor with dedication and a commitment to excellence. Additionally, I have honed my proficiency in French, facilitating effective communication and collaboration in diverse environment.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>R</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "30%" }} /></div>
                        <div className="about-skill"><p>PowerBI</p><hr style={{ width: "55%" }} /></div>
                        <div className="about-skill"><p>Machine-learning</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Rest API</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>AWS GCP Azure</p><hr style={{ width: "45%" }} /></div>
                        <div className="about-skill"><p>ETL/ELT</p><hr style={{ width: "50%" }} /></div>





                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>

            </div>
        </div>
    )
}

export default About
