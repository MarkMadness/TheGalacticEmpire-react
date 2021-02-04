import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import News from './News';
import MilitaryAbout from './Military/MilitaryAbout';
import MilitaryOccupations from './Military/MilitaryOccupations'
import MilitaryApplications from './Military/MilitaryApplications';
import MilitaryWeapons from './Military/MilitaryWeapons';
import GalacticNetworkAbout from './GalacticNetwork/GalacticNetworkAbout';
import GalacticNetworkGalaxyMap from './GalacticNetwork/GalacticNetworkGalaxyMap';
import GalacticNetworkHistory from'./GalacticNetwork/GalacticNetworkHistory';
import GalacticNetworkGovernment from './GalacticNetwork/GalacticNetworkGovernment';
import GalacticNetworkMarket from'./GalacticNetwork/GalacticNetworkMarket';
import LawOrderRebels from './LawOrder/LawOrderRebels';
import LawOrderBounty from './LawOrder/LawOrderBounty';
import LawOrderCode from './LawOrder/LawOrderCode';
import LawOrderExtra from './LawOrder/LawOrderExtra';
import Store from './Store';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/news'>
                        <News />
                    </Route>
                    <Route path='/militaryabout'>
                        <MilitaryAbout />
                    </Route>
                    <Route path='/militaryoccupations'>
                        <MilitaryOccupations />
                    </Route>
                    <Route path='/militaryapplications'>
                        <MilitaryApplications />
                    </Route>
                    <Route path='/militaryweapons'>
                        <MilitaryWeapons />
                    </Route>
                    <Route path='/gnabout'>
                        <GalacticNetworkAbout />
                    </Route>
                    <Route path='/gngalaxymap'>
                        <GalacticNetworkGalaxyMap />
                    </Route>
                    <Route path='/gnhistory'>
                        <GalacticNetworkHistory />
                    </Route>
                    <Route path='/gngovt'>
                        <GalacticNetworkGovernment />
                    </Route>
                    <Route path='/gnmarket'>
                        <GalacticNetworkMarket />
                    </Route>
                    <Route path='/lorebels'>
                        <LawOrderRebels />
                    </Route>
                    <Route path='/lobounty'>
                        <LawOrderBounty />
                    </Route>
                    <Route path='/locode'>
                        <LawOrderCode />
                    </Route>
                    <Route path='/loextra'>
                        <LawOrderExtra />
                    </Route>
                    <Route path='/store'>
                        <Store />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;