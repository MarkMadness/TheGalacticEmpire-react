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

            {/* Top News */}
            <div id='top-news'>
                <div className='row'>
                    <div className='column'>
                        <div className='col-title'>Title of News Article</div>
                        <img className='col-img' src='./images/News/NewsImageTemplate.jpg' />
                        <div className='col-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='col-title'>Title of News Article</div>
                        <img className='col-img' src='./images/News/NewsImageTemplate.jpg' />
                        <div className='col-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='col-title'>Title of News Article</div>
                        <img className='col-img' src='./images/News/NewsImageTemplate.jpg' />
                        <div className='col-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='col-title'>Title of News Article</div>
                        <img className='col-img' src='./images/News/NewsImageTemplate.jpg' />
                        <div className='col-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='enlist'>
                {/* Enlist */}
                <div className='enlist-left'>
                    <img className='enlist-img' src='./images/enlist2.jpg' alt=''></img>
                </div>
                <div className='enlist-center'>
                    <div className='enlist-content'>
                        <h1>Enlist</h1>
                        <p className='enlist-text'>Ready to join the greatest military the galaxy has ever known. Click on the 
                            button to begin your application for the best military experience in existence!
                        </p>
                        <button type='button' className='button'>Start your Application</button>
                        {/* <form>
                            <label for='firstName' className='label-enlist'>First Name:</label>
                            <input type='text' name='firstName' className='input-enlist'></input><br />
                            <label for='firstName'className='label-enlist'>Last Name:</label>
                            <input type='text' name='firstName'className='input-enlist'></input><br />
                            <label for='firstName'className='label-enlist'>Email:</label>
                            <input type='text' name='firstName'className='input-enlist'></input><br />
                            <label for='firstName'className='label-enlist'>Phone:</label>
                            <input type='text' name='firstName'className='input-enlist'></input><br />
                            <input type="submit" value="Submit">Submit Application</input>
                        </form> */}
                    </div>
                </div>
                <div className='enlist-right'>
                    <img className='enlist-img-right' src='./images/enlist1.jpg' alt=''></img>
                </div>
            </div>

            <div id='report'>
                <div className='report-left'>
                    <img className='report-img' src='./images/banner3.jpg' alt='Imperial Banner'></img>
                </div>
                <div className='report-center-img'>
                    <img className='report-img sedition-img' src='./images/reportsedition.jpg' alt=''></img>
                </div>
                <div className='report-center-content'>
                    <p className='report-text'>Ensure the streets of your city remain safe from crime and rebel
                    terrorists. Report any and all suspicious activity simply by clicking the button below and 
                    make your Emperor proud!</p>
                    <button type='button' className='button'>Report</button>
                </div>
                
                <div className='report-right'>
                    <img className='report-img' src='./images/banner3.jpg' alt='Imperial Banner'></img>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
