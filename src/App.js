import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Home';
import News from './News';
import MilitaryAbout from './MilitaryAbout';
import MilitaryOccupations from './MilitaryOccupations'
import MilitaryApplications from './MilitaryApplications';
import MilitaryWeapons from './MilitaryWeapons';
import GalacticNetworkAbout from './GalacticNetworkAbout';
import GalacticNetworkGalaxyMap from './GalacticNetworkGalaxyMap';
import GalacticNetworkHistory from'./GalacticNetworkHistory';
import GalacticNetworkGovernment from './GalacticNetworkGovernment';
import GalacticNetworkMarket from'./GalacticNetworkMarket';
import LawOrderRebels from './LawOrderRebels';
import LawOrderBounty from './LawOrderBounty';
import LawOrderCode from './LawOrderCode';
import LawOrderExtra from './LawOrderExtra';
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