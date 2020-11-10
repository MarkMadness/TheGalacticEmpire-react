import React from 'react'
import './MainHeader.css'

function MainHeader() {
    return (
        <div id='navbar-container'>
            <div className='nav'>
                <a href='/'>Home</a>
                <a href='./news'>News</a>
                <div className='dropdown'>
                    <button className='dropbtn'>Military</button>
                    <div className='dropdown-content'>
                        <a href='./militaryabout'>About</a>
                        <a href='./militaryoccupations'>Occupations</a>
                        <a href='./militaryapplications'>Applications</a>
                        <a href='./militaryweapons'>Weapons &amp; Power</a>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn'>Galactic Network</button>
                    <div className='dropdown-content'>
                        <a href='./gnabout'>About</a>
                        <a href='./gngalaxymap'>Galaxy Map</a>
                        <a href='./gnhistory'>Historical Archives</a>
                        <a href='./gngovt'>Government</a>
                        <a href='./gnmarket'>Galactic Market</a>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className='dropbtn'>Law &amp; Order</button>
                    <div className='dropdown-content'>
                        <a href='./lorebels'>Enemies &amp; Terrorists</a>
                        <a href='./lobounty'>Bounty Board</a>
                        <a href='./locode'>Imperial Code</a>
                        <a href='./loextra'>Extra</a>
                    </div>
                </div>
                <a href='./store'>Store</a>
            </div>
        </div>
    )
}

export default MainHeader
