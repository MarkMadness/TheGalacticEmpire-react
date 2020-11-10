import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div id='footer-container'>
            <div className='nav-container'>
                <nav className='nav-footer'>
                    <a href='./footercareer'>Non-Military Career</a>
                    <a href='./footersupport'>Support</a>
                    <a href='./footercontact'>Contact</a>
                </nav>
            </div>

            {/* <div className='nav-container'>
                <nav className='nav-footer'>
                    <div>
                        <a href='./footercareer'>Non-Military Career</a>
                    </div>
                    <div className='footer-links'>
                        <a href='./footersupport'>Support</a>
                    </div>
                    <div className='footer-links'>
                        <a href='./footercontact'>Contact</a>
                    </div>
                </nav>
            </div> */}

            {/* <div className='nav-container'>
                <div className='nav-table'>
                    <ul id='horizontal-list'>
                        <li><a href='./footercareer'>Non-Military Career</a></li>
                        <li><a href='./footersupport'>Support</a></li>
                        <li><a href='./footercontact'>Contact</a></li>
                    </ul>
                </div>
            </div> */}

            <div className='project-notes'>
                <em>This is a react application for a Star Wars inspired fan project. The project is based on the concept of the Galactic Empire having a website like any goverment 
                    or company would have. The styling, design, content, and bias are in favor of an imperial react developer. ~ Mark Roenfeldt</em>
            </div>
        </div>
    )
}

export default Footer
