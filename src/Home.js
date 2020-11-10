import React from 'react'
import './Home.css'
import MainHeader from './MainHeader'
import Footer from './Footer'

function Home() {
    return (
        <div className='home-container'>
            <div className='top-container'>
                <img className='top-container-img' src='./images/mainpageBG.jpg' alt=''></img>
                <MainHeader />
                <div className='quote-container'>
                    <p className='quote' cite='https://starwars.fandom.com/wiki/Declaration_of_a_New_Order'>
                        The New Order of peace has triumphed over the shadowy secrecy of shameful magicians. The direction 
                        of our course is clear. I will lead the Empire to glories beyond imagining. We have been tested, 
                        but we have emerged stronger. We move forward as one people: the Imperial citizens of the first 
                        Galactic Empire. We will prevail. Ten thousand years of peace begins today.</p>
                    <p className='quote-cite'>- Emperor Palpatine</p>
                </div>
            </div>
            <div>
                {/* Top News */}
                {/* Testimonies */}
                {/* Footer */}
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.</p>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
