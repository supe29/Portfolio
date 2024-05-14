import React from 'react'
import './Certy.css'
import theme_patern from '../../assets/theme_patern.png'

const Certy = () => {
    return (
        <div className='certification'>
            <div className="certification-title">
                <h1>Certification</h1>
                <img src={theme_patern} alt="" />
            </div>
            <div className="certification-table">
                <table>
                    <thead>
                        <tr>
                            <th>Certificate</th>
                            <th>Iss. Organization</th>
                            <th>Core Skillset</th>
                            <th>Link</th>
                            <th>Iss. Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Build Streaming Ingestion Pipelines for Snowflakes With AWS</td>
                            <td>LinkedIn</td>
                            <td>#AWS, #Snowflake, #Data ingestion, #Streaming Data</td>
                            <td><a href="https://www.linkedin.com/learning/certificates/359885ba70e66826beb874b5aed1bbcc181d97d35461707ef79082d1fdfaf64e" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>April 2024</td>
                        </tr>
                        <tr>
                            <td>Introduction to Generative AI </td>
                            <td>Google</td>
                            <td>#GCP, #Generative AI, #Machine Learning</td>
                            <td><a href="https://www.cloudskillsboost.google/public_profiles/07e78000-c686-4369-ae26-181912456dbf/badges/4260870" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>July 2023</td>
                        </tr>
                        <tr>
                            <td>SQL: Data reporting And Analysis</td>
                            <td>LinkedIn</td>
                            <td>#Data Analysis, #SQL, #Data Reporting</td>
                            <td><a href="https://www.linkedin.com/learning/certificates/46408c902d18ec5cdea9920654b5f47e2e4d68404ebd7ac66461b2127ba10414" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>April 2023</td>
                        </tr>
                        <tr>
                            <td>Build Random Forest in R with Azure ML Studio </td>
                            <td>Coursera</td>
                            <td>#Machine Learning, #R, #MS Azure, #randomForest </td>
                            <td><a href="https://www.coursera.org/account/accomplishments/certificate/X99WSZVSGYGJ" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>Feb 2023</td>
                        </tr>
                        <tr>
                            <td>Engineer Data in Google cloud</td>
                            <td>Google</td>
                            <td>#Data Engineering, #GCP, # Google Analytics </td>
                            <td><a href="https://www.cloudskillsboost.google/public_profiles/07e78000-c686-4369-ae26-181912456dbf/badges/3227322?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>Feb 2023</td>
                        </tr>
                        <tr>
                            <td>Machine learning</td>
                            <td>Udemy</td>
                            <td>#Machine Learning, #Algorithims, #Data Analysis ,#Data Visualization,  #Python, #Pandas, #Sklearn  </td>
                            <td><a href="http:https://udemy-certificate.s3.amazonaws.com/pdf/UC-61052efc-1227-441f-a4c4-ef74ba9e6025.pdf" target='_blank' rel="noopener noreferrer">PDF</a></td>
                            <td>Nov 2020</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Certy