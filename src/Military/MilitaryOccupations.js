import React from 'react'
import Footer from '../Footer'
import MainHeader from '../MainHeader'
import './MilitaryOccupations.css'

{/* Lore for Stormtroopers = https://starwars.fandom.com/wiki/Stormtrooper_Corps */}
{/* Other Pages: https://www.deviantart.com/metropolis-hero1125/art/Star-Wars-Jedi-Fallen-Order-Second-Sister-PNG-815586035
                https://www.deviantart.com/metropolis-hero1125/art/Solo-a-star-wars-story-Mud-Trooper-PNG-741159797
                https://www.deviantart.com/jackaubreysw/art/41st-Elite-Corps-Swamp-Trooper-712468690
                https://www.deviantart.com/jpc-art/art/McQuarrie-trooper-Propaganda-123791888
                https://www.pinterest.com/pin/128141551882878775/

                https://sites.google.com/site/galacticempiregallery9000/system/app/pages/sitemap/hierarchy
                
            */}

{/* =========================================== */}
{/* =========================================== */}
{/* =========================================== */}
// TO DOs:
// create function for showing and hiding sections based on active button
//  Maybe instead of having the sections be active, maybe the buttons are active instead

// Future Tasks:
// format images for intelligence and ancillary section

{/* =========================================== */}
{/* =========================================== */}
{/* =========================================== */}

function displayBranch(input) {
    // set all sections to remove active in order to reset
    // take the input and match it to a class for the sections
    let section = document.getElementById(input);
    // Take the found section and add an active class to make it visible
    section.classList.toggle("section-active");
}

// initially sets the top section to active onload
// document.getElementById('top-section').onload = displayBranch('top-section');

function MilitaryOccupations() {
    return (
        <div>
            <MainHeader />
            <div id='header-section'>
                <h1 className='header-header'>Military Occupations</h1>
                <p className='header-text'>There are many ranks within our mighty miltary. Explore and see which rank you would seek to ascend to.</p>
            </div>

            <div className='buttons-section'>
                <a className='button' href='#header-section' onClick='displayBranch("top-section")'>Top</a>
                <a className='button' href='#navy-army' onClick='displayBranch("army_navy-section")'>Navy &amp; Army</a>
                <a className='button' href='#navy-army-intelligence' onClick='displayBranch("army_navy_intelligence-section")'>Navy &amp; Army Intelligence</a>
                <a className='button' href='#ancillary_branch' onClick='displayBranch("ancillary_branch")'>Ancillary Branch</a>
                <a className='button' href='#stormtroopers' onClick='displayBranch("stormtrooper-section")'>Stormtroopers</a>
                <a className='button' href='#special' onClick='displayBranch("special-section")'>Special</a>
            </div>

            {/* Start of the Ranks listings */}
            <div className='occupation-container'>
                {/* Top Section */}
                <div id='top-section' class='section'>
                    <div className='occ-title'>
                        <h1>Highest Ranks of the Galactic Empire</h1>
                    </div>
                    {/* The Emperor */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/Emperor_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                </tr>
                            </table>
                            <h1>The Emperor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    { /* Darth Vader*/}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/DarthVader_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                </tr>
                            </table>
                            <h1>Supreme Commander</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Grand Admiral + Grand General */}
                    <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/GrandAdmiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                        </tr>
                                    </table>
                                    <h1>Grand Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/GrandAdmiral2(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                        </tr>
                                    </table>
                                    <h1>Grand General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    {/* Grand Moff */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/GrandMoff_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td rowspan='2' className='silver'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='yellow'></td>
                                    <td className='yellow'></td>
                                    <td className='yellow'></td>
                                </tr>
                            </table>
                            <h1>Grand Moff</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Moff */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/Moff_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                        <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td rowspan='2' className='silver'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='yellow'></td>
                                    <td className='yellow'></td>
                                </tr>
                            </table>
                            <h1>Moff</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Governor + Fleet Commander */}
                    <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                        </tr>
                                    </table>
                                    <h1>Governor</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Fleet Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    {/* Minister/Vicroy/Administrator + Task Force Commander */}
                    <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                        </tr>
                                    </table>
                                    <h1>Minister/Viceroy/Administrator</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Grand General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    {/* Squadron Commander */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/SquadronCommander_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                        <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Squadron Commander</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Division Commander */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/DivisionCommander_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                        <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Division Commander</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Section Commander */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/SectionCommander_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                        <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Section Commander</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Squad Commander */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                        <table>
                                <tr>
                                    <td rowspan='2' className='silver'></td>
                                    <td className='red'></td>
                                    <td rowspan='2' className='silver'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Squad Commander</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div id='army_navy-section' class='section'>
                    <div className='occ-title' id='navy-army'>
                        <h1>Imperial Navy</h1>
                        <h1>Imperial Army</h1>
                    </div>
                    
                    <div className='navy-army-container'>
                        {/* High Admiral + Surface Marshal
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>High Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Surface Marshal</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div> */}
                        {/* Fleet Admiral + Marshal */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/FleetAdmiral_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Fleet Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                        <tr>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Marshal</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Admiral + General */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Admiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                            <td rowspan='2' className='silver'></td>

                                        </tr>
                                    </table>
                                    <h1>Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/General(Army)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Vice Admiral + Lieutenant General */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Vice Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>

                                        </tr>
                                    </table>
                                    <h1>Lieutenant General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Rear Admiral + Major General */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RearAdmiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Rear Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Major General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Commodore + Brigadier General */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/BrigadierGeneral(Army)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Brigadier General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Commodore + High Colonel */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commodore(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>High Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Commander + Colonel */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commander(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Colonel_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Lieutenant Commander + Lieutenant Colonel */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Captain + Major */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Major</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Captain + Captain */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Lieutenant + Senior Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/SeniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Lieutenant + Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Sublieutenant + Second Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Sub Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>2nd Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Junior Lieutenant + Junior Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/JuniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Junior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Junior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Ensign + Ensign */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Ensign</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='red'></td>
                                        </tr>
                                    </table>
                                    <h1>Ensign</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='army_navy_intelligence-section' class='section'>
                    <div className='occ-title' id='navy-army-intelligence'>
                        <h1>Imperial Navy Intelligence</h1>
                        <h1>Imperial Army Intelligence</h1>
                    </div>
                    
                    <div className='navy-army-container'>
                        {/* Director */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/Director_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td rowspan='2' className='silver'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td rowspan='2' className='silver'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Director</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* General + Admiral */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Admiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/General(Army)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Vice Admiral + Vice Admiral */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>

                                        </tr>
                                    </table>
                                    <h1>Vice Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Vice Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Rear Admiral + Rear Admiral */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RearAdmiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Rear General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RearAdmiral(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Rear Admiral</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Commodore + Senior Commodore */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Commodore + Commodore */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commodore(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commodore(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commodore</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Commander + Commander */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commander(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Commander(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Lieutenant Commander + Lieutenant Colonel */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Commander</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Captain + Senior Captain */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='gray'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='gray'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Captain + Captain */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='gray'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Captain(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='gray'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Senior Lieutenant + Senior Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/SeniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/SeniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Lieutenant + Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Sublieutenant + Second Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>2nd Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Sub Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Junior Lieutenant + Junior Lieutenant */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/JuniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='blue'></td>
                                            <td className='blue'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Junior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/JuniorLieutenant(Navy)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Junior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Ensign + Ensign */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='blue'></td>
                                        </tr>
                                    </table>
                                    <h1>Ensign</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='red'></td>
                                        </tr>
                                    </table>
                                    <h1>Ensign</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='ancillary_branch-section' class='section'>
                    <div className='occ-title-single' id='ancillary_branch'>
                        <h1>Imperial Ancillary Branch</h1>
                        <h2>Research, logistics, operations, and engineering</h2>
                    </div>
                    
                    <div className='navy-army-container'>
                        {/* Director */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/Director_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td rowspan='2' className='silver'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td rowspan='2' className='silver'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Director</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* General */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/General(Army)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Lieutenant General */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Major General */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Major General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Brigadier General */}
                        <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/BrigadierGeneral(Army)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Brigadier General</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* High Colonel */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>High Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Colonel */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Lieutenant Colonel */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/LieutenantColonel(IAB)_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant Colonel</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Major */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Major</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Captain */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Senior Lieutenant */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Senior Captain</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Lieutenant */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='red'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Second Lieutenant */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Second Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Junior Lieutenant */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td rowspan='2' className='silver'></td>
                                            <td className='yellow'></td>
                                            <td className='yellow'></td>
                                            <td rowspan='2' className='silver'></td>
                                        </tr>
                                    </table>
                                    <h1>Junior Lieutenant</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        {/* Ensign */}
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/default_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='yellow'></td>
                                        </tr>
                                    </table>
                                    <h1>Ensign</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                    </div>
                </div>
                <div id='stormtrooper-section' class='section'>
                    {/* Stormtroopers */}
                    <div className='occ-title' id='stormtroopers'>
                        <h1>Stormtroopers</h1>
                    </div>
                    
                    <div className='stormtroopers-container'>
                        {/* Stormtrooper */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/Stormtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                    </tr>
                                </table>
                                <h1>Stormtrooper</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* Coastal Defender Trooper + Cold Weather Assault Stormtrooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>

                                    <img src='./images/MOprofiles/CoastalDefenderTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Coastal Defender Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ColdWeatherAssaultStormtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Cold Weather Assault Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Crimson Stormtrooper + Flametrooper */}                    
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/CrimsonStormtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1> Crimson Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Flametrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Flametrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Forest Trooper + Incinerator Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ForestTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Forest Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/IncineratorTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Incinerator Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>


                        <div className='horizontal-line'></div>


                        {/* Heavy Weapons Stormtrooper */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/HeavyWeaponsStormtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                    </tr>
                                </table>
                                <h1>Heavy Weapons Stormtrooper</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* Heavy Sandtrooper + Heavy Shoretrooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/HeavySandtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Heavy Sandtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/HeavyShoretrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Heavy Shoretrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Heavy Snowtrooper */}
                        <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/HeavySnowtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Heavy Snowtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>


                        <div className='horizontal-line'></div>


                        {/* Imperial Heavy Trooper + Imperial Shock Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ImperialHeavyTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Imperial Heavy Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ImperialShockTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Imperial Shock Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>


                        <div className='horizontal-line'></div>


                        {/* Jumptrooper */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/Jumptrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                    </tr>
                                </table>
                                <h1>Jumptrooper</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        {/* Arctic Jumptrooper + Desert Jumptrooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ArcticJumptrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Arctic Jumptrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/DesertJumptrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Desert Jumptrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Forest Jumptrooper */}
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/MOprofiles/ForestJumptrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                    </tr>
                                </table>
                                <h1>Forest Jumptrooper</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>


                        <div className='horizontal-line'></div>


                        {/* Lava Trooper + Magma Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Lavatrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Lava Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/MagmaTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Magma Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Mortar Stormtrooper + Patrol Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/MortarStormtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Mortar Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/PatrolTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Patrol Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Range Trooper + Riot Control Stormtrooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RangeTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Range Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RiotControlStormtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Riot Control Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Sandtrooper + Dewback Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Sandtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Sandtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/DewbackTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Dewback Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Scout Trooper + Sniper Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ScoutTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Scout Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/SniperTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Sniper Trooper(Imperial Sharpshooter)</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Sea Trooper + Shadow Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Seatrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Seatrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/ShadowTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Shadow Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Space Trooper + Stormtrooper Grenadier */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Spacetrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Spacetrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/StormtrooperGrenadier_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Stormtrooper Grenadier</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Swamptrooper + WetWeatherGearStormtrooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Swamptrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Swamptrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/WetWeatherGearStormtrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Wet-weather Gear Stormtrooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
                <div id='special-section' class='section'>
                    {/* Special */}
                    <div className='occ-title' id='special'>
                        <h1>Specialized Troopers and Elite Positions</h1>
                    </div>

                    <div className='special-container'>
                        {/* Dark Trooper + Purge Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/DarkTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Dark Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Purgetrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Purge Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* SCAR Trooper + Death Trooper */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/StormCommando_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Storm Commando</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/DeathTrooper_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Death Trooper</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                        {/* Inquisitor + Royal Guard */}
                        <div className='occ-bodies'>
                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/Inquisitor_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Inquisitor</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>

                            <div className='occ-body'>
                                <div className='occ-image'>
                                    <img src='./images/MOprofiles/RoyalGuard_MOprofile.jpg'/>
                                </div>
                                <div className='occ-text'>
                                    <table>
                                        <tr>
                                            <td className='img'><img src='./images/Galactic_Empire_Emblem.png' /></td>
                                        </tr>
                                    </table>
                                    <h1>Royal Guard</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MilitaryOccupations