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
                */}

function MilitaryOccupations() {
    return (
        <div>
            <MainHeader />
            <div id='header-section'>
                <h1 className='header-header'>Military Occupations</h1>
                <p className='header-text'>There are many ranks within our mighty miltary. Explore and see which rank you would seek to ascend to.</p>
            </div>

            <div className='buttons-section'>
                <a className='button' href='#header-section'>Top</a>
                <a className='button' href='#navy-army'>Navy &amp; Army</a>
                <a className='button' href='#stormtroopers'>Stormtroopers</a>
                <a className='button' href='#special'>Special</a>
            </div>

            {/* Start of the Ranks listings */}
            <div className='occupation-container'>
                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/Emperor_MOprofile.jpg'/>
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
                
                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/DarthVader_MOprofile.jpg'/>
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
{/* ================================================================================== */}
                <div className='occ-title' id='navy-army'>
                    <h1>Imperial Navy</h1>
                    <h1>Imperial Army</h1>
                </div>
                
                <div className='navy-army-container'>
                    {/* Grand Admiral + Grand General */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/GrandAdmiral_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='yellow'></td>
                                        <td className='yellow'></td>
                                        <td className='yellow'></td>
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
                                <img src='./images/GrandGeneral_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='yellow'></td>
                                        <td className='yellow'></td>
                                        <td className='yellow'></td>
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
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/GrandMoff_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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

                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/GrandMoff_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                    </div>
                    {/* Moff */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/Moff_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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

                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/Moff_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                            <table>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                    </div>
                    {/* High Admiral + Surface Marshal */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
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
                                <img src='./images/SurfaceMarshal_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
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
                    </div>
                    {/* Fleet Admiral + High General */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
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
                                <h1>Fleet Admiral</h1>
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
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>High General</h1>
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
                                <img src='./images/Admiral_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
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
                                <h1>Admiral</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/General_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ViceAdmiral_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/RearAdmiral_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
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
                                <h1>Rear Admiral</h1>
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
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Major General</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Commodore + Brigadier */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Brigadier</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Captain Of The Line + High Colonel */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Captain of the Line</h1>
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
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>High Colonel</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Captain + Colonel */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/Captain(Navy)_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Colonel_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Colonel</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Commander + Lieutenant Colonel */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Lieutenant Colonel</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Lieutenant Commander + Major */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/LieutenantCommander_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Lieutenant Commander</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/Major_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Major</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Grand Admiral + Grand General */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/Lieutenant_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Captain(Navy)_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Captain</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Sublieutenant + Lieutenant */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Sublieutenant</h1>
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
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Lieutenant</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Ensign + Second Lieutenant */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
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
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Second Lieutenant</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    {/* Midshipman + Officer Candidate */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/allegra_ames__imperial_lieutenant_by_mauricio_morali-d91rcrh.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Midshipman</h1>
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
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Officer Candidate</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
{/* ================================================================================= */}
                {/* Stormtroopers */}
                <div className='occ-title' id='stormtroopers'>
                    <h1>Stormtroopers</h1>
                </div>
                
                <div className='stormtroopers-container'>
                    {/* Stormtrooper */}
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/Stormtrooper_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Stormtrooper</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    {/* Coastal Defener Trooper + Cold Weather Assault Stormtrooper */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/CoastalDefenderTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ColdWeatherAssaultStormtrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/CrimsonStormtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Flametrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ForestTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/IncineratorTrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                            <img src='./images/HeavyWeaponsStormtrooper_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
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
                                <img src='./images/HeavySandtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/HeavyShoretrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/HeavySnowtrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ImperialHeavyTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ImperialShockTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                            <img src='./images/Jumptrooper_MOprofile.png'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
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
                                <img src='./images/ArcticJumptrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/DesertJumptrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                            <img src='./images/ForestJumptrooper_MOprofile.jpg'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
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
                                <img src='./images/Stormtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/MagmaTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/MortarStormtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/PatrolTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/RangeTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/RiotControlStormtrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Sandtrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/DewbackTrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ScoutTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/SniperTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Seatrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/ShadowTrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Spacetrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/StormtrooperGrenadier_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
                                    </tr>
                                </table>
                                <h1>Stormtrooper Grenadier</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className='occ-bodies'>
                    <div className='occ-body'>
                        <div className='occ-image'>
                            <img src='./images/Swamptrooper_MOprofile.png'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
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
                            <img src='./images/WetWeatherGearStormtrooper_MOprofile.png'/>
                        </div>
                        <div className='occ-text'>
                            <table>
                                <tr>
                                    <td className='red'></td>
                                    <td className='red'></td>
                                </tr>
                                <tr>
                                    <td className='blue'></td>
                                    <td className='blue'></td>
                                </tr>
                            </table>
                            <h1>Wet-weather Gear Stormtrooper</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
{/* ============================================================================ */}
                 {/* Special */}
                 <div className='occ-title' id='special'>
                    <h1>Specialized Troopers and Elite Positions</h1>
                </div>

                <div className='special-container'>
                    {/* Dark Trooper + Purge Trooper */}
                    <div className='occ-bodies'>
                        <div className='occ-body'>
                            <div className='occ-image'>
                                <img src='./images/DarkTrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Purgetrooper_MOprofile.png'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/SCARTrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/DeathTrooper_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/Inquisitor2_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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
                                <img src='./images/RoyalGuard_MOprofile.jpg'/>
                            </div>
                            <div className='occ-text'>
                                <table>
                                    <tr>
                                        <td className='red'></td>
                                        <td className='red'></td>
                                    </tr>
                                    <tr>
                                        <td className='blue'></td>
                                        <td className='blue'></td>
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

            <Footer />
        </div>
    )
}

export default MilitaryOccupations
