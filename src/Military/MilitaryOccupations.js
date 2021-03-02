import React from 'react'
import Footer from '../Footer'
import MainHeader from '../MainHeader'
import './MilitaryOccupations.css'

function MilitaryOccupations() {
    return (
        <div>
            <MainHeader />
            <div id='header-section'>
                <h1 className='header-header'>Military Occupations</h1>
                <p className='header-text'>There are many ranks within our mighty miltary. Explore and see which rank you would seek to ascend to.</p>
            </div>
                {/* Imperial Ranks: Grand Moff, Grand Admiral, Admiral, Captain,  */}
            <div className='occupation-container'>
                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                    </div>
                    <div className='occ-text'>
                        <h1>Lieutenant</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                    </div>
                    <div className='occ-text'>
                        <h1>Lieutenant</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                    </div>
                    <div className='occ-text'>
                        <h1>Lieutenant</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MilitaryOccupations
