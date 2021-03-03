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

                <div className='occ-title' id='navy-army'>
                    <h1>Imperial Navy</h1>
                    <h1>Imperial Army</h1>
                </div>
                
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
                                </tr>
                                <tr>
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
                                </tr>
                                <tr>
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

                {/* Stormtroopers */}
                <div className='occ-title' id='stormtroopers'>
                    <h1>Stormtroopers</h1>
                </div>

                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/Stormtrooper_MOprofile.png'/>
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

                 {/* Special */}
                 <div className='occ-title' id='special'>
                    <h1>Special Troopers</h1>
                </div>

                <div className='occ-body'>
                    <div className='occ-image'>
                        <img src='./images/Stormtrooper_MOprofile.png'/>
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
                
            </div>

            <Footer />
        </div>
    )
}

export default MilitaryOccupations
