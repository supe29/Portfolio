import React from 'react'
import './Services.css'
import theme_patern from '../../assets/theme_patern.png'
import Services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon1.png'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_patern} alt="" />
            </div>
            <div className="services-container">
                {Services_data.map((service, index) => {
                    return <div key={index} className="services-format">

                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">



                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services